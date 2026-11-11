import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useRef, useState } from 'react';
import type { FeaturedProject } from '../../data/projects';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../lib/cn';
import { fadeUp } from '../../lib/motion';
import { TechPill } from '../ui/TechPill';

type ProjectShowcaseProps = {
  project: FeaturedProject;
  reversed?: boolean;
};

export function ProjectShowcase({ project, reversed = false }: ProjectShowcaseProps) {
  const [activeShot, setActiveShot] = useState(0);
  const reduced = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const transform = useMotionTemplate`perspective(1200px) rotateX(${springX}deg) rotateY(${springY}deg)`;
  const active = project.screenshots[activeShot];

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 6);
    rotateY.set((px - 0.5) * 8);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const showNextShot = () => {
    setActiveShot((current) => (current + 1) % project.screenshots.length);
  };

  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        'grid items-start gap-8 lg:gap-12',
        reversed ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]',
      )}
    >
      <div className={cn('order-2', reversed ? 'lg:order-2' : 'lg:order-1')}>
        <div className="flex items-end gap-3 sm:gap-4">
          <span
            className="font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl"
            style={{ color: project.accent }}
          >
            {project.number}
          </span>
          <div className="min-w-0 pb-1">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted sm:text-[0.8rem]">
              {project.category}
            </p>
            <div className="mt-2 flex items-center gap-2.5 sm:gap-3">
              <img
                src={project.logo}
                alt=""
                className="h-9 w-9 shrink-0 rounded-xl object-cover sm:h-10 sm:w-10"
                loading="lazy"
                width={40}
                height={40}
              />
              <h3 className="truncate text-2xl font-semibold tracking-tight text-text sm:text-3xl md:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-xl text-lg text-text">{project.tagline}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechPill
              key={tech}
              name={tech}
              size={15}
              className="border-line bg-surface px-3.5 py-1.5 text-[0.75rem]"
            />
          ))}
        </div>

        <ul className="mt-6 space-y-3">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: project.accent }}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.website ? (
            <a
              href={project.website.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-bg transition hover:-translate-y-0.5"
              style={{ background: project.accent }}
            >
              <ExternalLink size={15} />
              {project.website.label}
            </a>
          ) : null}
          {project.source ? (
            <a
              href={project.source.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-text transition hover:border-white/20"
            >
              <Code2 size={15} />
              {project.source.label}
              <ArrowUpRight size={14} className="text-muted" />
            </a>
          ) : null}
          {project.linkedin ? (
            <a
              href={project.linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="group/linkedin inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-text transition hover:-translate-y-0.5 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                width={15}
                height={15}
                className="fill-current text-muted transition group-hover/linkedin:text-[#0A66C2]"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {project.linkedin.label}
            </a>
          ) : null}
        </div>
      </div>

      <div
        className={cn(
          'order-1 flex justify-center',
          // Keep the media flush to the description column axis
          reversed ? 'lg:order-1 lg:justify-end' : 'lg:order-2 lg:justify-start',
        )}
      >
        <motion.div
          ref={cardRef}
          style={{ transform, background: project.accentSoft }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="inline-flex max-w-full flex-col rounded-[1.8rem] border border-line p-3 sm:p-4"
        >
          <button
            type="button"
            onClick={showNextShot}
            className="group relative block max-w-full cursor-pointer overflow-hidden rounded-[1.35rem] border border-line bg-[#0a0c18] text-left leading-none"
            aria-label={`View next ${project.name} screenshot`}
          >
            <img
              src={active?.src}
              alt={active?.alt}
              className="block h-auto max-h-[min(82vh,900px)] w-auto max-w-full"
              loading="lazy"
            />
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/10 bg-bg/70 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted opacity-0 transition group-hover:opacity-100">
              Click to browse
            </span>
          </button>

          <div className="mt-3 flex w-0 min-w-full flex-wrap gap-2">
            {project.screenshots.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setActiveShot(index)}
                className={cn(
                  'cursor-pointer rounded-full px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition',
                  activeShot === index
                    ? 'text-bg'
                    : 'border border-line bg-surface/80 text-muted hover:text-text',
                )}
                style={activeShot === index ? { background: project.accent } : undefined}
                aria-pressed={activeShot === index}
              >
                {shot.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
