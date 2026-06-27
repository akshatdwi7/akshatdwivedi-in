import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import profilePic from "../assets/kevinRushProfile.jpg";
import { CONTACT, PROFILE, SOCIAL_LINKS } from "../constants";

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  X: FaSquareXTwitter,
  Instagram: FaInstagram,
};

const Hero = () => {
  return (
    <section className="pb-16 pt-28 md:pb-24 md:pt-36">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-muted">
          Hi, my name is
          <span className="inline-flex items-center gap-2 font-display text-xl italic text-ink md:text-2xl">
            {PROFILE.name}
            <img
              src={profilePic}
              alt=""
              className="h-8 w-8 rounded-full object-cover ring-1 ring-border md:h-9 md:w-9"
            />
          </span>
        </p>

        <h1 className="font-display mt-8 text-[2.85rem] leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          I <em>design</em>
          <br />
          <span className="italic">products</span>
          <br />
          <span className="text-[0.72em] font-normal not-italic text-muted">
            and ship them in React Native.
          </span>
        </h1>

        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted md:text-base">
          Product designer &amp; developer in {PROFILE.location}. Blank canvas to App Store — UI,
          code, and launch, end to end.
        </p>

        {PROFILE.availableForWork && (
          <p className="mt-5 text-sm text-muted">
            Available for work
          </p>
        )}

        <div className="mt-10 space-y-2 font-display text-lg md:text-xl">
          <p>
            <a
              href="#work"
              className="italic text-ink underline decoration-border underline-offset-[6px] transition hover:decoration-ink"
            >
              See the apps I&apos;ve built
            </a>
            <span className="not-italic text-muted"> ↓</span>
          </p>
          <p className="text-base not-italic text-muted md:text-lg">
            Need a dev/designer?{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-display italic text-ink underline decoration-border underline-offset-[6px] transition hover:decoration-ink"
            >
              Email me
            </a>
          </p>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="label mb-4">Also on</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
                  @{handle}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
