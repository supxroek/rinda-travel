// features/blog/components/blog-card.jsx
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  UserIcon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import dayjs from "@/lib/dayjs";
import { cn } from "@/lib/utils";

export function BlogCard({ post, index = 0 }) {
  return (
    <article
      className={cn(
        "group bg-white rounded-2xl overflow-hidden",
        "card-shadow card-shadow-hover",
        "transition-all duration-300 hover:-translate-y-1.5",
        "border border-border/50 hover:border-navy-200 flex flex-col h-full",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative overflow-hidden aspect-video block shrink-0"
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {post.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-navy-500/90 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <HugeiconsIcon
              icon={Calendar01Icon}
              className="w-3.5 h-3.5"
              strokeWidth={1.5}
            />
            {dayjs(post.publishedAt).format("D MMM YYYY")}
          </span>
          <span className="flex items-center gap-1">
            <HugeiconsIcon
              icon={UserIcon}
              className="w-3.5 h-3.5"
              strokeWidth={1.5}
            />
            {post.author?.name}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-navy-800 text-lg leading-snug mb-2 line-clamp-2 group-hover:text-navy-600 transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <HugeiconsIcon
              icon={Clock01Icon}
              className="w-3.5 h-3.5"
              strokeWidth={1.5}
            />
            อ่าน {post.readTime}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-navy-600 text-sm font-semibold hover:text-navy-800 transition-colors"
          >
            อ่านเพิ่มเติม &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
