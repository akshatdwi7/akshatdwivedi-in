import { BRANDS } from "../constants";

const Brands = () => {
  return (
    <section className="border-y border-border py-10">
      <p className="text-center text-xs uppercase tracking-wider text-muted">
        Built for
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {BRANDS.map((brand) => (
          <span key={brand} className="text-sm font-medium text-ink/70">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Brands;
