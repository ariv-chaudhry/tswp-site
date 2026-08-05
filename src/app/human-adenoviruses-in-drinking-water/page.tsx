import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { humanAdenovirusesArticle } from "@/data/articles/human-adenoviruses";

export const metadata: Metadata = {
  title: "Human Adenoviruses in Drinking Water",
  description: humanAdenovirusesArticle.metaDescription,
};

export default function HumanAdenovirusesPage() {
  return <ArticleLayout article={humanAdenovirusesArticle} />;
}
