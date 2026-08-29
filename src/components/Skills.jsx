import Chip from "./Chip";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="mb-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">Skills</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((grupo) => (
          <div
            key={grupo.categoria}
            className="ink-shadow-sm border-[3px] border-line bg-panel px-4 py-4"
          >
            <h3 className="mb-3 font-display text-lg tracking-wide text-accent-2">
              {grupo.categoria}
            </h3>
            <div className="flex flex-wrap gap-2">
              {grupo.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
