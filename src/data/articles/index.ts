import { humanAdenovirusesArticle } from "@/data/articles/human-adenoviruses";
import { spudCellsArticle } from "@/data/articles/spud-cells";
import type { Article } from "@/types/article";

export const articles: Article[] = [
  spudCellsArticle,
  humanAdenovirusesArticle,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export { humanAdenovirusesArticle, spudCellsArticle };
