import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowRight, FaSquareXTwitter } from "react-icons/fa6";
import { CONTACT, PROFILE, SOCIAL_LINKS } from "../constants";

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  X: FaSquareXTwitter,
  Instagram: FaInstagram,
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 md:px-12 md:py-20"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lime-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-lime-accent/10 blur-3xl" />

        <div className="relative text-center">
          <span className="inline-block rounded-full border border-cream/20 px-4 py-1.5 text-sm font-medium text-cream/70">
            {CONTACT.availability}
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-cream md:text-6xl">
            Let&apos;s build something
            <span className="italic text-lime-accent"> worth shipping.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-cream/60">
            Have a product in mind, or a role to fill? I&apos;m available for full-time, contract and
            freelance work.
          </p>

          <a
            href={`mailto:${CONTACT.email}?subject=Work inquiry — ${PROFILE.name}`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-lime-accent px-7 py-4 text-base font-semibold text-ink transition hover:brightness-105"
          >
            {CONTACT.email}
            <FaArrowRight className="text-sm transition group-hover:translate-x-0.5" />
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, handle }) => {
              const Icon = socialIcons[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/70 transition hover:border-cream/40 hover:text-cream"
                >
                  <Icon />
                  <span>{handle}</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
