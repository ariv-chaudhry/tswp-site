import type { FundraiserInitiative } from "@/types";
import { externalLinks } from "@/data/site";

export const fundraisersPage = {
  eyebrow: "Student Projects",
  title: "Student-led fundraising and outreach initiatives",
  description:
    "From running challenges and hackathons to fashion shows, our initiatives not only raise funds for our pilot project but also empower high school and university students to channel their creativity into meaningful impact.",
};

export const fundraiserInitiatives: FundraiserInitiative[] = [
  {
    slug: "12000-km-challenge",
    title: "12,000 KM Challenge",
    subtitle: "Virtual Running Fundraiser",
    type: "Fundraising Initiative",
    date: "July–August 2026",
    location: "Remote / Global",
    ledBy: "Student Water Project Executive team",
    status: "Active",
    summary:
      "The 12,000 KM Challenge is a student-led fundraising campaign organized by The Student Water Project to support the Rianyabayo Memorial Academy water initiative in Kenya. Together, participants work toward a collective goal of travelling 12,000 kilometres — symbolically representing the distance between Canada and Kenya — while raising funds and awareness for clean drinking water.",
    details: [
      "Register via Zeffy. The registration fee is $15.00.",
      "Join or create a team. The team raising the most funds and the team running the most kilometres will each have their team name engraved on a UV system.",
      "Set your distance goal via the Google Form included in your registration receipt.",
      "During race week (Aug 2–9), submit tracking proof via Strava, Apple Health, Google Fit, Garmin, treadmill workouts, and more.",
      "Create a personal or team fundraising goal and invite friends, family, classmates, and neighbours to sponsor your kilometres.",
      "Every registered participant receives a participant kit with student-designed TSWP stickers, a student-designed T-shirt, and a personalized message from the committee.",
    ],
    // TODO: Replace with challenge/event photo
    image: "/images/fundraisers/12000-km.jpg",
    primaryCta: {
      label: "See Challenge Site",
      href: externalLinks.challengeSite,
      external: true,
    },
    secondaryCta: {
      label: "Register / Donate on Zeffy",
      href: externalLinks.zeffyCampaign,
      external: true,
    },
  },
  {
    slug: "tswp-hackathon",
    title: "TSWP Hackathon",
    subtitle: "University / High School Hackathon",
    type: "Outreach / Education",
    date: "October 2026",
    location: "Toronto, ON",
    ledBy: "Student Water Project Executive team",
    status: "Coming Soon",
    summary:
      "An upcoming outreach and education hackathon for university and high school students, led by the Student Water Project executive team.",
    details: [],
    // TODO: Replace with hackathon image when available
    image: "/images/fundraisers/hackathon.jpg",
  },
];

export const challengeHomePreview = {
  title: "12,000 KM Challenge",
  subtitle: "Virtual Running Fundraiser",
  // Home page Wix copy (note: challenge site describes a multi-day Aug 2–9 race week)
  summary:
    "The 12,000 KM Challenge is a global running initiative. Participants run anywhere in the world and contribute their distance toward a collective goal of 12,000 km, representing the distance from Toronto to Kisii, Kenya.",
  participantsCan: [
    "Run outdoors or on a treadmill",
    "Complete multiple runs throughout the day to accumulate mileage",
    "Contribute any distance",
  ],
  primaryCta: {
    label: "Learn More",
    href: "/fundraisers",
  },
  externalCtas: [
    {
      label: "See Challenge Site",
      href: externalLinks.challengeSite,
      external: true,
    },
    {
      label: "See Campaign",
      href: externalLinks.zeffyCampaign,
      external: true,
    },
  ],
};

export const studentLeaderProgram = {
  title: "Become a Student Project Leader",
  description:
    "Do you have a creative idea to raise funds and/or awareness for The Student Water Project? With the help of our executive team and senior advisors, we can bring your vision to life!",
  steps: [
    {
      step: 1,
      title: "Preliminary Proposal",
      description:
        "Write a preliminary proposal for your fundraiser. Please follow the guiding document.",
    },
    {
      step: 2,
      title: "Application Form",
      description:
        "Fill out your student information and upload your preliminary proposal.",
    },
    {
      step: 3,
      title: "Executive Review",
      description:
        "Our team will review your application and assess fit based on motivation, experience, and availability.",
    },
    {
      step: 4,
      title: "Kickoff Meeting",
      description:
        "Once your application is reviewed and approved, we will finalize the proposal and event details in a kickoff meeting.",
    },
    {
      step: 5,
      title: "Resource Preparation",
      description: "Prepare funding platforms, event space, and related logistics.",
    },
    {
      step: 6,
      title: "Marketing and Sponsorships",
      description:
        "Find event participants and sponsors through personal and TSWP media platforms.",
    },
    {
      step: 7,
      title: "Execution",
      description:
        "Carry out the project while managing timelines, tracking progress, and adapting to challenges.",
    },
    {
      step: 8,
      title: "Final Report",
      description:
        "Write a final report to be published on the website, including funds raised, participation levels, and overall reach.",
    },
  ],
  benefits: [
    "Eligibility: Open to motivated high school, college, and university students",
    "Volunteer Hours: Leading a Student Water Project initiative from start to finish can contribute 40+ verified volunteer hours for Canadian high school students",
    "IB CAS Opportunity: This role can count as a CAS project or CAS experience for students in the International Baccalaureate program",
    "Mentorship & Support: You will receive ongoing guidance from experienced student leaders and senior advisors throughout the entire process",
    "Portfolio Building: Gain valuable leadership experience for university, co-op, and job applications",
  ],
  proposalCta: {
    label: "Proposal Guiding Document",
    href: externalLinks.proposalDocument,
    external: true,
  },
  applicationCta: {
    label: "Student Leader Application",
    href: externalLinks.studentLeaderApplication,
    external: true,
  },
};

export const challengeCommittee = [
  { name: "Kate Klassen", detail: "Western University — BSc" },
  { name: "Valeria Jaimes Castillo", detail: "Western University — BSc" },
  { name: "Jamie Barclay", detail: "University of Guelph — BA" },
  { name: "Dan Csinos", detail: "Queen's University — BSc" },
  { name: "Samantha Guzzo", detail: "Western University — BSc" },
  { name: "Grace Docherty", detail: "Western University — BMus" },
];
