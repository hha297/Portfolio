import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const bubbles = [
  { size: 220, x: '8%', y: '18%', color: 'rgba(0,123,243,0.16)', duration: 18 },
  { size: 160, x: '78%', y: '12%', color: 'rgba(0,217,95,0.12)', duration: 22 },
  { size: 280, x: '68%', y: '58%', color: 'rgba(0,123,243,0.10)', duration: 26 },
  { size: 120, x: '18%', y: '72%', color: 'rgba(155,123,255,0.10)', duration: 16 },
  { size: 90, x: '42%', y: '34%', color: 'rgba(0,217,95,0.08)', duration: 20 },
];

export function AmbientBackground() {
  const reduced = usePrefersReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-x-0 top-0 h-[42vh] bg-[radial-gradient(ellipse_at_top,rgba(0,123,243,0.16),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[36vh] bg-[radial-gradient(ellipse_at_bottom,rgba(0,217,95,0.08),transparent_55%)]" />

      {bubbles.map((bubble, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            top: bubble.y,
            background: bubble.color,
          }}
          animate={
            reduced
              ? undefined
              : {
                  y: [0, -24, 10, 0],
                  x: [0, 12, -8, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={
            reduced
              ? undefined
              : {
                  duration: bubble.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </div>
  );
}
