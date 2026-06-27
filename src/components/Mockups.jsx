/* eslint-disable react/prop-types */

export const PhoneMockup = ({ project }) => {
  const { accent, accentSoft, logo, screen } = project;

  return (
    <div className="relative mx-auto w-[210px]">
      <div className="relative rounded-[2.4rem] border-[10px] border-ink/90 bg-ink shadow-2xl">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
        <div className="overflow-hidden rounded-[1.7rem] bg-white">
          <div className="px-5 pb-6 pt-7" style={{ backgroundColor: accentSoft }}>
            <div className="flex items-center justify-between">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: accent }}
              >
                {logo}
              </div>
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
            </div>
            <p className="mt-4 text-xs font-medium text-ink/50">{screen.label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-ink">{screen.amount}</p>
            <p className="mt-1 text-[11px] text-ink/50">{screen.sub}</p>
          </div>

          <div className="px-5 py-5">
            <div className="flex h-20 items-end justify-between gap-1.5">
              {screen.bars.map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-md"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i % 2 === 0 ? accent : accentSoft,
                  }}
                />
              ))}
            </div>
            <div className="mt-5 space-y-2.5">
              {[100, 75, 60].map((w, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="h-7 w-7 shrink-0 rounded-lg" style={{ backgroundColor: accentSoft }} />
                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-ink/10" style={{ width: `${w}%` }} />
                    <div className="mt-1.5 h-2 w-1/3 rounded-full bg-ink/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BrowserMockup = ({ project }) => {
  const { accent, accentSoft, logo, screen } = project;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl">
        <div className="flex items-center gap-2 border-b border-ink/10 bg-ink/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <div className="ml-3 flex-1 truncate rounded-md bg-ink/[0.04] px-3 py-1 text-[11px] text-ink/40">
            {screen.label}
          </div>
        </div>

        <div className="px-6 py-7" style={{ backgroundColor: accentSoft }}>
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {logo}
            </div>
            <span className="text-sm font-semibold text-ink">{project.title}</span>
          </div>
          <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
            {screen.amount}
          </p>
          <p className="mt-1 text-xs text-ink/50">{screen.sub}</p>
          <div className="mt-4 flex gap-2">
            <span
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-white"
              style={{ backgroundColor: accent }}
            >
              Shop now
            </span>
            <span className="rounded-full border border-ink/15 bg-white px-4 py-1.5 text-xs font-semibold text-ink">
              Our story
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 p-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-ink/5 bg-ink/[0.02] p-2">
              <div className="h-12 rounded-lg" style={{ backgroundColor: accentSoft }} />
              <div className="mt-2 h-2 w-full rounded-full bg-ink/10" />
              <div className="mt-1.5 h-2 w-2/3 rounded-full bg-ink/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
