import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const orbs = [
  { className: 'left-[8%] top-[18%] h-40 w-40 bg-cyan/25', delay: 0 },
  { className: 'right-[6%] top-[28%] h-32 w-32 bg-lime/20', delay: 1.2 },
  { className: 'bottom-[12%] left-[18%] h-28 w-28 bg-violet/15', delay: 0.6 },
];

const chips = [
  { label: 'ship', className: 'left-[4%] top-[42%]', delay: 0.2 },
  { label: 'iterate', className: 'right-[3%] top-[58%]', delay: 1.4 },
  { label: 'build', className: 'left-[12%] bottom-[18%]', delay: 0.8 },
];

export function FloatingDecor() {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {chips.map((chip) => (
        <motion.span
          key={chip.label}
          className={`absolute rounded-full border border-white/10 bg-surface/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted backdrop-blur-sm ${chip.className}`}
          animate={{ y: [0, -10, 0], opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 6.5, delay: chip.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}
