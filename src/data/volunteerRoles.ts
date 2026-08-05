import type { VolunteerRole } from "@/types";

export const volunteerPage = {
  eyebrow: "Volunteering",
  title: "Join Our Team",
  intro:
    "From graphic design and animation to coding and engineering management, there is a perfect role for you on our volunteering team. Volunteers gain access to all of our Slack channels and our exclusive LinkedIn group. We are not only executing projects — we are building a community.",
  studentIntro:
    "This is your creative outlet! Becoming a student volunteer with TSWP allows students to build skills, connections, and experience while contributing their passions to a good cause. All of our volunteering positions contribute to high school volunteer hours. Our Student Project Leader positions count for 40+ hours and can be represented as an IB CAS project.",
  advisoryIntro:
    "Senior advisory positions are crucial to ensuring that students are able to learn and grow on their journey with The Student Water Project. You will either have a core focus on engineering/science for project deployment, operational consulting, or one-off event coordination assistance. We are looking for advisors with credibility and experience in their respective fields.",
  // Interest Form URL was not extractable from Wix buttons — see CONTENT_TODO.md
  interestFormLabel: "Interest Form",
  interestFormHref: "/contact",
};

export const studentRoles: VolunteerRole[] = [
  {
    id: "gif-videos",
    title: "GIF/Videos",
    category: "Animation",
    description:
      'We are looking for students to create cartoon-style animations for our mascot "Droplet". These will likely be 2-second GIFs and videos for our website.',
    requirements:
      "Must have their own animation/drawing software; submit any past artwork with the application form.",
  },
  {
    id: "merch-mascot",
    title: "Merch/Mascot",
    category: "Visual Arts",
    description:
      'We would like to feature water-related student art pieces on our merchandise. We also need students to design different renditions of our mascot "Droplet".',
    requirements:
      "Must have their own materials/software; submit an art piece with the application.",
  },
  {
    id: "informative-writing",
    title: "Informative Writing",
    category: "Informative Writing",
    description:
      "We need students to write informative pieces for our social media and website. From research articles to personal experience reflections, we need your creativity to connect with readers.",
    requirements: "Any writing experience.",
  },
  {
    id: "coding",
    title: "Coding",
    category: "Coding",
    description:
      "To make our fundraisers more interactive, we are looking to incorporate automated databases and websites for donors. We also need students to assist our CTO with monitoring existing sites and databases.",
    requirements: "Share a link to any coding or web development project.",
  },
  {
    id: "photography-videography",
    title: "Photography/Videography",
    category: "Content/Events",
    description:
      "We need students to take videos and photos for our informative video series and other social media content. We'd also like to incorporate student photography and videography in fundraising events.",
    requirements: "Own a camera or phone with a good quality camera.",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    category: "Social Media",
    description:
      "We are looking for volunteers to create online content. From hosting our educational interview videos to creating promotional Instagram reels, we have content creation roles for any comfort levels.",
    requirements: "Be comfortable in front of the camera.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Merchandise/Posters",
    description:
      "Graphic Design volunteers will lead merchandise designs by finding the best way to combine visual art creations with physical merchandise. They will also design physical and digital posters.",
    requirements: "Submit any past poster/piece.",
  },
  {
    id: "project-management",
    title: "Project Management",
    category: "Engineering",
    description:
      "Student engineers assist the senior advisors with project management and coordination. This involves working on proposals, experimental reports, and project design. We will also have students assisting with project deployment in the future.",
    requirements: "Students pursuing a science/engineering degree.",
  },
  {
    id: "event-committee",
    title: "Event Committee",
    category: "Event Coordination",
    description:
      "We are looking for students to lead our fundraising events. These are campaign-based roles. If a campaign resonates with you, we would love to have you on the committee to help bring it to life.",
    requirements: "Passion and enthusiasm.",
  },
  {
    id: "one-time-help",
    title: "One-time Help",
    category: "Event Volunteering",
    description:
      "Assisting with in-person events. These are one-off volunteering efforts and you will be notified through Slack when events are happening. Roles range from handing out T-shirts to presenting a booth at a networking event.",
  },
  {
    id: "student-leadership",
    title: "Student Leadership / Campaign Leadership",
    category: "Campaign Leadership",
    description:
      "If you have a creative idea, submit a proposal to our executive team. Students have the opportunity to bring their ideas to life with the guidance of our executive team.",
  },
];
