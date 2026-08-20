import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { getAllPosts, getPostMeta, getReadTime } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) notFound();

  const { default: PostBody } = await import(`@/content/posts/${slug}.mdx`);
  const readTime = getReadTime(slug);

  return (
    <>
      <Section band="base" className="pt-16 pb-0">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>

            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>&middot;</span>
              <span>{readTime}</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" />
          </FadeIn>
        </div>
      </Section>

      <Section band="base" className="pt-10">
        <FadeIn
          className="prose prose-lg mx-auto max-w-3xl
            prose-headings:font-heading prose-headings:font-semibold prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-foreground/85 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-blockquote:border-primary prose-blockquote:text-muted-foreground
            prose-li:text-foreground/85
            prose-ul:my-4 prose-ol:my-4
          "
        >
          <PostBody />
        </FadeIn>

        <FadeIn className="mx-auto mt-14 max-w-3xl rounded-2xl bg-accent/15 p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Ready to talk to someone?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get matched with a vetted, insured insulation contractor — free, no obligation.
          </p>
          <Button href="/get-matched" className="mt-5" icon={ArrowRight}>
            Get Matched
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
