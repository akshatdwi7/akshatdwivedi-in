import { SERVICES } from "../constants";

const Marquee = () => {
  const items = [...SERVICES, ...SERVICES];

  return (
    <section className="-mx-4 overflow-hidden border-y border-ink/10 bg-ink py-5 md:-mx-6">
      <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="font-display text-xl italic text-cream md:text-2xl">{item}</span>
            <span className="text-lg text-lime-accent">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
