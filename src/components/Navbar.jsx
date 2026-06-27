import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { CONTACT } from "../constants";
import Logo from "./Logo";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 md:px-5 ${
          scrolled ? "glass-nav-scrolled" : "glass-nav"
        }`}
      >
        <a href="#home">
          <Logo className="h-7 w-7" showName />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                className="rounded-lg px-3 py-2 text-sm text-muted transition hover:text-ink"
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
            className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-ink/90"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-nav-scrolled mx-auto mt-2 max-w-5xl rounded-2xl p-3 lg:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink"
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
              className="mt-2 block rounded-lg bg-ink py-3 text-center text-sm font-medium text-white"
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
