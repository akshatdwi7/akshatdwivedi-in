import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-ink/40">Experience</p>
        <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Where I&apos;ve worked.
        </h2>
      </motion.div>

      <div className="space-y-3">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.year}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="grid gap-4 rounded-3xl border border-ink/10 bg-paper p-6 md:grid-cols-[160px_1fr] md:gap-8 md:p-8"
          >
            <div className="flex items-start">
              <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-ink/60">
                {experience.year}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {experience.role}
                <span className="font-normal text-ink/40"> at </span>
                {experience.company}
              </h3>
              <p className="mt-3 text-ink/60">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
