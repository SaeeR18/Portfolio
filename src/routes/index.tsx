import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/saee-photo.png";
import { Nav, Footer } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import {
  About,
  Contact,
  Experience,
  Marquee,
  Process,
  Services,
  Skills,
  Work,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saee Raut — Creative Designer & Visual Storyteller" },
      {
        name: "description",
        content:
          "Portfolio of Saee Raut, a creative designer working across visual identity, branding, UI design, social media campaigns, and visual storytelling.",
      },
      { property: "og:title", content: "Saee Raut — Creative Designer" },
      {
        property: "og:description",
        content:
          "Branding, UI design, campaigns and visual storytelling by creative designer Saee Raut.",
      },
    ],
  }),
  component: Index,
});

const floatingTags = [
  { label: "Branding", pos: "left-[-2%] top-[18%]", tint: "bg-butter", delay: "0s" },
  { label: "UI Design", pos: "right-[-2%] top-[8%]", tint: "bg-powder", delay: "1.4s" },
  {
    label: "Visual Storytelling",
    pos: "right-[-4%] bottom-[14%]",
    tint: "bg-blush",
    delay: "2.2s",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
          <span className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-lavender/70 blur-3xl" />
          <span className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-peach/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Available for freelance &amp; internships
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.92]">
                  Saee
                  <br />
                  Raut
                  <span className="editorial-serif ml-3 block text-[clamp(1.6rem,4vw,2.75rem)] font-normal text-primary">
                    Creative Designer
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  A creative designer exploring visual identity, digital experiences, and
                  storytelling.
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-foreground/80">
                  I transform ideas into thoughtful and visually engaging designs that are
                  meaningful, memorable, and connected to the people they are made for.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/"
                    hash="work"
                    className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View My Work
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="relative mx-auto max-w-sm">
                <span className="absolute -left-5 -top-5 h-full w-full rounded-3xl bg-lavender" />
                <div className="surface-grain relative overflow-hidden rounded-3xl border border-border shadow-sm">
                <img
  src={portrait}
  alt="Portrait of Saee Raut, creative designer"
  className="aspect-[3/4] w-full object-cover"
/>
                </div>

                {floatingTags.map((t) => (
                  <span
                    key={t.label}
                    style={{ animationDelay: t.delay }}
                    className={`float-slow absolute ${t.pos} ${t.tint} hidden rounded-full border border-border px-4 py-2 text-xs font-medium shadow-sm sm:block`}
                  >
                    {t.label}
                  </span>
                ))}
                <span className="marker-note absolute -bottom-8 left-2 text-lg">
                  ✦ ideas first, pixels second
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <Marquee />
        <About />
        <Skills />
        <Work />
        <Services />
        <Experience />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
