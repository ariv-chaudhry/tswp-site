import type { PilotContent } from "@/types";
import { externalLinks } from "@/data/site";

export const featuredProject = {
  slug: "pilot-project",
  eyebrow: "Featured Project",
  title: "Kenya Water Project Expansion",
  school: "Rianyabayo Memorial Academy",
  location: "Nyamesocho, Kenya",
  summary:
    "An award-winning pilot UV water treatment system, developed in partnership with Mitacs, Clear Inc., and MW Technologies, proved that safe drinking water can be delivered effectively. However, limited storage and system capacity mean the current system cannot meet full demand.",
  goal: "The Student Water Project aims to expand this proven solution to ensure reliable access to clean water for the entire school.",
  // TODO: Replace with real project photo from Wix/export
  image: "/images/project-kenya.jpg",
  href: "/pilot-project",
  partnersArticleHref: externalLinks.mitacsArticle,
};

export const pilotProject: PilotContent = {
  title: "Pilot Project",
  school: "Rianyabayo Memorial Academy",
  location: "Nyamesocho, Kenya",
  region: "Kisii County, Kenya",
  intro: [
    "Access to safe drinking water remains a serious challenge in many underserved rural schools. At Rianyabayo Memorial Academy in Kisii County, Kenya, students and staff continue to face risks from unsafe water, and limited sanitation and hygiene infrastructure.",
    "An award-winning pilot water treatment system, integrating biosand filtration with ultraviolet light-emitting diode (UV LED) disinfection and developed in 2024 in partnership with Mitacs, Clear Inc., and MW Technologies, proved that safe drinking water can be delivered effectively in underserved rural schools. However, rapid growth in the pupil population, coupled with limited storage and system capacity, means the current system cannot meet overall demand.",
    "In addition, students and staff rely on overcrowded and unhygienic pit latrines, with lack of handwashing facilities. These conditions significantly increase the risk of waterborne and sanitation-related diseases, including dysentery, cholera, and urinary tract infections.",
    "The Student Water Project aims to scale up and upgrade the existing proven system to address capacity and infrastructure limitations, ensuring reliable access to safe drinking water and improved sanitation for the entire school community.",
  ],
  articleHref: externalLinks.mitacsArticle,
  problemIntro:
    "Inadequate access to safe water, combined with poor sanitation and hygiene infrastructure, continues to expose students and staff at Rianyabayo Memorial Academy to waterborne diseases such as cholera and dysentery. This not only compromises their health but also contributes to increased absenteeism and reduced academic performance, ultimately affecting overall learning outcomes.",
  // On Wix, water-related bullets appear under "The Problem"; sanitation bullets appear under a mislabeled "Water Treatment Challenges" heading.
  waterTreatmentChallenges: [
    "Water storage capacity is limited during periods of low rainfall, which restricts availability when it is needed most.",
    "Fluctuations in raw water quality during rainfall events increase the treatment burden and can overload the biosand filter, reducing overall system efficiency.",
    "Post-treatment contamination risks, including microbial regrowth during storage and the unauthorized transfer of treated water into non-sterile containers for later use, compromise water safety.",
    "Operation and maintenance challenges, such as delayed biosand filter cleaning, inadequate monitoring, and damage to system components by students, reduce reliability.",
    "Power supply instability, particularly voltage fluctuations in the PV/grid-integrated system, leads to inverter damage and inconsistent UV reactor performance.",
    "Limited access to spare parts, testing materials, and financial resources constrains timely maintenance and long-term sustainability.",
  ],
  sanitationChallenges: [
    "Insufficient and overcrowded pit latrines limit safe and dignified access, particularly during peak school hours.",
    "Poor maintenance and unhygienic conditions of existing facilities increase the risk of disease transmission.",
    "Lack of functional handwashing facilities, including limited access to water and soap, reduces the effectiveness of hygiene practices.",
    "Inadequate hygiene awareness and practices among students contribute to the spread of sanitation-related diseases.",
    "Weak integration between water supply and sanitation infrastructure constrains consistent hygiene behavior, especially during periods of water scarcity.",
  ],
  solutionIntro:
    "This project builds directly on a proven and successful existing pilot system by addressing key challenges related to capacity, reliability, water safety, and long-term sustainability through targeted upgrades to both water and sanitation infrastructure.",
  solutionBody: [
    "In partnership with Clear Inc. in Canada, and A Drop of Hope, a local NGO in Kenya focused on providing safe water to communities, the project will upgrade and scale the existing water treatment system to ensure reliable access to safe drinking water throughout the year: i) Storage capacity will be increased through the installation of additional water storage tanks to maximize rainwater harvesting during wet periods, increase capacity and ensure a consistent supply of water; ii) to strengthen treatment performance, an advanced, long-life 10,000-hour UV LED disinfection unit will replace the current 1,000-hour system, significantly improving durability, operational efficiency, and pathogen inactivation under variable water quality conditions; iii) power stability will be improved by installing an additional solar panel to increase energy generation and an extra battery to enhance storage capacity, ensuring consistent UV system operation even under variable solar conditions. Operation and maintenance capacity will be enhanced through strengthened monitoring, timely biosand filter maintenance, and improved protection of system components; iv) recognizing that safe drinking water alone is not sufficient, the project will also upgrade sanitation and hygiene infrastructure. This includes improving the pit latrine conditions, expanding access to functional handwashing stations with reliable water and soap, and promoting improved hygiene practices across the school community.",
    "These integrated interventions will establish a more resilient, safe, and sustainable WASH system, reducing exposure to disease, improving school attendance, and supporting better health and learning outcomes for students and staff.",
  ],
  fundraisingMethod: [
    "Funding for this project is generated through structured, student-run initiatives. These include organized fundraising campaigns within schools, merchandise launches designed by students, direct outreach for donations and sponsorships, and community-based events developed in partnership with local organizations. Each initiative is planned and executed by student teams, providing both funding and hands-on project management experience.",
    "All funds raised through these student-led efforts are matched dollar-for-dollar by Clear Inc., effectively doubling the impact of every contribution and ensuring that projects can be fully implemented with the required infrastructure, materials, and technical support.",
  ],
  implementationIntro:
    "The project will be implemented in a phased and coordinated approach to ensure effective upgrading of the water, sanitation, and hygiene (WASH) system, while minimizing disruption to school activities. Implementation will be carried out in close collaboration with Clear Inc. and A Drop of Hope, alongside school management and technical partners.",
  phases: [
    {
      phase: 1,
      title: "Detailed Assessment and Design",
      description:
        "The initial phase will involve a comprehensive technical review of the existing water treatment, storage, and sanitation infrastructure. This will include assessing system performance, identifying critical failure points, and validating design requirements for upgrades. Final engineering designs will then be developed for the expanded storage system, UV LED disinfection upgrade, rainwater harvesting optimization, and sanitation improvements.",
    },
    {
      phase: 2,
      title: "Procurement and Preparation",
      description:
        "All required materials and equipment, including the 10,000 L storage tank, UV LED disinfection unit, solar components (additional panel and battery), plumbing materials, and sanitation infrastructure upgrades, will be procured. Site preparation activities will also be undertaken, including clearing installation areas and preparing foundations for tanks and system components.",
    },
    {
      phase: 3,
      title: "System Expansion and Installation",
      description:
        "This phase will focus on physical implementation of the upgrades. The additional water storage tank will be installed and integrated into the existing system. The UV LED disinfection unit (10,000-hour lifespan) will replace the current system and be calibrated for optimal performance. Improvements to the rainwater harvesting system will be implemented to enhance collection efficiency. Solar power enhancements, including the additional panel and battery storage, will also be installed to stabilize energy supply.",
    },
    {
      phase: 4,
      title: "Sanitation and Hygiene Infrastructure Upgrade",
      description:
        "Parallel to water system improvements, sanitation facilities will be upgraded. This will include rehabilitation of latrines, installation or improvement of handwashing stations, and ensuring consistent access to water and soap. Hygiene promotion activities will be introduced to encourage proper use of facilities and improve hygiene behavior among students and staff.",
    },
    {
      phase: 5,
      title: "Training, Commissioning, and Handover",
      description:
        "School staff and selected stakeholders will be trained on system operation, routine maintenance, water safety practices, and hygiene promotion. The upgraded system will then undergo commissioning tests to confirm performance standards. A formal handover will be conducted, including provision of operation and maintenance guidelines.",
    },
    {
      phase: 6,
      title: "Monitoring and Sustainability Support",
      description:
        "Post-implementation monitoring will be conducted to assess system performance, water quality, and hygiene outcomes. Technical support will be provided during the initial operational period to ensure system stability. Feedback mechanisms will also be established to support continuous improvement and long-term sustainability.",
    },
  ],
  impact: [
    "This project will directly benefit students and staff at the school, as well as the broader surrounding community.",
    "By strengthening access to safe drinking water and improving sanitation and hygiene infrastructure, the project is expected to significantly reduce exposure to waterborne and sanitation-related diseases. This will lead to improved student health, reduced illness-related absenteeism, and enhanced academic performance. In addition, strengthened hygiene promotion activities will support sustained behavioural change and improved hygiene practices within the school community.",
    "Beyond its immediate impact, this initiative will serve as a scalable model that can be replicated in other rural communities facing similar challenges.",
  ],
  fundingBreakdown: [
    "Cost of equipment",
    "Labour and deployment costs",
    "Organizational budget",
  ],
  summary: [
    "Access to safe drinking water is essential, yet students at Rianyabayo Memorial Academy still face daily risks due to system limitations.",
    "This project builds on a proven solution to deliver reliable, long-term access to clean water through expanded storage, improved treatment, and better sanitation.",
    "By supporting this initiative, you are directly improving student health, attendance, and quality of life, while helping scale a model that can impact other communities. Every contribution is matched, doubling its impact and bringing us closer to sustainable access to safe water for all.",
  ],
  figures: [
    {
      id: "figure-1",
      caption:
        "Figure 1. Rainwater harvesting and treatment system: (a) system schematic, (b) photovoltaic solar panels, (c) water storage and treatment tanks, and (d) UV LED reactor system.",
      // TODO: Add image from Wix pilot project page
      image: "/images/pilot/figure-1.jpg",
    },
    {
      id: "figure-2",
      caption: "Figure 2. The current conditions of the school toilets.",
      // TODO: Add image from Wix pilot project page
      image: "/images/pilot/figure-2.jpg",
    },
    {
      id: "figure-4",
      caption: "Figure 4. A banner signed by 100+ interested students.",
      // TODO: Add image from Wix pilot project page
      image: "/images/pilot/figure-4.jpg",
    },
    {
      id: "figure-5",
      caption:
        "Figure 5. Students and staff standing outside of Rianyabayo Memorial Academy during project installation in 2024.",
      // TODO: Add image from Wix pilot project page
      image: "/images/pilot/figure-5.jpg",
    },
  ],
};
