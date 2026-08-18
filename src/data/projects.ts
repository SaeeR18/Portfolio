import heatshield from "@/assets/project-heatshield.jpg";
import heatshieldFrames from "@/assets/heatshield-app-screens.png";
import fashionshow from "@/assets/project-fashionshow.jpg";
import fashionPoster from "@/assets/fashion-poster.png.asset.json";
import fashionEventPoster from "@/assets/fashion-show-event-poster.png";
import fashionInstagramStory from "@/assets/fashion-show-instagram-story.png";
import club from "@/assets/project-club.jpg";
import clubRecruitmentPoster from "@/assets/zero-gravity-recruitment-poster.png";
import clubTechnosparkPoster from "@/assets/zero-gravity-technospark-poster.png";
import campaign from "@/assets/project-campaign.jpg";
import campaignShot1 from "@/assets/IMG_7452.png.asset.json";
import campaignShot2 from "@/assets/IMG_7446.png.asset.json";
import campaignShot3 from "@/assets/IMG_7447.png.asset.json";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  role: string;
  year: string;
  description: string;
  highlights: string[];
  tools: string[];
  image: string;
  tint: string;
  span: "wide" | "tall" | "regular";
  caseStudy: { step: string; title: string; body: string }[];
  caseStudyImage?: string;
  caseStudyImageTitle?: string;
  caseStudyImageDescription?: string;
  gallery?: { url: string; alt: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "heat-shield-hydrate",
    index: "01",
    title: "Heat Shield Hydrate",
    category: "Mobile App UI/UX",
    role: "UI/UX Designer",
    year: "2025",
    description:
      "A mobile application designed to help users stay safe during extreme heat through hydration tracking, heat-index alerts, emergency SOS, and nearby safe-shelter information.",
    highlights: [
      "User flows",
      "Wireframes",
      "Visual design",
      "Design system",
      "High-fidelity mobile interfaces",
      "Accessible interactions",
    ],
    tools: ["Figma", "Canva", "Adobe Photoshop", "React", "Tailwind CSS", "FastAPI", "MongoDB"],
    image: heatshield,
    caseStudyImage: heatshieldFrames,
    tint: "bg-peach",
    span: "wide",
    caseStudy: [
      {
        step: "Problem",
        title: "Heat risk is invisible until it is urgent",
        body: "People underestimate heat exposure. The app needed to make risk legible at a glance and make help reachable in one tap.",
      },
      {
        step: "Research",
        title: "Context over dashboards",
        body: "Studied heat-index guidance and hydration habits, then mapped moments of need: morning planning, midday exposure, and emergencies.",
      },
      {
        step: "User Flow",
        title: "Three core journeys",
        body: "Track hydration, read the live heat index with guidance, and trigger SOS or find the nearest safe shelter.",
      },
      {
        step: "Wireframes",
        title: "Low-fidelity structure first",
        body: "Prioritised a single-glance home screen, minimal input logging, and persistent access to emergency actions.",
      },
      {
        step: "Design System",
        title: "Warm, accessible, calm",
        body: "A heat-scaled colour system, large type ramp, generous tap targets, and clear alert states with contrast-checked pairings.",
      },
      {
        step: "Final UI",
        title: "High-fidelity interfaces",
        body: "Polished screens for hydration progress, heat-index alerts, history insights, and shelter discovery.",
      },
      {
        step: "Outcome",
        title: "A safety tool that feels friendly",
        body: "A cohesive, accessible product design that turns environmental data into calm, actionable guidance.",
      },
    ],
  },
  {
    slug: "college-fashion-show",
    index: "02",
    title: "College Fashion Show",
    category: "Social Media & Visual Campaign",
    role: "Creative Designer",
    year: "2024",
    description:
      "A promotional campaign created for a college fashion show to build awareness and excitement around the event through social media and event creatives.",
    highlights: [
      "Social media posts",
      "Stories",
      "Posters",
      "Promotional graphics",
      "Visual direction",
    ],
    tools: ["Canva", "Figma", "Adobe Photoshop"],
    image: fashionshow,
    caseStudyImage: fashionPoster.url,
    caseStudyImageTitle: "Campaign poster",
    caseStudyImageDescription:
      "The central event poster for the fashion show — minimal black-and-white typography with a strong editorial layout.",
    tint: "bg-blush",
    span: "tall",
    gallery: [
      { url: fashionEventPoster, alt: "Fashion Show event poster — editorial black and white runway design" },
      { url: fashionInstagramStory, alt: "Couture Culture Fashion Show Instagram story — event information graphic" },
    ],
    note: "Also walked the show as a fashion model — firsthand exposure to styling, creative direction, visual presentation, and fashion production.",
    caseStudy: [
      {
        step: "Problem",
        title: "A show that needed a voice",
        body: "The event needed a visual language bold enough to cut through a busy campus feed.",
      },
      {
        step: "Research",
        title: "Runway references",
        body: "Collected editorial layouts, high-contrast fashion typography, and campus culture cues into a shared moodboard.",
      },
      {
        step: "Define",
        title: "Editorial contrast",
        body: "Blush and charcoal, oversized condensed headlines, and torn-paper texture as the campaign signature.",
      },
      {
        step: "Design",
        title: "A full creative kit",
        body: "Posters, story templates, countdown tiles, tickets, and passes — all built from one flexible grid.",
      },
      {
        step: "Outcome",
        title: "Consistent from feed to venue",
        body: "One visual system carried across digital promotion and physical event material.",
      },
    ],
  },
  {
    slug: "club-creative-team",
    index: "03",
    title: "College Club Creative Team",
    category: "Event Branding & Campaign Design",
    role: "Creative Team Lead",
    year: "2024–2025",
    description:
      "A collection of branding and promotional work created for events and campaigns organised by Saee's college club.",
    highlights: [
      "Creative direction",
      "Team leadership",
      "Visual concepts",
      "Posters",
      "Social media content",
      "Banners",
      "Certificates",
      "Event creatives",
    ],
    tools: ["Canva", "Figma", "Adobe Photoshop"],
    image: club,
    tint: "bg-powder",
    span: "regular",
    gallery: [
      { url: clubRecruitmentPoster, alt: "Zero Gravity recruitment poster — team hiring announcement with QR code" },
      { url: clubTechnosparkPoster, alt: "Zero Gravity Technospark 2k25 event poster — two-day tech fest schedule" },
    ],
    note: "Led the creative team, developed visual concepts, delegated design tasks, and maintained visual consistency across digital and physical event materials.",
    caseStudy: [
      {
        step: "Discover",
        title: "Many events, one club",
        body: "Every event was designed from scratch, so nothing felt connected. The goal was a reusable identity.",
      },
      {
        step: "Define",
        title: "A modular visual kit",
        body: "Shared palette, geometric motif library, and layout rules that any team member could apply.",
      },
      {
        step: "Design",
        title: "From posters to certificates",
        body: "Banners, programme covers, badges, social tiles, and certificates built on the same system.",
      },
      {
        step: "Lead",
        title: "Directing the team",
        body: "Briefed designers, reviewed work, delegated tasks, and held the visual standard across deadlines.",
      },
      {
        step: "Outcome",
        title: "Recognisable at a glance",
        body: "Club material became instantly identifiable across campus and online.",
      },
    ],
  },
  {
    slug: "brand-campaign-shoot",
    index: "04",
    title: "Brand Campaign Shoot",
    category: "Fashion Branding / Visual Storytelling",
    role: "Creative & Visual Designer",
    year: "2025",
    description:
      "A self-initiated fashion campaign developed for a fictional clothing brand, exploring how a brand's identity can be communicated through styling, photography, composition, and visual storytelling.",
    highlights: [
      "Campaign concept",
      "Moodboard",
      "Visual direction",
      "Styling references",
      "Composition",
      "Promotional creatives",
      "Campaign imagery",
      "Social media layouts",
    ],
    tools: ["Canva", "Figma", "Adobe Photoshop", "AI-powered creative tools"],
    image: campaign,
    tint: "bg-butter",
    span: "tall",
    gallery: [
      { url: campaignShot1.url, alt: "Atelier Omnia campaign poster — tailored suit editorial" },
      { url: campaignShot2.url, alt: "Elite campaign poster — the art of tailoring" },
      { url: campaignShot3.url, alt: "Elite magazine cover — the art of sartorial motion" },
    ],
    note: "Fashion × Branding × Photography × Graphic Design.",
    caseStudy: [
      {
        step: "Concept",
        title: "A brand built from a feeling",
        body: "Started from a single idea — quiet, tactile clothing — and built an identity around light, texture, and restraint.",
      },
      {
        step: "Moodboard",
        title: "Light, linen, stone",
        body: "Curated references for palette, materials, and photographic mood before any layout existed.",
      },
      {
        step: "Direction",
        title: "Styling and composition",
        body: "Defined poses, framing, negative space, and typographic pairing to keep the campaign coherent.",
      },
      {
        step: "Design",
        title: "Lookbook and social",
        body: "Cover, lookbook spreads, swing tags, and social layouts adapted from one editorial grid.",
      },
      {
        step: "Outcome",
        title: "A complete brand world",
        body: "A campaign that reads as a real brand rather than a set of separate graphics.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
