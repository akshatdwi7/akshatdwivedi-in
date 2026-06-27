import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PROJECTS } from "../constants";
import { AppStoreBadge, BrowserMockup, DeviceMockup } from "./Mockups";

/* eslint-disable react/prop-types */
const AppCard = ({ project, index }) => {
  const mainLink = project.links?.find((l) => l.primary)?.href || project.url;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group border-b border-border py-12 last:border-0 md:py-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="order-2 lg:order-1">
          <a
            href={mainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h3 className="font-display text-4xl tracking-tight text-ink transition group-hover:opacity-60 md:text-5xl">
              {project.title}
            </h3>
            <p className="mt-1 font-display text-lg italic text-muted md:text-xl">
              {project.tagline}
            </p>
          </a>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-[15px]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.links.map((link) =>
                link.label === "App Store" ? (
                  <AppStoreBadge key={link.label} href={link.href} />
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-sm text-ink transition hover:opacity-60"
                  >
                    {link.label}
                    <FaArrowUpRightFromSquare className="text-[10px]" />
                  </a>
                )
              )}
            </div>
          )}
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          {project.mockup === "device" ? (
            <DeviceMockup project={project} />
          ) : (
            <BrowserMockup project={project} />
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <p className="label">Work</p>
        <h2 className="heading-section mt-3">
          Apps I&apos;ve <em>built</em>
        </h2>
        <p className="mt-4 max-w-md text-sm text-muted md:text-base">
          Designed, coded, and shipped — fintech to beauty.
        </p>
      </div>

      <div>
        {PROJECTS.map((project, index) => (
          <AppCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
