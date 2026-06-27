import { motion } from "framer-motion";
import { BRANDS } from "../constants";

const Brands = () => {
  return (
    <section className="py-14 md:py-16">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm font-medium uppercase tracking-widest text-ink/40"
      >
        Products &amp; brands I&apos;ve built
      </motion.p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
        {BRANDS.map((brand, i) => (
          <motion.span
            key={brand}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="font-display text-2xl font-medium tracking-tight text-ink/70 transition hover:text-ink md:text-3xl"
          >
            {brand}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Brands;
