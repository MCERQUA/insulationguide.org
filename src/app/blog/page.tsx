import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { getAllPosts, getReadTime } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Insulation Questions, Answered",
  description:
    "Deeper dives on specific insulation questions — eco-friendly options, soundproofing, signs you need more, and spray foam safety.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Section band="base" className="pt-16">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground">
          InsulationGuide Blog
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Deeper dives on specific insulation questions — practical answers as they come up.
        </p>
      </FadeIn>

      <StaggerChildren className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block h-full cursor-pointer">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-primary/90 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>&middot;</span>
                    <span>{getReadTime(post.slug)}</span>
                  </div>
                  <h2 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </article>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
