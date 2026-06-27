import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { CONTACT, PROFILE } from "../constants";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 md:px-4 ${
          scrolled ? "glass-nav-scrolled py-2" : "glass-nav py-2.5"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5 pl-1.5">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-ink text-sm font-bold text-cream shadow-md">
            <span className="relative z-10">{PROFILE.name.charAt(0)}</span>
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
            {PROFILE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/55 transition hover:bg-white/50 hover:text-ink"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream shadow-md transition hover:bg-ink/90 hover:shadow-lg"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2.5 text-ink transition hover:bg-white/40 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong mx-auto mt-2 max-w-5xl rounded-3xl p-3 lg:hidden"
          >
            <ul className="space-y-0.5 text-ink">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="block rounded-2xl px-4 py-3 font-medium transition hover:bg-white/50"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 block rounded-2xl bg-ink py-3.5 text-center text-sm font-semibold text-cream"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
