import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <motion.p
        variants={fadeUp}
        className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
