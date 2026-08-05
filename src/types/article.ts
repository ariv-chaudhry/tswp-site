export type ArticleAuthor = {
  name: string;
  affiliation?: string;
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type ArticleSection = {
  title: string;
  blocks: ArticleBlock[];
};

export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  authors: ArticleAuthor[];
  abstract: string;
  sections: ArticleSection[];
  references?: string[];
  pdfHref?: string;
};
