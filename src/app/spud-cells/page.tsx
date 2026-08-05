import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { spudCellsArticle } from "@/data/articles/spud-cells";

export const metadata: Metadata = {
  title: "Spud Cells",
  description: spudCellsArticle.metaDescription,
};

export default function SpudCellsPage() {
  return <ArticleLayout article={spudCellsArticle} />;
}
