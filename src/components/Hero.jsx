import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowRight, FaSquareXTwitter } from "react-icons/fa6";
import profilePic from "../assets/kevinRushProfile.jpg";
import { CONTACT, PROFILE, SOCIAL_LINKS } from "../constants";

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  X: FaSquareXTwitter,
  Instagram: FaInstagram,
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Liquid gradient mesh + blobs */}
      <div className="pointer-events-none absolute inset-0 hero-mesh" />
      <div
        className="liquid-blob absolute -left-24 top-16 h-72 w-72 animate-blob-drift-1 bg-lime-accent/35"
        aria-hidden="true"
      />
      <div
        className="liquid-blob absolute -right-16 top-32 h-80 w-80 animate-blob-drift-2 bg-sky-300/30"
        aria-hidden="true"
      />
      <div
        className="liquid-blob absolute bottom-0 left-1/3 h-64 w-64 animate-blob-drift-3 bg-pink-200/25"
        aria-hidden="true"
      />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="glass-pill mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-ink/75"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work — {PROFILE.location}
          </motion.div>

          <motion.h1
            variants={fadeUp(0.08)}
            initial="hidden"
            animate="visible"
            className="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            I design &amp; build
            <br />
            <span className="relative inline-block italic">
              <span className="relative z-10 text-ink/90">digital products</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-3 w-full origin-left rounded-full bg-lime-accent/50"
                aria-hidden="true"
              />
            </span>
            <br />
            people love.
          </motion.h1>

          <motion.p
            variants={fadeUp(0.18)}
            initial="hidden"
            animate="visible"
            className="mt-7 max-w-xl text-base leading-relaxed text-ink/55 md:text-lg"
          >
            {PROFILE.name} — a product designer and React Native developer in {PROFILE.location}. I
            take ideas from blank canvas to shipped app, owning design and code end to end.
          </motion.p>

          <motion.div
            variants={fadeUp(0.28)}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-lg transition hover:bg-ink/90 hover:shadow-xl"
            >
              View my work
              <FaArrowRight className="text-xs transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${CONTACT.email}?subject=Let's work together`}
              className="glass-button inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/55"
            >
              Hire me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp(0.38)}
            initial="hidden"
            animate="visible"
            className="glass mt-8 inline-flex flex-wrap items-center gap-1 rounded-2xl p-2"
          >
            {SOCIAL_LINKS.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-xl p-2.5 text-lg text-ink/45 transition hover:bg-white/50 hover:text-ink"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Profile glass card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong relative overflow-hidden rounded-[2.25rem] p-2"
          >
            <div className="relative overflow-hidden rounded-[1.85rem]">
              <img
                src={profilePic}
                alt={PROFILE.name}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-white/10" />
            </div>

            <div className="absolute inset-x-4 bottom-4 glass-pill rounded-2xl p-3.5">
              <p className="text-sm font-semibold text-ink">{PROFILE.name}</p>
              <p className="text-xs text-ink/55">{PROFILE.role}</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [6, 4, 6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-pill absolute -right-2 -top-2 rounded-2xl px-4 py-2 text-sm font-bold text-ink shadow-lg md:-right-4"
          >
            <span className="animate-pulse-soft inline-block">Open to work</span>
          </motion.div>

          {/* Floating stat pills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glass-pill absolute -left-4 top-1/4 hidden rounded-2xl px-3 py-2 shadow-lg md:block"
          >
            <p className="text-xs font-semibold text-ink">{PROFILE.yearsExperience}</p>
            <p className="text-[10px] text-ink/45">Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="glass-pill absolute -right-2 top-2/3 hidden rounded-2xl px-3 py-2 shadow-lg md:block"
          >
            <p className="text-xs font-semibold text-ink">React Native</p>
            <p className="text-[10px] text-ink/45">Shipped to stores</p>
          </motion.div>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {[
              { v: PROFILE.yearsExperience, l: "Experience" },
              { v: "4+", l: "Products" },
              { v: "E2E", l: "Design + code" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl px-3 py-3.5 text-center"
              >
                <p className="text-lg font-semibold text-ink">{s.v}</p>
                <p className="text-[10px] text-ink/45">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
