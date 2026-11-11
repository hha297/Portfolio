import { motion } from 'framer-motion';
import {
  Cloud,
  Code2,
  Database,
  Blocks,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { skills } from '../../data/skills';
import { fadeUp, stagger, staggerFast } from '../../lib/motion';
import { SectionHeading } from '../ui/SectionHeading';
import { TechPill } from '../ui/TechPill';

const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  mobile: Smartphone,
  databases: Database,
  devops: Cloud,
  integrations: Blocks,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad relative py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Technical skills"
          title="A practical stack for web, mobile, and product infrastructure."
          description="Organized from the software development CV — the tools I use to design, build, and operate applications."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = groupIcons[group.id] ?? Code2;

            return (
              <motion.article
                key={group.id}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[1.5rem] border border-line bg-surface/70 p-5 transition hover:border-white/15"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-40 blur-2xl transition group-hover:opacity-70"
                  style={{ background: group.accent }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-bg/50"
                        style={{ color: group.accent }}
                      >
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <h3 className="text-lg font-semibold text-text">{group.label}</h3>
                    </div>
                    <span
                      className="font-mono text-[0.65rem] uppercase tracking-[0.16em]"
                      style={{ color: group.accent }}
                    >
                      {String(group.items.length).padStart(2, '0')}
                    </span>
                  </div>

                  <motion.ul variants={staggerFast} className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <motion.li key={item} variants={fadeUp}>
                        <TechPill
                          name={item}
                          size={16}
                          className="gap-2 border-line bg-bg/50 px-3.5 py-2 text-[0.78rem] transition hover:border-white/20 hover:text-text"
                        />
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
