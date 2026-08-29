import { techIcons } from "../data/techIcons";

const layout = [
  { top: "4%", left: "56%", size: 68, rotate: -12, color: "text-paper/10" },
  { top: "8%", left: "82%", size: 46, rotate: 9, color: "text-accent-2/15" },
  { top: "26%", left: "70%", size: 58, rotate: 7, color: "text-accent/12" },
  { top: "6%", left: "38%", size: 40, rotate: -6, color: "text-paper/8" },
  { top: "42%", left: "88%", size: 74, rotate: -8, color: "text-paper/10" },
  { top: "58%", left: "78%", size: 44, rotate: 13, color: "text-accent-2/12" },
  { top: "68%", left: "58%", size: 60, rotate: -10, color: "text-paper/9" },
  { top: "80%", left: "86%", size: 40, rotate: 6, color: "text-accent/14" },
  { top: "80%", left: "38%", size: 36, rotate: -14, color: "text-accent-2/10" },
  { top: "34%", left: "48%", size: 30, rotate: 15, color: "text-paper/8" },
  { top: "60%", left: "38%", size: 34, rotate: -9, color: "text-accent/10" },
];

export default function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {layout.map((spot, i) => {
        const icon = techIcons[i % techIcons.length];
        return (
          <svg
            key={`${icon.name}-${i}`}
            viewBox="0 0 24 24"
            className={`absolute ${spot.color}`}
            style={{
              top: spot.top,
              left: spot.left,
              width: spot.size,
              height: spot.size,
              transform: `rotate(${spot.rotate}deg)`,
            }}
          >
            <path fill="currentColor" d={icon.path} />
          </svg>
        );
      })}
    </div>
  );
}
