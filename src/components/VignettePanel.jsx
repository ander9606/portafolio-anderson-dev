import { useState } from "react";

const TILTS = [
  "-rotate-[1.1deg]",
  "rotate-[1deg]",
  "rotate-[-0.7deg]",
  "rotate-[0.8deg]",
];

export default function VignettePanel({ panel, phone, index = 0 }) {
  const [failed, setFailed] = useState(!panel.image);
  const tilt = TILTS[index % TILTS.length];

  return (
    <figure
      className={`vignette-panel relative border-[3px] border-line bg-panel-2 ink-shadow-sm ${tilt}`}
    >
      <span className="absolute -top-3.5 left-3 z-10 border-2 border-line bg-accent-2 px-2 py-0.5 font-display text-sm leading-none tracking-wide text-accent-ink">
        Viñeta {String(index + 1).padStart(2, "0")}
      </span>
      <span className="corner-fold" aria-hidden="true" />

      <div
        className={`relative flex items-center justify-center overflow-hidden border-b-[3px] border-line bg-ink ${
          phone ? "aspect-[9/16]" : "aspect-[16/10]"
        }`}
      >
        {!failed ? (
          <>
            <img
              src={import.meta.env.BASE_URL + panel.image}
              alt={panel.label}
              onError={() => setFailed(true)}
              className={`h-full w-full ${phone ? "object-contain p-2" : "object-cover"}`}
            />
            <div className="halftone opacity-[0.06] mix-blend-overlay" />
          </>
        ) : (
          <>
            <div className="halftone opacity-15" />
            <span className="relative z-10 font-mono text-[11px] uppercase tracking-wider text-muted">
              Captura pendiente
            </span>
          </>
        )}
      </div>

      <figcaption className="border-t-[3px] border-dashed border-line/60 bg-panel-2 p-3 pb-4">
        <p className="mb-1 font-display text-base leading-none tracking-wide text-accent">
          {panel.label}
        </p>
        <p className="text-[13px] leading-relaxed text-paper-dim">{panel.desc}</p>
      </figcaption>
    </figure>
  );
}
