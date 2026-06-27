import { motion } from "framer-motion";
import { ABOUT_TEXT, SKILLS } from "../constants";

const About = () => {
  return (
    <section id="about" className="border-t border-border py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="label">About</p>
          <h2 className="heading-section mt-3">
            Designer who writes <em>the code</em>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted md:text-[15px]">
            {ABOUT_TEXT.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-8"
        >
          {SKILLS.map(({ category, items }) => (
            <div key={category}>
              <h3 className="label mb-3">{category}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {items.map((item) => (
                  <span key={item} className="text-sm text-ink">
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
