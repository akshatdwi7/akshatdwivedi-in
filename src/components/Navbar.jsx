import { useState } from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { FaBars, FaSquareXTwitter } from "react-icons/fa6";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/akshat-dwivedi-2497622a2/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/akshatdwi7", icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/Akshatdwi7", icon: FaSquareXTwitter, label: "X" },
  {
    href: "https://www.instagram.com/nachosz/",
    icon: FaInstagram,
    label: "Instagram",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mb-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/75 px-4 py-3 backdrop-blur-md md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img className="w-10 rounded-lg" src={logo} alt="Akshat logo" />
          <div className="leading-tight">
            <p className="text-sm text-neutral-400">Portfolio</p>
            <p className="font-semibold tracking-wide text-neutral-100">Akshat Dwivedi</p>
          </div>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-neutral-300 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className="transition hover:text-cyan-300" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-white/10 bg-neutral-800 p-2 text-lg text-neutral-300 transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 bg-neutral-800 p-2 text-neutral-100 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mt-2 rounded-2xl border border-white/10 bg-neutral-900/95 px-4 py-4 backdrop-blur lg:hidden">
          <ul className="space-y-3 text-neutral-200">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  className="block rounded-md px-2 py-1 transition hover:bg-neutral-800"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full border border-white/10 bg-neutral-800 p-2 text-lg text-neutral-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar
