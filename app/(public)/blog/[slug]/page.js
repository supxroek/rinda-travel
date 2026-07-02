// app/(public)/blog/[slug]/page.js
// Blog Detail Page

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, UserIcon, Clock01Icon, ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import  dayjs  from "@/lib/dayjs";
import { MOCK_BLOG_POSTS } from "@/lib/mock-content-data";

export function generateMetadata({ params }) {
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} — Rinda Travel Blog`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }) {
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Article Header */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover opacity-30"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
        </div>
        
        <div className="container-md relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm font-medium transition-colors">
            <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4" />
            กลับไปหน้าบล็อก
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span key={tag} className="badge-gold text-[11px] px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="heading-lg text-white mb-6 max-w-4xl">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={Calendar01Icon} className="w-4 h-4" />
              {dayjs(post.publishedAt).format('D MMMM YYYY')}
            </span>
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={UserIcon} className="w-4 h-4" />
              {post.author?.name}
            </span>
            <span className="flex items-center gap-1.5">
              <HugeiconsIcon icon={Clock01Icon} className="w-4 h-4" />
              อ่าน {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-md py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Lead paragraph */}
          <p className="text-xl text-navy-800 leading-relaxed font-medium mb-8">
            {post.excerpt}
          </p>
          
          {/* Tiptap content rendered here */}
          <div 
            className="prose prose-lg prose-slate prose-headings:font-heading prose-headings:text-navy-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <h4 className="font-heading font-semibold text-navy-800 mb-4">แท็กที่เกี่ยวข้อง</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-sm bg-muted text-muted-foreground hover:bg-navy-50 hover:text-navy-600 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
