/** Central portfolio content for Abdul Kayum's site. */

export const PROFILE = {
  name: "Abdul Kayum",
  title: "Founder & Creative Director at Birds Aviary",
  location: "Dinajpur, Bangladesh",
  shortBio:
    "I craft visual worlds where shadow meets light — building brands, cinematic digital assets, and stories defined by a dark, dramatic design philosophy and an obsession with luxury-grade detail.",
  fullBio: [
    "Abdul Kayum is the founder and creative director of Birds Aviary, a design practice rooted in Dinajpur, Bangladesh, and reaching clients worldwide. His work lives at the intersection of graphic design, AI-driven content creation, and visual identity — always filtered through a signature dark, cinematic lens.",
    "From vibrant consumer rebrands to educational board games and premium digital assets, Abdul approaches every project as a piece of cinema: deliberate lighting, considered typography, and an atmosphere that lingers. He believes a brand should not merely be seen — it should be felt, like the opening frame of a film.",
  ],
  skills: ["Graphic Design", "AI Content Creation", "Visual Identity"],
  experience: [
    {
      role: "Founder & Creative Director",
      company: "Birds Aviary",
      period: "2021 — Present",
      description:
        "Leading a multidisciplinary creative studio delivering visual identities, cinematic digital assets, and educational design for clients across the globe.",
    },
    {
      role: "Freelance Visual Designer",
      company: "Independent",
      period: "2018 — 2021",
      description:
        "Partnered with startups and agencies on branding, packaging, and illustration projects, building a reputation for dramatic, detail-obsessed design.",
    },
    {
      role: "Graphic Designer",
      company: "Early Practice",
      period: "2016 — 2018",
      description:
        "Honed the fundamentals of composition, typography, and vector illustration while contributing to editorial and marketing design work.",
    },
  ],
  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    behance: "https://www.behance.net/Abdulkayumhosen",
    website: "https://birdsaviary.net/",
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: "herbissimo",
    title: "Herbíssimo",
    description:
      "A bold rebranding for Brazil's fourth-largest deodorant brand — evolving a beloved cream-deodorant icon into a full body-care powerhouse. Vibrant greens, assertive typography, and the tagline \"Herbíssimo. Poderosíssimo.\" radiate confidence and self-esteem.",
    tags: ["Branding", "Visual Identity", "Packaging"],
    image: "/manus-storage/project-herbissimo_a5557216.png",
    year: "2026",
  },
  {
    id: "earth-matters",
    title: "EARTH MATTERS — Board Game",
    description:
      "An award-appreciated board game that helps kids and families grasp the complexities of climate science through joyful, active play. Played on a time-and-temperature grid, every illustrated component turns a global crisis into an engaging story.",
    tags: ["Game Art", "Vector Illustration", "Editorial"],
    image: "/manus-storage/project-earth-matters_b4ea549b.png",
    year: "2024",
  },
  {
    id: "birds-aviary-identity",
    title: "Birds Aviary — Studio Identity",
    description:
      "The studio's own dark-luxury identity system: a minimal gold bird emblem, embossed black stationery, and a brand language built on shadow, restraint, and cinematic light.",
    tags: ["Visual Identity", "Brand Design", "Art Direction"],
    image: "/manus-storage/project-birds-aviary_9adec1d0.png",
    year: "2025",
  },
  {
    id: "cinematic-assets",
    title: "Cinematic Digital Assets",
    description:
      "A growing library of film-grade digital assets — glowing frames, lens textures, and atmospheric compositions crafted with AI-assisted workflows for studios, editors, and storytellers.",
    tags: ["AI Content Creation", "Motion Design", "Digital Assets"],
    image: "/manus-storage/project-cinematic-assets_25af2072.png",
    year: "2025",
  },
  {
    id: "educational-infographics",
    title: "Educational Infographics",
    description:
      "Elegant, data-rich infographic systems that make complex subjects legible — pairing refined dark interfaces with golden accents so learning feels premium, not clinical.",
    tags: ["Infographics", "Information Design", "Education"],
    image: "/manus-storage/project-infographics_4e374618.png",
    year: "2024",
  },
];

export const SERVICES = [
  {
    id: "visual-identities",
    title: "Visual Identities",
    description:
      "Complete brand worlds — logotypes, palettes, typography systems, and guidelines — engineered to make your brand unmistakable from the first frame.",
  },
  {
    id: "cinematic-assets",
    title: "Cinematic Digital Assets",
    description:
      "Film-grade visuals, AI-assisted compositions, and atmospheric artwork that give campaigns, products, and stories a dramatic edge.",
  },
  {
    id: "educational-infographics",
    title: "Educational Infographics",
    description:
      "Complex ideas distilled into elegant, luxurious visual narratives — designed to teach, persuade, and be remembered.",
  },
];
