import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { label: "Home", hash: "top" },
  { label: "About", hash: "about" },
  { label: "Work", hash: "work" },
  { label: "Services", hash: "services" },
  { label: "Experience", hash: "experience" },
  { label: "Contact", hash: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
        <Link to="/" hash="top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lavender font-display text-sm font-bold">
            SR
          </span>
          <span className="min-w-0 truncate">
            <span className="block font-display text-base font-bold leading-none">Saee Raut</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Creative Designer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.slice(1).map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Let's Work Together
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-[1.5px] w-4 bg-foreground transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-4 bg-foreground transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.hash}>
                <Link
                  to="/"
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 font-display text-xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Let's Work Together
          </Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream px-5 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-display text-3xl font-bold">Saee Raut</p>
          <p className="mt-1 text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Creative Designer
          </p>
          <p className="marker-note mt-6 text-lg">Made with curiosity + creativity.</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {["top", "about", "work", "services", "contact"].map((hash, i) => (
              <li key={hash}>
                <Link to="/" hash={hash} className="transition-colors hover:text-foreground">
                  {["Home", "About", "Work", "Services", "Contact"][i]}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground md:mt-auto">
            Designed &amp; created by Saee Raut
          </p>
        </div>
      </div>
    </footer>
  );
}
