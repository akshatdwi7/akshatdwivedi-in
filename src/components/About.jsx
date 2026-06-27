import { motion } from "framer-motion";
import { ABOUT_TEXT, SKILLS } from "../constants";

const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-ink/40">About</p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            A designer who also writes the code.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/60 md:text-lg">
            {ABOUT_TEXT.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4"
        >
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="rounded-3xl border border-ink/10 bg-paper p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-ink/40">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/10 bg-cream px-3.5 py-1.5 text-sm font-medium text-ink/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
