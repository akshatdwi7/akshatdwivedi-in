import iosMockup from "../assets/ios2.webp";
import nowwMockup from "../assets/Device.png";
import resetMockup from "../assets/460x996bb.webp";

export const PROFILE = {
  name: "Akshat Dwivedi",
  handle: "akshatdwi7",
  role: "Product Designer & React Native Developer",
  location: "Lucknow, India",
  yearsExperience: "3+ years",
  availableForWork: true,
};

export const ABOUT_TEXT = `I'm a product designer and React Native developer who builds complete applications — not just mockups. I work at the intersection of visual craft and production code, turning ideas into apps people actually use.

My process spans user research, wireframes, high-fidelity UI, and shipping cross-platform mobile apps with React Native. I've shipped consumer finance tools, premium membership experiences, and e-commerce brands.

Currently open to full-time roles, contract work, and ambitious product collaborations.`;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshat-dwivedi-2497622a2/",
    handle: "akshat-dwivedi",
  },
  {
    label: "GitHub",
    href: "https://github.com/akshatdwi7",
    handle: "akshatdwi7",
  },
  {
    label: "X",
    href: "https://x.com/Akshatdwi7",
    handle: "Akshatdwi7",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nachosz/",
    handle: "nachosz",
  },
];

export const SKILLS = [
  {
    category: "Design",
    items: ["UI/UX Design", "Product Design", "Design Systems", "Prototyping"],
  },
  {
    category: "Development",
    items: ["React Native", "React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    category: "Tools",
    items: ["Figma", "Expo", "Firebase", "App Store & Play Store"],
  },
];

export const EXPERIENCES = [
  {
    year: "Present",
    role: "Founder & Developer",
    company: "Equity Engage",
    description:
      "Building and shipping web applications end-to-end. Leading product direction, UI design, and full-stack development.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    year: "2024",
    role: "Frontend Developer",
    company: "SJ Innovations",
    description:
      "Designed and developed responsive user interfaces with Next.js and React.",
    technologies: ["Next.js", "React", "Vue.js"],
  },
  {
    year: "2024",
    role: "Cloud Intern",
    company: "DCI",
    description: "Built and maintained deployment pipelines on AWS.",
    technologies: ["AWS", "EC2", "S3", "Python"],
  },
  {
    year: "2023",
    role: "Freelance Developer",
    company: "Independent",
    description: "Delivered client web applications from concept to launch.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Piggy",
    tagline: "A better expense tracker",
    subtitle: "Live on the App Store",
    year: "2026",
    description:
      "Track every coffee, every bill, every payday — without the stress. Designed and built end to end in React Native.",
    technologies: ["React Native", "Expo", "Product Design"],
    type: "iOS App",
    mockup: "device",
    mockupImage: iosMockup,
    accent: "#0f9d6b",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/piggy-expense-tracker/id6764657143",
        primary: true,
      },
      { label: "Website", href: "https://piggybudget.com" },
    ],
  },
  {
    title: "Noww Club",
    tagline: "Daily rituals for intentional living",
    subtitle: "Live on the App Store",
    year: "2025",
    url: "https://noww.club",
    domain: "noww.club",
    description:
      "An invite-only club for peak performers — daily rituals, alignment check-ins, and guided reflections. Designed and built the iOS app and brand experience end to end.",
    technologies: ["React Native", "Product Design", "UI/UX"],
    type: "iOS App",
    mockup: "device",
    mockupImage: nowwMockup,
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/noww-club/id6760992837",
        primary: true,
      },
      { label: "Website", href: "https://noww.club" },
    ],
  },
  {
    title: "Reset",
    tagline: "Get your life back in 60 days",
    subtitle: "Live on the App Store",
    year: "2025",
    description:
      "A habit and discipline app to break distractions, build routines, and track progress — screen time blockers, focus timers, and daily challenges. Contributed to product design and React Native development.",
    technologies: ["React Native", "Product Design", "UI/UX"],
    type: "iOS App",
    mockup: "device",
    mockupImage: resetMockup,
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/reset-reset-your-life/id6755929687",
        primary: true,
      },
    ],
  },
  {
    title: "Mystiqare",
    tagline: "Skincare engineered for India",
    subtitle: "D2C beauty brand",
    year: "2024",
    url: "https://mystiqare.com",
    domain: "mystiqare.com",
    description:
      "Climate-intelligent skincare with a full e-commerce experience and brand identity.",
    technologies: ["Shopify", "UI/UX", "Brand Design"],
    type: "E-commerce",
    mockup: "browser",
    accent: "#db2777",
    links: [{ label: "Visit site", href: "https://mystiqare.com", primary: true }],
  },
];

export const CONTACT = {
  email: "akshatdwi755@gmail.com",
  location: "Lucknow, India",
  availability: "Open to full-time & contract roles",
};

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/piggy-expense-tracker/id6764657143";
