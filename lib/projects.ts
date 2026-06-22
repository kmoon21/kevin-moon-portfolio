export type Project = {
  name: string;
  status: string;
  description: string;
  metrics: { num: string; label: string }[];
  engineeringNote: string;
  tags: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: "SandlotSharp",
    status: "Live",
    description:
      "MLB first-inning (YRFI/NRFI) betting analytics platform with statistically validated scoring models — built and operated solo, end-to-end.",
    metrics: [
      { num: "62.7%", label: "High-conviction hit rate" },
      { num: "2", label: "Independent scoring engines" },
    ],
    engineeringNote:
      "Ran cross-season backtesting and found the original model's key features performed below coin-flip out-of-sample — killed them, designed a new asymmetric architecture, and validated it on blind 2026 data before shipping.",
    tags: ["Next.js", "Supabase", "Stripe", "Vercel"],
    url: "https://sandlotsharp.com",
  },
  {
    name: "DOTApulse",
    status: "Live · Active users",
    description:
      "Dota 2 analytics and AI-coaching platform for competitive players, built on a self-curated dataset of professional matches.",
    metrics: [
      { num: "<0.1s", label: "Page load (cached)" },
      { num: "125+", label: "Pre-rendered pages" },
    ],
    engineeringNote:
      "Integrated the Claude API to power an AI coaching feature, engineering a validation dataset from 100+ professional matches to surface statistically meaningful performance thresholds rather than generic tips.",
    tags: ["Next.js", "Supabase", "Claude API", "GraphQL", "Stripe", "Cloudflare"],
    url: "https://dotapulse.gg",
  },
  {
    name: "SmileSpark",
    status: "Live · Local business",
    description:
      "Co-founded teeth-whitening studio in Henderson, NV — built and maintain the full production website and marketing stack.",
    metrics: [
      { num: "11.5x", label: "Return on ad spend" },
      { num: "$15.20", label: "Cost per booking" },
    ],
    engineeringNote:
      "Migrated the business off a no-code platform onto a custom Next.js build with local SEO and structured data, then built and managed the Google Ads program myself.",
    tags: ["Next.js", "Vercel", "Google Ads"],
    url: "https://smile-spark.com",
  },
];

export type StatusItem = {
  name: string;
  description: string;
  highlight: string;
};

export const statusItems: StatusItem[] = [
  {
    name: "SandlotSharp",
    description: "MLB betting analytics — ",
    highlight: "62.7% validated hit rate (v7, blind data)",
  },
  {
    name: "DOTApulse",
    description: "Dota 2 AI coaching — ",
    highlight: "live, active users, Claude-powered",
  },
  {
    name: "SmileSpark",
    description: "Local business platform — ",
    highlight: "11.5x return on ad spend",
  },
];
