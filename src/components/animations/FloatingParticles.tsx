import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

type FloatingParticlesProps = {
  count?: number;
};

export function FloatingParticles({ count = 18 }: FloatingParticlesProps) {
  const reduced = usePrefersReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        size: 2 + (index % 4),
        delay: (index % 7) * 0.35,
        duration: 8 + (index % 6),
        color: index % 3 === 0 ? '#007BF3' : index % 3 === 1 ? '#00D95F' : '#9B7BFF',
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full opacity-50"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 12px ${particle.color}`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
