import type { Metadata } from "next";
import InnerHero from "@/Components/ui/InnerHero";
import BlogGrid from "@/Components/Blog/BlogGrid";
import { blogPage } from "@/Components/Blog/blogContent";
import { siteConfig } from "@/lib/site";
import "@/Components/Blog/blog.css";

export const metadata: Metadata = {
  title: `Health Blog | ${siteConfig.name}`,
  description:
    "Read expert health articles, wellness tips, and medical guides from the doctors and leadership team at Sangi Hospital.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const { hero } = blogPage;

  return (
    <main>
      <InnerHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogGrid />
    </main>
  );
}
