import { useState } from "react";

export default function VignettePanel({ panel, phone }) {
  const [failed, setFailed] = useState(!panel.image);

  return (
    <figure className="border-2 border-line bg-panel-2">
      <div
        className={`relative flex items-center justify-center overflow-hidden border-b-2 border-line bg-ink ${
          phone ? "aspect-[9/16]" : "aspect-[16/10]"
        }`}
      >
        {!failed ? (
          <img
            src={import.meta.env.BASE_URL + panel.image}
            alt={panel.label}
            onError={() => setFailed(true)}
            className={`h-full w-full ${phone ? "object-contain p-2" : "object-cover"}`}
          />
        ) : (
          <>
            <div className="halftone opacity-15" />
            <span className="relative z-10 font-mono text-[11px] uppercase tracking-wider text-muted">
              Captura pendiente
            </span>
          </>
        )}
      </div>
      <figcaption className="p-3 pb-4">
        <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
          {panel.label}
        </p>
        <p className="text-[13px] leading-relaxed text-paper-dim">{panel.desc}</p>
      </figcaption>
    </figure>
  );
}
