import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { stagger } from '../../lib/motion';
import { ProjectShowcase } from '../projects/ProjectShowcase';
import { SectionHeading } from '../ui/SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad relative py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Case studies"
          title="Products I shipped end to end — architecture, interface, and iteration."
          description="Notoria and Trackwise. Two live systems covering product direction, full-stack delivery, and the details that make software feel finished."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-16 space-y-24 md:space-y-32"
        >
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
