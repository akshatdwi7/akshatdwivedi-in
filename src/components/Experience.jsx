import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-border py-16 md:py-24">
      <div className="mb-12">
        <p className="label">Experience</p>
        <h2 className="heading-section mt-3">Where I&apos;ve worked</h2>
      </div>

      <div className="divide-y divide-border">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.year}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="grid gap-3 py-8 md:grid-cols-[100px_1fr] md:gap-8"
          >
            <p className="text-sm text-muted">{experience.year}</p>
            <div>
              <h3 className="font-display text-xl text-ink md:text-2xl">
                {experience.role}
                <span className="text-muted"> · {experience.company}</span>
              </h3>
              <p className="mt-2 text-sm text-muted">{experience.description}</p>
              <p className="mt-3 text-xs text-muted">
                {experience.technologies.join(" · ")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
