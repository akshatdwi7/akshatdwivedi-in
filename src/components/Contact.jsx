import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CONTACT, SOCIAL_LINKS } from "../constants";

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  X: FaSquareXTwitter,
  Instagram: FaInstagram,
};

const Contact = () => {
  return (
    <section id="contact" className="border-t border-border py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-center"
      >
        <p className="label">{CONTACT.availability}</p>
        <h2 className="heading-section mx-auto mt-3 max-w-lg">
          Let&apos;s work <em>together</em>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted">
          Full-time, contract, or freelance — happy to chat about your next product.
        </p>

        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-8 inline-block font-display text-xl italic text-ink underline decoration-border underline-offset-[6px] transition hover:decoration-ink md:text-2xl"
        >
          {CONTACT.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {SOCIAL_LINKS.map(({ label, href, handle }) => {
            const Icon = socialIcons[label];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"
              >
                <Icon className="text-sm" />
                {handle}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
