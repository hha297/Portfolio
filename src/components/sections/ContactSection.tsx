import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { socials } from '../../data/socials';
import { fadeUp, stagger } from '../../lib/motion';
import { MagneticButton } from '../ui/MagneticButton';
import { SectionHeading } from '../ui/SectionHeading';
import { SocialIcon } from '../ui/SocialIcon';

export function ContactSection() {
  return (
    <section id="contact" className="section-pad relative py-14 md:py-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface via-bg to-elevated px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Have a product to build or a team to strengthen?"
                description="I’m based in Helsinki and open to software engineering roles where ownership, product sense, and engineering quality matter."
              />

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-4 py-3.5 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,123,243,0.22)] sm:w-auto sm:gap-3 sm:px-6"
                  >
                    <Mail size={16} className="shrink-0" />
                    <span className="truncate">{profile.email}</span>
                    <ArrowUpRight size={16} className="shrink-0" />
                  </a>
                </MagneticButton>
                <a
                  href={profile.resume}
                  download="Ha-Dang-Resume.pdf"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg/50 px-5 py-3.5 text-sm font-medium text-text transition hover:border-cyan/40 hover:text-cyan sm:w-auto"
                >
                  <Download size={16} />
                  {profile.resumeLabel}
                </a>
              </div>
            </div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-3"
            >
              {socials.map((item) => (
                <motion.li key={item.id} variants={fadeUp}>
                  <a
                    href={item.href}
                    target={item.id === 'email' ? undefined : '_blank'}
                    rel={item.id === 'email' ? undefined : 'noreferrer'}
                    className="group flex items-center justify-between rounded-2xl border border-line bg-bg/40 px-4 py-4 transition hover:border-cyan/40 hover:bg-elevated/60"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-elevated/60 text-cyan">
                        <SocialIcon id={item.id} size={16} />
                      </span>
                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-text">{item.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted transition group-hover:translate-x-0.5 group-hover:text-cyan"
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
