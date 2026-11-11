import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { profile } from '../../data/profile';
import { pauseAllAudioPlayers } from '../../lib/audioPlayback';
import { fadeUp, stagger } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { SectionHeading } from '../ui/SectionHeading';
import { TrackPlayer } from '../ui/TrackPlayer';

type AboutTab = 'professional' | 'personal';

const TABS: { id: AboutTab; label: string }[] = [
  { id: 'professional', label: 'Professional' },
  { id: 'personal', label: 'Personal' },
];

/** Subtle zoom on hover/press; disabled when reduced motion is preferred. */
const MEDIA_ZOOM =
  'transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-safe:group-hover:scale-[1.06] motion-safe:group-active:scale-[1.09] motion-reduce:transform-none';

export function AboutSection() {
  const [tab, setTab] = useState<AboutTab>('professional');
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reducedMotion = usePrefersReducedMotion();

  const selectTab = useCallback((next: AboutTab) => {
    setTab(next);
  }, []);

  useEffect(() => {
    if (tab !== 'personal') pauseAllAudioPlayers();
  }, [tab]);

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') {
      return;
    }

    event.preventDefault();
    const last = TABS.length - 1;
    let nextIndex = index;

    if (event.key === 'ArrowRight') nextIndex = index === last ? 0 : index + 1;
    if (event.key === 'ArrowLeft') nextIndex = index === 0 ? last : index - 1;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = last;

    const nextTab = TABS[nextIndex];
    selectTab(nextTab.id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="about" className="section-pad relative py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Two sides of the same builder."
          description={`${profile.fullName} · ${profile.subtitle}`}
        />

        <div className="mt-10 flex flex-col gap-8">
          <div
            role="tablist"
            aria-label="About perspectives"
            className="relative inline-flex w-full max-w-md self-start rounded-full border border-line bg-surface/70 p-1 sm:w-auto"
          >
            {TABS.map((item, index) => {
              const selected = tab === item.id;
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectTab(item.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={`relative z-10 flex-1 rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:flex-none sm:px-6 ${
                    selected ? 'text-text' : 'text-muted hover:text-text'
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId={reducedMotion ? undefined : `${baseId}-tab-indicator`}
                      className="absolute inset-0 -z-10 rounded-full bg-elevated"
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 380, damping: 32 }
                      }
                    />
                  ) : null}
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[28rem]">
            {/* Keep both panels mounted so audio players retain seek position across tab switches. */}
            <div
              role="tabpanel"
              id={`${baseId}-panel-professional`}
              aria-labelledby={`${baseId}-tab-professional`}
              hidden={tab !== 'professional'}
              aria-hidden={tab !== 'professional'}
              inert={tab !== 'professional' ? true : undefined}
              className={
                reducedMotion
                  ? undefined
                  : tab === 'professional'
                    ? 'animate-[fadePanel_0.28s_ease]'
                    : undefined
              }
            >
              <ProfessionalPanel />
            </div>
            <div
              role="tabpanel"
              id={`${baseId}-panel-personal`}
              aria-labelledby={`${baseId}-tab-personal`}
              hidden={tab !== 'personal'}
              aria-hidden={tab !== 'personal'}
              inert={tab !== 'personal' ? true : undefined}
              className={
                reducedMotion
                  ? undefined
                  : tab === 'personal'
                    ? 'animate-[fadePanel_0.28s_ease]'
                    : undefined
              }
            >
              <PersonalPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfessionalPanel() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-4xl space-y-10"
    >
      <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        <motion.div variants={fadeUp}>
          <p className="text-xl font-semibold tracking-tight text-text sm:text-2xl md:text-3xl">
            {profile.name} — {profile.title}
          </p>
          <p className="mt-2 text-sm text-muted sm:text-base">{profile.subtitle}</p>
        </motion.div>

        {profile.about.map((paragraph) => (
          <motion.p key={paragraph} variants={fadeUp}>
            {paragraph}
          </motion.p>
        ))}
      </div>

      <motion.div variants={fadeUp} className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan sm:text-sm">Where I focus</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.focus.map((item) => (
            <div key={item.title} className="border-t border-line/70 pt-4">
              <h3 className="text-base font-semibold text-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="border-t border-line/80 pt-2">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.16em] text-cyan sm:text-sm">
          How I work
        </p>
        {profile.pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className="grid gap-2 border-b border-line/60 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cyan">
              0{index + 1}
            </p>
            <div>
              <h3 className="text-base font-semibold text-text">{pillar.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.copy}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="text-sm text-muted">
        Currently {profile.availability.toLowerCase()}.
      </motion.p>
    </motion.div>
  );
}

function PersonalPanel() {
  const { personal } = profile;

  return (
    <div className="space-y-14 md:space-y-16">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan sm:text-sm">Off duty</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl">
          {personal.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{personal.intro}</p>
      </header>

      <section aria-labelledby="about-fitness-heading" className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line/70 pb-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime sm:text-sm">
              Lifestyle
            </p>
            <h4 id="about-fitness-heading" className="mt-1 text-xl font-semibold text-text sm:text-2xl">
              {personal.fitness.eyebrow}
            </h4>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted sm:text-sm">
            Everyday habit
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <figure className="group overflow-hidden rounded-[1.4rem] border border-line bg-surface/50 transition-colors duration-300 hover:border-cyan/25">
            <div className="overflow-hidden">
              <img
                src={personal.fitness.image}
                alt={personal.fitness.alt}
                className={`aspect-[16/11] w-full object-cover object-center ${MEDIA_ZOOM}`}
                loading="lazy"
              />
            </div>
            <figcaption className="border-t border-line/70 px-4 py-3.5 sm:px-5">
              <p className="text-base font-semibold text-text sm:text-lg">{personal.fitness.title}</p>
              <p className="mt-1 text-sm text-muted">A quiet part of the week that keeps everything else steadier.</p>
            </figcaption>
          </figure>

          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted sm:text-lg">{personal.fitness.lead}</p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">{personal.fitness.body}</p>
            <ul className="space-y-3 border-t border-line/70 pt-4">
              {personal.fitness.points.map((point) => (
                <li key={point.label} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime sm:text-sm">
                    {point.label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{point.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-football-heading" className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line/70 pb-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#E8A0B8] sm:text-sm">
              {personal.football.eyebrow}
            </p>
            <h4 id="about-football-heading" className="mt-1 text-xl font-semibold text-text sm:text-2xl">
              Messi &amp; FC Barcelona
            </h4>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted sm:text-sm">
            Since 2014
          </p>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {personal.football.story}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <InterestMedia
            image={personal.football.messi.image}
            alt={personal.football.messi.alt}
            title={personal.football.messi.label}
            meta={personal.football.messi.since}
            metaClass="text-[#E8A0B8]"
            objectPosition="object-center"
          />
          <InterestMedia
            image={personal.football.barca.image}
            alt={personal.football.barca.alt}
            title={personal.football.barca.label}
            meta={personal.football.barca.since}
            metaClass="text-[#E8A0B8]"
            objectPosition="object-center"
          />
        </div>
      </section>

      <section aria-labelledby="about-esports-heading" className="space-y-6">
        <div className="border-b border-line/70 pb-3">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime sm:text-sm">
            {personal.esports.eyebrow}
          </p>
          <h4 id="about-esports-heading" className="mt-1 text-xl font-semibold text-text sm:text-2xl">
            Long-standing fandoms
          </h4>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {personal.esports.intro}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <EsportsStory
            image={personal.esports.t1.image}
            alt={personal.esports.t1.alt}
            title={personal.esports.t1.title}
            detail={personal.esports.t1.detail}
            since={personal.esports.t1.since}
            label={personal.esports.t1.label}
            copy={personal.esports.t1.copy}
            accent="#E31C25"
          />
          <EsportsStory
            image={personal.esports.navi.image}
            alt={personal.esports.navi.alt}
            title={personal.esports.navi.title}
            detail={personal.esports.navi.detail}
            since={personal.esports.navi.since}
            label={personal.esports.navi.label}
            copy={personal.esports.navi.copy}
            accent="#FFEE00"
          />
        </div>
      </section>

      <section aria-labelledby="about-music-heading" className="space-y-6">
        <div className="border-b border-line/70 pb-3">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted sm:text-sm">
            {personal.music.eyebrow}
          </p>
          <h4 id="about-music-heading" className="mt-1 text-xl font-semibold text-text sm:text-2xl">
            What I keep coming back to
          </h4>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {personal.music.intro}
        </p>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          <MusicStory
            image={personal.music.eminem.image}
            alt={personal.music.eminem.alt}
            name={personal.music.eminem.name}
            since={personal.music.eminem.since}
            copy={personal.music.eminem.copy}
            objectPosition="object-[center_20%]"
            track={personal.music.eminem.track}
          />
          <MusicStory
            image={personal.music.dsk.image}
            alt={personal.music.dsk.alt}
            name={personal.music.dsk.name}
            since={personal.music.dsk.since}
            copy={personal.music.dsk.copy}
            objectPosition="object-top"
            track={personal.music.dsk.track}
          />
        </div>
      </section>

    </div>
  );
}

function InterestMedia({
  image,
  alt,
  title,
  meta,
  metaClass,
  objectPosition = 'object-center',
}: {
  image: string;
  alt: string;
  title: string;
  meta: string;
  metaClass?: string;
  objectPosition?: string;
}) {
  return (
    <figure className="group overflow-hidden rounded-[1.35rem] border border-line bg-surface/60 transition-colors duration-300 hover:border-cyan/25">
      <div className="relative aspect-[16/10] overflow-hidden bg-bg">
        <img
          src={image}
          alt={alt}
          className={`h-full w-full object-cover ${objectPosition} ${MEDIA_ZOOM}`}
          loading="lazy"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 motion-safe:group-hover:opacity-100"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg/95 via-bg/45 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 sm:px-5 sm:pb-5">
          <p className="text-lg font-semibold text-text">{title}</p>
          <p className={`mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] ${metaClass ?? 'text-cyan'}`}>
            {meta}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

function EsportsStory({
  image,
  alt,
  title,
  detail,
  since,
  label,
  copy,
  accent,
}: {
  image: string;
  alt: string;
  title: string;
  detail: string;
  since: string;
  label: string;
  copy: string;
  accent: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-line bg-surface/60 transition-colors duration-300 hover:border-cyan/25">
      <div className="relative aspect-[16/10] overflow-hidden bg-bg">
        <img
          src={image}
          alt={alt}
          className={`h-full w-full object-cover object-center ${MEDIA_ZOOM}`}
          loading="lazy"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 motion-safe:group-hover:opacity-100"
        />
      </div>
      <div className="space-y-3 border-t border-line/70 px-4 py-5 sm:px-5">
        <div>
          <p className="text-lg font-semibold text-text">{title}</p>
          <p className="mt-1 text-sm text-muted">
            {detail}
            <span className="mx-2 text-line" aria-hidden>
              ·
            </span>
            <span style={{ color: accent }}>{since}</span>
          </p>
          <p className="sr-only">{label}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">{copy}</p>
      </div>
    </article>
  );
}

function MusicStory({
  image,
  alt,
  name,
  since,
  copy,
  track,
  objectPosition = 'object-center',
}: {
  image: string;
  alt: string;
  name: string;
  since: string;
  copy: string;
  track: {
    id: string;
    title: string;
    artist: string;
    src: string;
    favoriteLabel: string;
  };
  objectPosition?: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-line bg-surface/60 transition-colors duration-300 hover:border-cyan/25">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-bg">
        <img
          src={image}
          alt={alt}
          className={`h-full w-full object-cover ${objectPosition} ${MEDIA_ZOOM}`}
          loading="lazy"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 motion-safe:group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 border-t border-line/70 px-4 py-5 sm:px-5">
        <div>
          <p className="text-xl font-semibold tracking-tight text-text">{name}</p>
          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-cyan">{since}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">{copy}</p>
        <div className="mt-auto space-y-2.5 pt-1">
          <p className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cyan">
            <Heart size={12} className="fill-cyan text-cyan" aria-hidden />
            {track.favoriteLabel}
          </p>
          <TrackPlayer
            id={track.id}
            src={track.src}
            title={track.title}
            artist={track.artist}
            accent="#007bf3"
          />
        </div>
      </div>
    </article>
  );
}
