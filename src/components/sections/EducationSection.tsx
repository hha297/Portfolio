import { motion } from 'framer-motion';
import { education, languages } from '../../data/education';
import { fadeUp, stagger } from '../../lib/motion';
import { SectionHeading } from '../ui/SectionHeading';

export function EducationSection() {
  return (
    <section id="education" className="section-pad relative py-20 md:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Education"
            title="Engineering foundation with a strong academic record."
          />
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-8 rounded-[1.6rem] border border-line bg-surface/70 p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan sm:text-sm">
              {education.period}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-text">{education.school}</h3>
            <p className="mt-2 text-muted">{education.degree}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg/50 px-3 py-1.5">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                GPA
              </span>
              <span className="text-sm font-semibold text-cyan">{education.gpa}</span>
            </div>
          </motion.article>
        </div>

        <div>
          <SectionHeading
            eyebrow="Languages"
            title="How I communicate across teams and products."
          />
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-8 space-y-3"
          >
            {languages.map((item) => (
              <motion.li
                key={item.name}
                variants={fadeUp}
                className="rounded-2xl border border-line bg-surface/70 px-5 py-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-base font-semibold text-text">{item.name}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan sm:text-sm">
                    {item.level}
                  </p>
                </div>
                <p className="mt-1.5 text-sm text-muted">{item.detail}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
