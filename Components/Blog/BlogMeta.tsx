import {
  CalendarDays,
  Clock3,
  Heart,
  MessageCircle,
  UserRound,
} from "lucide-react";
import type { BlogPost } from "./blogContent";
import "./blog.css";

type BlogMetaProps = {
  post: Pick<
    BlogPost,
    "author" | "publishedDate" | "publishedTime" | "likes" | "commentsCount" | "readTime"
  >;
  variant?: "card" | "detail";
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogMeta({ post, variant = "card" }: BlogMetaProps) {
  return (
    <div className={`blog-meta blog-meta--${variant}`}>
      <div className="blog-meta__author">
        <UserRound size={15} strokeWidth={2} aria-hidden="true" />
        <span>{post.author.name}</span>
      </div>

      <div className="blog-meta__item">
        <CalendarDays size={15} strokeWidth={2} aria-hidden="true" />
        <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
      </div>

      <div className="blog-meta__item">
        <Clock3 size={15} strokeWidth={2} aria-hidden="true" />
        <span>{post.publishedTime}</span>
      </div>

      <div className="blog-meta__item blog-meta__item--stat">
        <Heart size={15} strokeWidth={2} aria-hidden="true" />
        <span>{post.likes}</span>
      </div>

      <div className="blog-meta__item blog-meta__item--stat">
        <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
        <span>{post.commentsCount}</span>
      </div>

      {variant === "detail" ? (
        <div className="blog-meta__item blog-meta__item--read">
          <Clock3 size={15} strokeWidth={2} aria-hidden="true" />
          <span>{post.readTime}</span>
        </div>
      ) : null}
    </div>
  );
}
