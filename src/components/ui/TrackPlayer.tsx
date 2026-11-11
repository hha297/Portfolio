import { Pause, Play } from 'lucide-react';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import {
  claimAudioPlayback,
  registerAudioPlayer,
} from '../../lib/audioPlayback';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../lib/cn';

type TrackPlayerProps = {
  id: string;
  src: string;
  title: string;
  artist: string;
  accent?: string;
  className?: string;
};

const BAR_COUNT = 5;
const IDLE_LEVELS = Array.from({ length: BAR_COUNT }, () => 0.18);

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const whole = Math.floor(seconds);
  const mins = Math.floor(whole / 60);
  const secs = whole % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function TrackPlayer({
  id,
  src,
  title,
  artist,
  accent = '#007bf3',
  className,
}: TrackPlayerProps) {
  const labelId = useId();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekingRef = useRef(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const freqDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const timeDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [levels, setLevels] = useState<number[]>(IDLE_LEVELS);

  const pauseLocal = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  useEffect(() => registerAudioPlayer(id, pauseLocal), [id, pauseLocal]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
      setIsReady(true);
      setError(null);
    };
    const onTime = () => {
      if (!seekingRef.current) setCurrentTime(audio.currentTime);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };
    const onError = () => {
      setIsPlaying(false);
      setError('Unable to load this track.');
    };

    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('durationchange', onLoaded);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    if (audio.readyState >= 1) onLoaded();

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('durationchange', onLoaded);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [id, src]);

  const ensureAudioGraph = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    if (!sourceRef.current) {
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      // Snappier so kick/vocal hits read clearly without looking jittery.
      analyser.smoothingTimeConstant = 0.52;
      analyser.minDecibels = -85;
      analyser.maxDecibels = -18;

      const source = ctx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      analyserRef.current = analyser;
      sourceRef.current = source;
      freqDataRef.current = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount));
      timeDataRef.current = new Uint8Array(new ArrayBuffer(analyser.fftSize));
    }
  }, []);

  useEffect(() => {
    if (!isPlaying || reducedMotion) {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      setLevels(IDLE_LEVELS);
      return;
    }

    let active = true;

    const bandEnergy = (data: Uint8Array, from: number, to: number) => {
      const start = Math.max(0, from);
      const end = Math.min(data.length - 1, to);
      let sum = 0;
      for (let i = start; i <= end; i += 1) sum += data[i] ?? 0;
      return sum / Math.max(end - start + 1, 1) / 255;
    };

    const tick = () => {
      if (!active) return;
      const analyser = analyserRef.current;
      const data = freqDataRef.current;
      const timeData = timeDataRef.current;

      if (analyser && data && timeData) {
        analyser.getByteFrequencyData(data);
        analyser.getByteTimeDomainData(timeData);

        // Transient punch from waveform (helps kick/snare attacks).
        let peak = 0;
        for (let i = 0; i < timeData.length; i += 1) {
          peak = Math.max(peak, Math.abs((timeData[i] ?? 128) - 128));
        }
        const punch = Math.min(1, (peak / 128) * 1.8);

        // Beat = low end; vocal = speech/melody band; air = hats/detail.
        const beat = bandEnergy(data, 1, 6);
        const body = bandEnergy(data, 6, 18);
        const vocal = bandEnergy(data, 14, 48);
        const air = bandEnergy(data, 40, 90);

        // Mix beat + lyric energy per bar so the motion feels musical, not bass-only.
        const mixes = [
          beat * 0.72 + body * 0.18 + punch * 0.1,
          beat * 0.38 + vocal * 0.48 + body * 0.14,
          vocal * 0.62 + body * 0.22 + beat * 0.08 + punch * 0.08,
          beat * 0.34 + vocal * 0.46 + air * 0.2,
          beat * 0.5 + air * 0.28 + vocal * 0.14 + punch * 0.08,
        ];

        const next = mixes.map((value) => Math.max(0.12, Math.min(1, value * 1.45)));
        setLevels(next);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      active = false;
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isPlaying, reducedMotion]);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      void audioCtxRef.current?.close();
      audioCtxRef.current = null;
      analyserRef.current = null;
      sourceRef.current = null;
      freqDataRef.current = null;
      timeDataRef.current = null;
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || error) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    claimAudioPlayback(id);
    try {
      await ensureAudioGraph();
      await audio.play();
      setError(null);
    } catch {
      setIsPlaying(false);
      setError('Playback was blocked. Try again.');
    }
  };

  const seekTo = (value: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(value)) return;
    const next = Math.min(Math.max(value, 0), duration || value);
    audio.currentTime = next;
    setCurrentTime(next);
  };

  const onSeekInput = (event: ChangeEvent<HTMLInputElement>) => {
    seekTo(Number(event.target.value));
  };

  const onSeekPointerDown = (_event: ReactPointerEvent<HTMLInputElement>) => {
    seekingRef.current = true;
  };

  const onSeekPointerUp = (event: ReactPointerEvent<HTMLInputElement>) => {
    seekingRef.current = false;
    seekTo(Number(event.currentTarget.value));
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={cn(
        'rounded-[1.1rem] border border-line/80 bg-bg/55 p-3.5 sm:p-4',
        isPlaying && 'border-cyan/30',
        className,
      )}
      style={
        isPlaying
          ? { boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${accent} 28%, transparent)` }
          : undefined
      }
    >
      <audio ref={audioRef} src={src} preload="metadata" playsInline crossOrigin="anonymous" />

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlayback}
          disabled={Boolean(error)}
          aria-labelledby={labelId}
          aria-pressed={isPlaying}
          className={cn(
            'relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors',
            isPlaying
              ? 'border-transparent text-bg'
              : 'border-line bg-elevated text-text hover:border-cyan/40 hover:text-cyan',
            error && 'cursor-not-allowed opacity-50',
          )}
          style={isPlaying ? { backgroundColor: accent } : undefined}
        >
          {isPlaying && !reducedMotion ? (
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full opacity-20"
              style={{ backgroundColor: accent }}
            />
          ) : null}
          {isPlaying ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" className="translate-x-px" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <p id={labelId} className="truncate text-sm font-semibold text-text">
            {title}
          </p>
          <p className="truncate text-xs text-muted">{artist}</p>
        </div>

        <span
          className={cn(
            'flex h-7 w-7 shrink-0 items-end justify-center gap-[3px] pb-0.5',
            !isPlaying && 'opacity-35',
          )}
          aria-hidden
        >
          {levels.map((level, index) => (
            <span
              key={index}
              className="w-[3px] rounded-full transition-[height] duration-75 ease-out"
              style={{
                backgroundColor: accent,
                height: `${Math.max(3, Math.round(level * 22))}px`,
              }}
            />
          ))}
        </span>
      </div>

      <div className="mt-3 space-y-1.5">
        <label className="sr-only" htmlFor={`${id}-seek`}>
          Seek {title}
        </label>
        <input
          id={`${id}-seek`}
          type="range"
          min={0}
          max={duration || 0}
          step={0.01}
          value={Math.min(currentTime, duration || currentTime)}
          disabled={!isReady || Boolean(error) || duration <= 0}
          onChange={onSeekInput}
          onPointerDown={onSeekPointerDown}
          onPointerUp={onSeekPointerUp}
          onPointerCancel={() => {
            seekingRef.current = false;
          }}
          className="track-seek h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-cyan disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${accent} ${progress}%, color-mix(in srgb, var(--color-line) 80%, transparent) ${progress}%)`,
            accentColor: accent,
          }}
        />
        <div className="flex items-center justify-between font-mono text-[0.65rem] tabular-nums tracking-wide text-muted">
          <span>{formatTime(currentTime)}</span>
          <span>{duration > 0 ? formatTime(duration) : '--:--'}</span>
        </div>
      </div>

      {error ? (
        <p className="mt-2 text-xs text-[#E8A0B8]" role="status">
          {error}
        </p>
      ) : null}
    </div>
  );
}
