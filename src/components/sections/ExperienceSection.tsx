import { ExperienceTimeline } from '../experience/ExperienceTimeline';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad relative py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Roles where I shipped operational software and product features."
          description="Professional work from the software development CV — warranty operations, mobile product delivery, and frontend systems with AI and payments."
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
