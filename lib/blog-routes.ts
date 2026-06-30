import { blogPosts } from "@/Components/Blog/blogContent";

export function getBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}
