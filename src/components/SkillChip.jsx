import { codeSnippets } from "../data/codeSnippets";
import Chip from "./Chip";

export default function SkillChip({ name, isOpen, onToggle }) {
  const snippet = codeSnippets[name];

  if (!snippet) {
    return <Chip>{name}</Chip>;
  }

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`skill-chip border-2 px-2.5 py-1 font-mono text-[11.5px] font-semibold transition-colors ${
          isOpen
            ? "border-accent-2 bg-accent-2/10 text-accent-2"
            : "border-accent bg-accent/10 text-accent"
        }`}
      >
        {name}
      </button>
      <div className="skill-snippet basis-full border-[3px] border-line bg-ink">
        <p className="border-b-[3px] border-dashed border-line/60 bg-panel-2 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-wider text-accent-2">
          {snippet.source}
        </p>
        <pre className="overflow-x-auto px-3 py-3 text-[12px] leading-relaxed text-paper-dim">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </>
  );
}
