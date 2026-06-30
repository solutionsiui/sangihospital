import { blogPosts } from "./blogContent";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="blog-grid" aria-label="Blog articles">
      <div className="blog-grid__inner">
        <BlogCard post={featured} featured />

        <div className="blog-grid__list">
          {rest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
