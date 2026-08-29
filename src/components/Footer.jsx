export default function Footer() {
  return (
    <footer className="mt-14 flex flex-wrap justify-between gap-3 border-t-[3px] border-dashed border-panel-2 pt-6 font-mono text-xs text-muted">
      <span>&copy; {new Date().getFullYear()} Anderson &mdash; construido con café y MySQL.</span>
      <span>
        <a
          className="text-paper underline underline-offset-4 hover:text-accent"
          href="https://github.com/ander9606"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        &middot;{" "}
        <a
          className="text-paper underline underline-offset-4 hover:text-accent"
          href="https://www.linkedin.com/in/janderson-desarrollador-fullstack"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        &middot;{" "}
        <a
          className="text-paper underline underline-offset-4 hover:text-accent"
          href="mailto:anderson960616@gmail.com"
        >
          Email
        </a>
      </span>
    </footer>
  );
}
