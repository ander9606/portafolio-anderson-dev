import { useState } from "react";
import VignetteModal from "./VignetteModal";

export default function ProjectCard({ proyecto, rotate, phone }) {
  const [showVignettes, setShowVignettes] = useState(false);

  return (
    <>
      <article
        className={`group relative ink-shadow-md border-[5px] border-line bg-panel px-[22px] pb-6 pt-[26px] ${rotate}`}
      >
        <span className="absolute -top-4 left-[18px] border-[3px] border-line bg-accent px-3 py-0.5 font-display text-xl text-accent-ink">
          {proyecto.issue}
        </span>

        <h3 className="mb-1 mt-3.5 font-body text-[22px] font-extrabold text-paper">
          {proyecto.nombre}
        </h3>
        <p className="mb-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-accent-2">
          {proyecto.rolLinea}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {proyecto.chips.map((chip) => (
            <span
              key={chip}
              className="border-2 border-accent bg-accent/10 px-2.5 py-1 font-mono text-[11.5px] font-semibold text-accent"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            className="inline-flex items-center gap-1.5 border-b-2 border-accent pb-0.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-paper hover:text-accent"
            href={proyecto.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver repositorio &rarr;
          </a>
          <a
            className="inline-flex items-center gap-1.5 border-b-2 border-accent pb-0.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-paper hover:text-accent"
            href={proyecto.landingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver landing &rarr;
          </a>
        </div>

        <div className="reveal">
          <span className="mb-2 inline-block border-2 border-line bg-accent-2 px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-accent-ink">
            El problema
          </span>
          <p className="mb-3.5 text-[14.5px] leading-relaxed text-paper-dim">{proyecto.problema}</p>
          <button
            type="button"
            onClick={() => setShowVignettes(true)}
            className="inline-flex items-center gap-1.5 border-b-2 border-accent bg-transparent pb-0.5 font-body text-[13px] font-extrabold uppercase tracking-wide text-paper hover:text-accent"
          >
            Ver capturas &rarr;
          </button>
        </div>
      </article>

      {showVignettes && (
        <VignetteModal proyecto={proyecto} phone={phone} onClose={() => setShowVignettes(false)} />
      )}
    </>
  );
}
