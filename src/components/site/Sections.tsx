import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";

export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

export function Marquee() {
  const items = [
    "Branding",
    "Visual Identity",
    "UI Design",
    "Social Media",
    "Campaigns",
    "Visual Storytelling",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-lavender py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-10">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-10 font-display text-lg font-semibold uppercase tracking-tight"
              >
                {item}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const cares = [
  {
    title: "Meaningful Design",
    body: "Design should communicate something beyond aesthetics.",
    tint: "bg-blush",
  },
  {
    title: "Visual Storytelling",
    body: "Every visual should contribute to a larger narrative.",
    tint: "bg-powder",
  },
  {
    title: "People First",
    body: "Good design should connect with the people it is created for.",
    tint: "bg-butter",
  },
  {
    title: "Creative Exploration",
    body: "Experimentation, new tools, and new visual approaches are an important part of the process.",
    tint: "bg-peach",
  },
];

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <h2 className="text-4xl font-bold leading-[1.02] md:text-6xl">
              Designing ideas into{" "}
              <span className="editorial-serif font-normal text-primary">visual stories.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Hi, I'm Saee, a creative designer interested in visual identity, digital experiences,
              and storytelling. I enjoy transforming ideas into thoughtful and visually engaging
              designs, with a particular interest in branding, social media, and UI design. I work
              primarily with Figma, Canva, and Adobe Photoshop and enjoy exploring AI-powered tools
              as part of my creative process. I want to be known for creating designs that are not
              only visually appealing, but also meaningful, memorable, and connected to the people
              they are made for.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="soft-card surface-grain overflow-hidden p-8">
              <SectionLabel>Education</SectionLabel>
              <p className="mt-6 font-display text-2xl font-bold leading-snug">
                B.E. — Information Technology
              </p>
              <p className="mt-2 text-muted-foreground">Savitribai Phule Pune University</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-lavender px-3 py-1 text-xs uppercase tracking-widest">
                  2026
                </span>
                <span className="rounded-full bg-butter px-3 py-1 text-xs uppercase tracking-widest">
                  First Class with Distinction
                </span>
              </div>
              <p className="marker-note mt-8 text-base">
                A technical foundation, a visual point of view.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold md:text-3xl">What I Care About</h3>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cares.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 90}>
                <div className={`h-full rounded-3xl ${c.tint} surface-grain p-7`}>
                  <span className="font-serif text-3xl italic text-primary">0{i + 1}</span>
                  <p className="mt-4 font-display text-xl font-bold">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    title: "Design",
    tint: "bg-blush",
    items: [
      "Graphic Design",
      "Visual Identity",
      "Branding",
      "Social Media Design",
      "UI Design",
      "Visual Storytelling",
      "Typography",
      "Color Theory",
      "Layout & Composition",
      "Campaign Design",
      "Poster Design",
      "Creative Direction",
      "Wireframing & Prototyping",
    ],
  },
  {
    title: "Tools",
    tint: "bg-powder",
    items: ["Figma", "Canva", "Adobe Photoshop", "AI-Powered Creative & Design Tools"],
  },
  {
    title: "Technical",
    tint: "bg-butter",
    items: ["HTML", "CSS", "React", "Responsive Web Design"],
  },
  {
    title: "Additional",
    tint: "bg-peach",
    items: [
      "Creative Team Leadership",
      "Design Research",
      "Concept Development",
      "Design Systems",
      "Cross-functional Collaboration",
    ],
  },
];

export function Skills() {
  return (
    <section className="bg-cream px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">
            A toolkit built across{" "}
            <span className="editorial-serif font-normal">craft, code, and curiosity.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 100}>
              <div className="soft-card h-full p-8">
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${group.tint}`} />
                  <h3 className="font-display text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h2 className="text-4xl font-bold leading-[1.02] md:text-6xl">
              Projects, campaigns &amp;{" "}
              <span className="editorial-serif font-normal text-primary">brand worlds.</span>
            </h2>
            <p className="text-muted-foreground">
              Four projects spanning product design, fashion campaigns, event branding, and
              self-initiated creative direction.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.slug}
              delay={i * 80}
              className={p.span === "wide" ? "md:col-span-2" : ""}
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group soft-card block h-full overflow-hidden"
              >
                <div className={`${p.tint} surface-grain overflow-hidden`}>
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                      p.span === "wide" ? "aspect-[16/9]" : "aspect-[4/5]"
                    }`}
                  />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span className="font-serif text-base italic text-primary">{p.index}</span>
                    <span>{p.category}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tools.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View Case Study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Branding & Visual Identity",
    body: "Developing cohesive visual identities including color palettes, typography, brand elements, and supporting brand assets.",
    tint: "bg-lavender",
  },
  {
    title: "Social Media Design",
    body: "Creating engaging social media posts, carousels, stories, campaign creatives, and promotional content tailored to a brand's identity.",
    tint: "bg-blush",
  },
  {
    title: "UI/UX Design",
    body: "Designing intuitive digital experiences from user flows and wireframes to high-fidelity interfaces and interactive prototypes using Figma.",
    tint: "bg-powder",
  },
  {
    title: "Poster & Campaign Design",
    body: "Creating eye-catching posters and visual campaigns for events, launches, promotions, and cultural or creative initiatives.",
    tint: "bg-butter",
  },
  {
    title: "Web Design",
    body: "Designing modern, responsive websites and landing pages that combine aesthetics, usability, and clear visual communication.",
    tint: "bg-peach",
  },
  {
    title: "Creative Direction",
    body: "Developing visual concepts, moodboards, art direction, visual references, and maintaining consistency across creative outputs.",
    tint: "bg-lavender",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">
            Creative thinking,{" "}
            <span className="editorial-serif font-normal text-primary">thoughtfully designed.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group soft-card relative h-full overflow-hidden p-8">
                <span
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${s.tint} transition-transform duration-500 group-hover:scale-[2.6]`}
                />
                <div className="relative">
                  <span className="font-serif text-2xl italic text-primary">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    role: "Creative Team Lead",
    org: "Zero Gravity Club",
    meta: "College Club · 2024–2025",
    points: [
      "Led the creative team",
      "Developed visual concepts",
      "Created posters and social media content",
      "Designed event promotional material",
      "Collaborated with organizers",
      "Managed creative tasks and deadlines",
      "Contributed to the creative direction of the college fashion show",
    ],
  },
  {
    role: "Creative Contributor",
    org: "College Fashion Show",
    meta: "March 2024",
    points: [
      "Developed cohesive visual styling across promotional materials",
      "Collaborated with the event team",
      "Contributed to the creative direction",
      "Participated as a fashion model",
      "Gained exposure to styling, creative direction, and fashion production",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">A creative timeline</h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 100}>
              <div className="soft-card h-full p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {e.meta}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{e.role}</h3>
                <p className="editorial-serif mt-1 text-xl text-primary">{e.org}</p>
                <ul className="mt-6 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const process = [
  { n: "01", t: "Discover", b: "Understand the brand, audience, objectives, and context." },
  { n: "02", t: "Explore", b: "Research references, trends, visual directions, and possibilities." },
  {
    n: "03",
    t: "Define",
    b: "Build moodboards, visual direction, color palettes, typography, and design systems.",
  },
  { n: "04", t: "Design", b: "Translate the concept into polished visual and digital experiences." },
  { n: "05", t: "Refine", b: "Iterate, review, test, and refine the final design." },
];

export function Process() {
  return (
    <section className="bg-ink px-5 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-cream/60">
            <span className="h-px w-8 bg-blush" />
            Creative Process
          </span>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">
            How an idea becomes{" "}
            <span className="editorial-serif font-normal text-blush">something visual.</span>
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-cream/15 md:grid-cols-5">
          {process.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <div className="group h-full bg-ink p-7 transition-colors duration-500 hover:bg-cream hover:text-ink">
                <span className="font-serif text-3xl italic text-blush transition-colors group-hover:text-primary">
                  {s.n}
                </span>
                <p className="mt-4 font-display text-xl font-bold">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/65 group-hover:text-ink/70">
                  {s.b}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold leading-[1.02] md:text-6xl">
            Have an idea worth{" "}
            <span className="editorial-serif font-normal text-primary">designing?</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto text-lg text-muted-foreground">
            Let's turn your ideas into something thoughtful, visual, and memorable.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <dl className="mt-12 space-y-5 text-left">
            {[
              ["Email", "saeeraut18@gmail.com"],
              ["LinkedIn", "http://www.linkedin.com/in/saee-raut"],
              ["Phone", "9850387434"],
              ["Location", "Pune"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-wrap items-baseline gap-4 border-b border-border pb-4">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="min-w-0 break-words font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
