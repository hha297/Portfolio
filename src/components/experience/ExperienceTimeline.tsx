import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { cn } from '../../lib/cn';
import { fadeUp, stagger } from '../../lib/motion';
import { TechPill } from '../ui/TechPill';

export function ExperienceTimeline() {
  return (
    <motion.ol
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative mt-12 space-y-6"
    >
      {experience.map((item, index) => {
        const isLast = index === experience.length - 1;

        return (
          <motion.li key={item.id} variants={fadeUp} className="relative flex gap-4 md:gap-5">
            <div className="relative flex w-12 shrink-0 flex-col items-center">
              {!isLast ? (
                <div
                  aria-hidden
                  className="absolute top-12 bottom-[-1.5rem] w-px bg-line"
                />
              ) : null}

              <div
                className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-elevated"
                aria-hidden
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt=""
                    className={cn(
                      'h-full w-full',
                      item.logoFit === 'contain' ? 'object-contain bg-white p-0.5' : 'object-cover',
                    )}
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                ) : (
                  <span className="font-mono text-xs font-semibold text-muted">{item.monogram}</span>
                )}
              </div>
            </div>

            <article className="min-w-0 flex-1 overflow-hidden rounded-[1.6rem] border border-line bg-surface/70 transition hover:border-white/15 hover:bg-elevated/50">
              <div className="border-b border-line/80 p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-text sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <p className="rounded-full border border-line bg-bg/50 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-cyan">
                    {item.period}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <TechPill key={tech} name={tech} />
                  ))}
                </div>
              </div>

              <ul className="space-y-3 p-5 sm:p-6">
                {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  <span>{highlight}</span>
                </li>
                ))}
              </ul>
            </article>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
