import type { Metadata } from "next";
import { redirect } from "next/navigation";
import InnerHero from "@/Components/ui/InnerHero";
import BlogArticle from "@/Components/Blog/BlogArticle";
import BlogRelated from "@/Components/Blog/BlogRelated";
import { getBlogPostBySlug, getBlogSlugs, getRelatedBlogPosts } from "@/lib/blog-routes";
import { siteConfig } from "@/lib/site";
import "@/Components/Blog/blog.css";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: `Blog Not Found | ${siteConfig.name}` };
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    redirect("/blog");
  }

  const relatedPosts = getRelatedBlogPosts(slug);

  return (
    <main>
      <InnerHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        backgroundImage={post.image}
        showTrustBar={false}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <BlogArticle post={post} />
      <BlogRelated posts={relatedPosts} />
    </main>
  );
}
