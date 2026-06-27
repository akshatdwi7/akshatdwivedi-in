/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaApple, FaArrowUpRightFromSquare } from "react-icons/fa6";

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

const getScreenshotUrl = (url, width = 900) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;

/** iOS device mockup image (ios2.webp) */
export const DeviceMockup = ({ project, href }) => {
  const link = href || project.links?.[0]?.href || project.url;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <img
        src={project.mockupImage}
        alt={`${project.title} app preview`}
        className="mx-auto w-full max-w-[280px] transition duration-300 group-hover:scale-[1.02] md:max-w-[320px]"
      />
    </a>
  );
};

export const BrowserPreview = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const url = project.url || project.links?.[0]?.href;
  const domain = project.domain || getHostname(url);
  const previewSrc = project.previewImage || getScreenshotUrl(url);

  return (
    <div className="group/preview mx-auto w-full max-w-md">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl border border-border bg-white shadow-sm ring-1 ring-black/[0.04] transition hover:shadow-md"
      >
        <div className="flex items-center gap-2 border-b border-border bg-[#f6f6f6] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/80 px-3 py-1 text-center text-[11px] text-muted ring-1 ring-black/[0.06]">
            {domain}
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          {!imgError ? (
            <img
              src={previewSrc}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              {project.title}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export const AppStoreBadge = ({ href, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-sm text-ink transition hover:opacity-60 ${className}`}
  >
    <FaApple className="text-sm" />
    App Store
    <FaArrowUpRightFromSquare className="text-[10px]" />
  </a>
);

export const PhoneMockup = DeviceMockup;
export const BrowserMockup = BrowserPreview;
