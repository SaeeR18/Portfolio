import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Footer, Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable — Saee Raut" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${project.category} | Saee Raut`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description.slice(0, 155) },
      ],
    };
  },
  component: CaseStudy,
});

function FramedImage({
  src,
  alt,
  rows = 2,
  cols = 5,
}: {
  src: string;
  alt: string;
  rows?: number;
  cols?: number;
}) {
  const frames = Array.from({ length: rows * cols }, (_, i) => i);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <img src={src} alt={alt} className="w-full" />
      <div
        className="pointer-events-none absolute inset-[2.5%] grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "2%",
        }}
      >
        {frames.map((i) => (
          <div
            key={i}
            className="rounded-[10px] border-2 border-primary/35 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
          />
        ))}
      </div>
    </div>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="px-5 pb-24 pt-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link to="/" hash="work" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to work
            </Link>
            <p className="mt-8 text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
              {project.index} · {project.category} · {project.year}
            </p>
            <h1 className="mt-4 text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95]">
              {project.title}
            </h1>
            <p className="editorial-serif mt-3 text-2xl text-primary">{project.role}</p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className={`mt-12 overflow-hidden rounded-3xl ${project.tint} surface-grain`}>
              <img
                src={project.image}
                alt={`${project.title} visuals`}
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <h2 className="font-display text-xl font-bold">Highlights</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li key={h} className="rounded-full bg-cream px-4 py-2 text-sm">
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-xl font-bold">Tools</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <li key={t} className="rounded-full border border-border px-4 py-2 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {project.note && (
            <Reveal>
              <p className="marker-note mt-12 border-l-2 border-primary pl-6 text-xl leading-relaxed">
                {project.note}
              </p>
            </Reveal>
          )}

          <div className="mt-20">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">The process</h2>
            </Reveal>
            <ol className="mt-10 space-y-5">
              {project.caseStudy.map((s, i) => (
                <Reveal as="li" key={s.step} delay={i * 60}>
                  <div className="soft-card grid gap-4 p-8 md:grid-cols-[180px_1fr]">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-primary">{s.step}</p>
                    <div>
                      <h3 className="font-display text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {project.caseStudyImage && (
            <Reveal delay={100}>
              <div className="mt-20">
                <h2 className="text-3xl font-bold md:text-4xl">
                  {project.caseStudyImageTitle || "Interface gallery"}
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  {project.caseStudyImageDescription ||
                    "A snapshot of the key screens and flows from the Heat Shield Hydrate app."}
                </p>
                <div className="mt-10">
                  <FramedImage
                    src={project.caseStudyImage}
                    alt={`${project.title} ${project.caseStudyImageTitle || "gallery"}`}
                    rows={2}
                    cols={5}
                  />
                </div>
              </div>
            </Reveal>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <Reveal delay={100}>
              <div className="mt-20">
                <h2 className="text-3xl font-bold md:text-4xl">Campaign gallery</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Final campaign creatives — posters and cover layouts built from the same visual
                  direction.
                </p>
                <div className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.gallery.map((g) => (
                    <figure
                      key={g.url}
                      className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
                    >
                      <img src={g.url} alt={g.alt} loading="lazy" className="w-full" />
                    </figure>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-20">
            <h2 className="text-2xl font-bold">More work</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="group soft-card overflow-hidden"
                >
                  <div className={`${p.tint} overflow-hidden`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {p.category}
                    </p>
                    <p className="mt-2 font-display text-lg font-bold">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
