import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { socials } from '../../data/socials';
import { fadeUp, stagger } from '../../lib/motion';
import { FloatingDecor } from '../animations/FloatingDecor';

import { Button } from '../ui/Button';
import { MagneticButton } from '../ui/MagneticButton';
import { SocialIcon } from '../ui/SocialIcon';
import { TechPill } from '../ui/TechPill';
import { FloatingParticles } from '../animations/FloatingParticles';

const terminalLines = [
  { prefix: '$', text: 'whoami' },
  { prefix: '>', text: 'ha-dang · software-developer' },
  { prefix: '$', text: 'stack --focus' },
  { prefix: '>', text: 'full-stack · mobile · ai-products' },
  { prefix: '$', text: 'ship --from idea --to production' },
  { prefix: '>', text: 'building · iterating · shipping' },
];

const techBadges = ['Next.js', 'React Native', 'TypeScript', 'PostgreSQL', 'AI SDK', 'Supabase'];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 md:pt-32">
      <FloatingParticles count={18} />
      <FloatingDecor />
      <div className="section-pad relative">
        <div className="container-shell grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <img
                src={profile.avatar}
                alt={`${profile.name} portrait`}
                className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:h-[4.5rem] sm:w-[4.5rem]"
                width={72}
                height={72}
              />
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                {profile.location}
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-mono text-sm uppercase tracking-[0.24em] text-cyan"
            >
              {profile.title}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block text-text">{profile.name}</span>
              <span className="mt-2 block bg-gradient-to-r from-cyan via-lime to-violet bg-clip-text text-transparent">
                builds products people can use.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-sm text-muted sm:mt-6 sm:text-base md:text-lg">
              {profile.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:gap-3">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                <MagneticButton className="w-full sm:w-auto">
                  <Button
                    href="#projects"
                    icon={<ArrowDownRight size={16} />}
                    className="w-full justify-center sm:w-auto"
                  >
                    Explore projects
                  </Button>
                </MagneticButton>
                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:w-auto sm:gap-3">
                  <Button
                    href="#contact"
                    variant="secondary"
                    icon={<ArrowUpRight size={16} />}
                    className="w-full justify-center px-4 sm:w-auto sm:px-5"
                  >
                    Get in touch
                  </Button>
                  <Button
                    href={profile.resume}
                    download="Ha-Dang-Resume.pdf"
                    variant="ghost"
                    icon={<Download size={16} />}
                    className="w-full justify-center border border-line bg-surface/70 px-4 text-text hover:border-cyan/40 hover:text-cyan sm:w-auto sm:px-5"
                  >
                    {profile.resumeLabel}
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2 sm:mt-8">
              {techBadges.map((badge) => (
                <TechPill
                  key={badge}
                  name={badge}
                  size={13}
                  className="border-line bg-elevated/50 px-3 py-1.5 text-[0.7rem] tracking-wide"
                />
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id === 'email' ? undefined : '_blank'}
                  rel={item.id === 'email' ? undefined : 'noreferrer'}
                  aria-label={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-2.5 py-2 text-muted transition hover:border-cyan/40 hover:text-cyan sm:px-3"
                >
                  <SocialIcon id={item.id} size={15} />
                  <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.12em] min-[420px]:inline">
                    {item.label}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan/20 via-transparent to-lime/15 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[1.6rem] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  product.dev
                </span>
              </div>

              <div className="rounded-2xl border border-line bg-bg/80 p-4 font-mono text-[0.78rem] leading-6 text-muted">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={`${line.text}-${index}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.12 }}
                    className="flex gap-3"
                  >
                    <span className="text-lime">{line.prefix}</span>
                    <span className={line.prefix === '>' ? 'text-text' : 'text-cyan'}>{line.text}</span>
                  </motion.div>
                ))}
                <motion.span
                  aria-hidden
                  className="mt-2 inline-block h-4 w-2 bg-cyan"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-elevated/50 p-4">
                  <div className="flex items-center gap-2 text-lime">
                    <Sparkles size={14} />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em]">Focus</span>
                  </div>
                  <p className="mt-2 text-sm text-text">{profile.subtitle}</p>
                </div>
                <div className="rounded-2xl border border-line bg-elevated/50 p-4">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-cyan">
                    Building now
                  </p>
                  <p className="mt-2 text-sm text-text">Notoria · AI study loops</p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 left-3 right-3 flex flex-col justify-center rounded-2xl border border-line bg-surface px-3.5 py-3 shadow-xl sm:-bottom-5 sm:left-auto sm:right-auto sm:-left-4 sm:min-w-[220px] sm:px-4 sm:py-3.5 md:-left-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">Status</p>
              <p className="mt-1 text-sm leading-snug text-text">{profile.availability}</p>
            </motion.div>

            <motion.div
              className="absolute -right-1 top-6 hidden rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-lg sm:block md:-right-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-cyan">Remote</p>
              <p className="mt-0.5 text-xs text-text">Helsinki-based</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
