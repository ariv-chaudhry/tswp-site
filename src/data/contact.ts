import type { ContactInfo } from "@/types";

export const contactInfo: ContactInfo = {
  heading: "Get In Touch",
  subheading:
    "Questions, partnerships, media inquiries — we'd love to hear from you.",
  email: "studentwaterproject@gmail.com",
  instagramHandle: "@thestudentwaterproject",
  instagramUrl: "https://www.instagram.com/thestudentwaterproject",
  location: "Toronto, Ontario, Canada",
  teamEmails: [
    {
      name: "Valerie Mao",
      role: "Team Lead",
      email: "Vvmao@uwaterloo.ca",
    },
    {
      name: "Sophia Yenson",
      role: "Team Lead",
      email: "syenson@student.ubc.ca",
    },
  ],
};

export const donatePage = {
  eyebrow: "Donation",
  title: "Every Dollar Makes a Difference",
  description:
    "Our donation page will be launching soon! Soon you will be able to contribute to individual campaigns or donate to our Pilot Project directly. Complete the form to be notified when donations open.",
  transparencyNote:
    "100% of donations go to listed projects. Full transparency is provided for every dollar raised. Student-led funds for the Kenya pilot are matched dollar-for-dollar by Clear Inc.",
  notifyPrompt: "Get notified when donations open!",
  campaignLinks: [
    {
      label: "12,000 KM Challenge Campaign (Zeffy)",
      href: "https://www.zeffy.com/en-CA/peer-to-peer/25-000-km-challenge",
      external: true,
    },
    {
      label: "Challenge Site",
      href: "https://tswp12k.vercel.app/",
      external: true,
    },
    {
      label: "Learn About the Pilot Project",
      href: "/pilot-project",
    },
  ],
};
