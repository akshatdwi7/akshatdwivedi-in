import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PROJECTS } from "../constants";
import { BrowserMockup, PhoneMockup } from "./Mockups";

/* eslint-disable react/prop-types */
const ProjectRow = ({ project, index }) => {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-8 rounded-[2rem] border border-ink/10 bg-paper p-6 md:gap-12 md:p-10 lg:grid-cols-2"
    >
      <div
        className={`flex items-center justify-center rounded-3xl p-8 md:p-12 ${
          reversed ? "lg:order-2" : ""
        }`}
        style={{ backgroundColor: project.accentSoft }}
      >
        {project.mockup === "phone" ? (
          <PhoneMockup project={project} />
        ) : (
          <BrowserMockup project={project} />
        )}
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 text-sm">
          <span
            className="rounded-full px-3 py-1 font-medium text-white"
            style={{ backgroundColor: project.accent }}
          >
            {project.type}
          </span>
          <span className="text-ink/40">{project.year}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-1 text-lg text-ink/50">{project.subtitle}</p>

        <p className="mt-4 max-w-md text-base leading-relaxed text-ink/60">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-medium text-ink/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.url && (
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition hover:bg-ink/85"
            >
              Visit {project.domain || project.title}
              <FaArrowUpRightFromSquare className="text-xs transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-sm text-ink/40">{project.url}</span>
          </div>
        )}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-ink/40">
            Selected work
          </p>
          <h2 className="max-w-xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            Apps &amp; brands, designed and shipped.
          </h2>
        </div>
        <p className="max-w-sm text-ink/50">
          A few products where I owned both the design and the React Native build — from first
          sketch to the app store.
        </p>
      </motion.div>

      <div className="space-y-6 md:space-y-8">
        {PROJECTS.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
