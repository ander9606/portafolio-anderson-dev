export default function Chip({ children }) {
  return (
    <span className="border-2 border-accent bg-accent/10 px-2.5 py-1 font-mono text-[11.5px] font-semibold text-accent">
      {children}
    </span>
  );
}
