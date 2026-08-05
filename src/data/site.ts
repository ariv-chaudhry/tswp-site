import type { HowItWorksStep, SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "The Student Water Project",
  shortName: "TSWP",
  eyebrow: "Students for Students",
  tagline:
    "We fundraise, partner with engineers, and bring UV water purification to communities that need it most.",
  description:
    "The Student Water Project is a student-led initiative that partners with professional engineers to deploy UV water purification systems in schools and communities that lack access to clean drinking water.",
  email: "studentwaterproject@gmail.com",
  location: "Toronto, Ontario, Canada",
  social: {
    instagram: "https://www.instagram.com/thestudentwaterproject",
  },
};

export const howItWorks = {
  eyebrow: "How It Works",
  title: "Three Steps to Cleaner, Accessible Water",
  description:
    "We raise awareness and funding. Our partners handle the engineering. Communities benefit from clean water.",
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Student campaigns",
    description:
      "Student teams organize campaigns at their schools and communities to raise funds for a listed project.",
  },
  {
    step: 2,
    title: "Transparent funding",
    description:
      "100% of donations go to the listed project. Full transparency is provided for every dollar raised.",
  },
  {
    step: 3,
    title: "Engineered impact",
    // Wix currently duplicates step 2 text for step 3; this uses the How It Works intro copy from the same section.
    description:
      "Our partners handle the engineering. Communities benefit from clean water.",
  },
];

export const merchandiseSignup = {
  eyebrow: "Support Us",
  title: "Merchandise Shop",
  description:
    "Our Merchandise Shop is launching soon! Join our emailing list for updates.",
  prompt: "Get notified when we release new merch!",
};

export const homeFinalCta = {
  title: "Ready to make a difference?",
  primaryCta: { label: "Become a Volunteer", href: "/volunteer" },
  secondaryCta: { label: "Become a Sponsor", href: "/sponsorships" },
};

export const aboutContent = {
  eyebrow: "About",
  title: "Students building solutions, not just awareness",
  subtitle:
    "We fund and build real infrastructure, in partnership with world-class engineers.",
  paragraphs: [
    "The Student Water Project™ is a student-led initiative that partners with professional engineers to deploy UV water purification systems in schools and communities that lack access to clean drinking water.",
    "Students lead fundraising efforts at their schools and communities. Every dollar raised goes directly toward a specific, verified project. Industry-leading partner engineers and scientists guide our student team through the technical implementation process.",
    "We work alongside A Drop of Hope, led by award-winning PhD Dr. Paul Nyangaresi, to identify communities with the greatest need and coordinate on-the-ground deployment.",
    "Students receive impact reports, track project progress, and see exactly where their effort goes. Education through action.",
  ],
  uvSection: {
    title: "Why UV Water Treatment",
    paragraphs: [
      "Ultraviolet purification destroys 99.99% of harmful pathogens without chemicals, filters, or complex maintenance.",
      "Unlike chlorine, UV leaves no taste or odor. Unlike boiling, it requires minimal energy. A single UV-LED system can serve an entire school for years with very little upkeep.",
    ],
  },
  ngoSection: {
    title: "We are Registered NGO With the Government of Canada",
    // Certificate link from Wix was not extractable — mailto for now; see CONTENT_TODO.md
    ctaLabel: "View Incorporation Certificate",
  },
};

export const externalLinks = {
  challengeSite: "https://tswp12k.vercel.app/",
  zeffyCampaign:
    "https://www.zeffy.com/en-CA/peer-to-peer/25-000-km-challenge",
  mitacsArticle:
    "https://www.mitacs.ca/our-innovation-insights/how-a-bc-researcher-is-tackling-water-challenges/",
  studentLeaderApplication:
    "https://docs.google.com/forms/d/e/1FAIpQLScSrgiKw-RjoyByfmQ0AbpdPSzMJyVrgOvuIA-ruqZ0xRmbFg/viewform?usp=header",
  proposalDocument:
    "https://www.tswp.org/_files/ugd/0e285e_6b0cea5d337c4f5685de4fbad436e799.docx?dn=Student%20Fundraiser%20Proposal%20Application.docx",
};
