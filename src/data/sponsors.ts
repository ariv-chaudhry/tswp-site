import type { Sponsor, SponsorPackage } from "@/types";

export const sponsorshipsPage = {
  eyebrow: "Sponsorships",
  title: "Fuel the Difference",
  description:
    "Support student-led innovation bringing clean water to communities worldwide, and make a measurable, lasting impact.",
};

export const sponsorPackages: SponsorPackage[] = [
  {
    id: "event-sponsor",
    title: "1. Event Sponsor Package",
    subtitle: "Power our fundraising events and student initiatives",
    description:
      "Event sponsors provide direct funding to support campaigns like our running challenge, school activations, and awareness events.",
    benefits: [
      "Logo placement on event materials and website",
      "Recognition in social media posts and recap content",
      "Mention in event-day announcements",
      "Featured in post-event impact report",
      "Opportunity to include branded materials or messaging",
    ],
    whyItMatters:
      "Your support enables students to organize, lead, and execute real-world initiatives that directly fund clean water solutions.",
    cta: { label: "See Current Events", href: "/fundraisers" },
  },
  {
    id: "matching-sponsor",
    title: "2. Matching Sponsor Package",
    subtitle: "Double every student-raised dollar",
    description:
      "Matching sponsors commit to matching donations raised by students, turning every contribution into twice the impact. Match donations up to a fixed cap across multiple projects (e.g., $10,000, $20,000, etc.).",
    benefits: [
      '"Matching Sponsor" spotlight across all sites and social media',
      "Featured branding on all donation pages",
      "Recognition in all fundraising communications during campaigns",
      "Impact metrics showing how your match amplified results",
      "Priority placement in final campaign report and thank-you content",
    ],
    whyItMatters:
      "Matching creates urgency and motivation, significantly increasing participation and total funds raised.",
    cta: {
      label: "Email Us",
      href: "mailto:studentwaterproject@gmail.com",
      external: true,
    },
  },
];

/**
 * "Currently Supported By" logos appear on the Wix homepage, but accessible
 * names/URLs were not extractable. Add real sponsor assets when available.
 */
export const currentSponsors: Sponsor[] = [
  {
    name: "Clear Inc.",
    // TODO: Add logo to /public/images/sponsors/clear-inc.png
    logo: "/images/sponsors/clear-inc.png",
  },
  {
    name: "Mitacs",
    // TODO: Add logo to /public/images/sponsors/mitacs.png
    logo: "/images/sponsors/mitacs.png",
  },
  {
    name: "MW Technologies",
    // TODO: Add logo to /public/images/sponsors/mw-technologies.png
    logo: "/images/sponsors/mw-technologies.png",
  },
  {
    name: "A Drop of Hope",
    // TODO: Add logo to /public/images/sponsors/a-drop-of-hope.png
    logo: "/images/sponsors/a-drop-of-hope.png",
  },
];
