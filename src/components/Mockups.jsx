/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

/** Auto screenshot fallback — replace with your own image for best quality */
const getScreenshotUrl = (url, width = 900) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;

export const BrowserPreview = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const domain = project.domain || getHostname(project.url);
  const previewSrc = project.previewImage || getScreenshotUrl(project.url);

  return (
    <div className="group/preview mx-auto w-full max-w-lg">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl transition hover:shadow-[0_20px_60px_rgba(24,23,18,0.12)]"
      >
        <div className="flex items-center gap-2 border-b border-ink/10 bg-ink/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-2 flex flex-1 items-center gap-2 truncate rounded-lg bg-white px-3 py-1.5 text-[11px] text-ink/50 ring-1 ring-ink/10">
            <span className="text-ink/30">🔒</span>
            <span className="truncate">{domain}</span>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-ink/[0.03]">
          {!imgError ? (
            <img
              src={previewSrc}
              alt={`${project.title} website preview`}
              className="h-full w-full object-cover object-top transition duration-500 group-hover/preview:scale-[1.02]"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center"
              style={{ backgroundColor: project.accentSoft }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold text-white"
                style={{ backgroundColor: project.accent }}
              >
                {project.logo}
              </span>
              <p className="font-semibold text-ink">{project.title}</p>
              <p className="text-sm text-ink/50">{domain}</p>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover/preview:bg-ink/40 group-hover/preview:opacity-100">
            <span className="glass-pill flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink">
              Visit {domain}
              <FaArrowUpRightFromSquare className="text-xs" />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export const PhonePreview = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const previewSrc = project.previewImage || getScreenshotUrl(project.url, 600);

  return (
    <div className="group/preview relative mx-auto w-[220px]">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative rounded-[2.4rem] border-[10px] border-ink/90 bg-ink shadow-2xl transition hover:shadow-[0_24px_60px_rgba(24,23,18,0.2)]">
          <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
          <div className="relative overflow-hidden rounded-[1.7rem] bg-white">
            {!imgError ? (
              <img
                src={previewSrc}
                alt={`${project.title} app preview`}
                className="aspect-[9/16] w-full object-cover object-top transition duration-500 group-hover/preview:scale-105"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <PhoneFallback project={project} />
            )}

            <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover/preview:bg-ink/30 group-hover/preview:opacity-100">
              <span className="glass-pill rounded-full px-3 py-1.5 text-xs font-semibold text-ink">
                Open site
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const PhoneFallback = ({ project }) => {
  const { accent, accentSoft, logo, screen } = project;
  return (
    <>
      <div className="px-5 pb-6 pt-7" style={{ backgroundColor: accentSoft }}>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          {logo}
        </div>
        <p className="mt-4 text-xs font-medium text-ink/50">{screen.label}</p>
        <p className="mt-1 text-2xl font-semibold text-ink">{screen.amount}</p>
      </div>
      <div className="px-5 py-5">
        <div className="flex h-20 items-end gap-1.5">
          {screen.bars.map((h, i) => (
            <div
              key={i}
              className="w-full rounded-md"
              style={{ height: `${h}%`, backgroundColor: i % 2 === 0 ? accent : accentSoft }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const PhoneMockup = PhonePreview;
export const BrowserMockup = BrowserPreview;
