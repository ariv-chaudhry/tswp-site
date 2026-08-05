export type Publication = {
  title: string;
  author?: string;
  date?: string;
  category?: string;
  summary?: string;
  href: string;
  external?: boolean;
  /** Optional cover/poster image under /public/images/publications/ */
  image?: string;
  pdfHref?: string;
};

export const publicationsPage = {
  eyebrow: "Student Publications",
  title: "Water Treatment Resources and Education",
  description:
    "Explore weekly articles written by university students and reviewed by mentors in engineering and science. Learn about water treatment technologies, microbiology, UV disinfection, sustainability, and the latest innovations improving access to safe drinking water worldwide.",
  featuredHeading: "Featured Articles",
};

/**
 * Featured articles from https://www.tswp.org/student-publications
 * Full article bodies are hosted on this Next.js site.
 */
export const publications: Publication[] = [
  {
    title:
      "Engineering Future Variants of SpudCells for Programmable Water Bioremediation",
    author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
    category: "Jr Scientific Team Publication 1",
    summary:
      "Can an artificial cell help solve one of humanity’s oldest challenges: access to clean water? This article explores the potential of recently constructed synthetic cells, SpudCells, as a sustainable and innovative technology for water bioremediation. Unlike natural bacteria, SpudCells are highly customizable allowing for diversification of specialized tasks without the unpredictability associated with living organisms.",
    href: "/spud-cells",
    // TODO: Add poster image to /public/images/publications/spud-cells.jpg
    image: "/images/ArticleThumbnail1.avif",
    pdfHref:
      "https://www.tswp.org/_files/ugd/0e285e_9c542939ab2146d0acd00befe900f6f9.pdf",
  },
  {
    title:
      "Human Adenoviruses in Drinking Water: Challenges in Detection, Persistence, and Treatment",
    author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
    category: "Jr Scientific Team Publication 2",
    summary:
      "Human adenoviruses (HAdVs) have emerged as important waterborne pathogens because of their exceptional environmental stability and persistence. Unlike many other viruses, HAdVs possess a robust protein capsid and a double-stranded DNA genome that enhance their survival under adverse environmental conditions and reduce susceptibility to traditional low-pressure ultraviolet (UV) disinfection.",
    href: "/human-adenoviruses-in-drinking-water",
    // TODO: Add poster image to /public/images/publications/human-adenoviruses.jpg
    image: "/images/ArticleThumbnail2.avif",
    pdfHref:
      "https://www.tswp.org/_files/ugd/089add_10702cd55bef42efa63d7d529b8f3d16.pdf",
  },
];
