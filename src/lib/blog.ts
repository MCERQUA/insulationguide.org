import fs from "fs";
import path from "path";
import readingTime from "reading-time";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Materials & Eco Options" | "Comfort & Performance" | "Buying & DIY Guidance";
  image: string;
}

export const POSTS: PostMeta[] = [
  {
    slug: "eco-friendly-insulation-options",
    title: "Eco-Friendly Insulation Options: Sheep Wool, Recycled Denim & Other Sustainable Choices",
    description:
      "What \"eco-friendly insulation\" actually means, and an honest look at sheep wool, recycled denim, and cellulose.",
    date: "2026-07-14",
    category: "Materials & Eco Options",
    image: "/images/blown-in-cellulose-insulation.jpg",
  },
  {
    slug: "does-insulation-reduce-noise",
    title: "Does Insulation Reduce Noise? A Homeowner's Guide to Soundproofing",
    description:
      "Which insulation types actually help with sound, and why insulation alone usually isn't full soundproofing.",
    date: "2026-07-21",
    category: "Comfort & Performance",
    image: "/images/fiberglass-batt-insulation.jpg",
  },
  {
    slug: "signs-you-need-more-insulation",
    title: "Signs You Need More Insulation (and How Much You Actually Need)",
    description:
      "High bills, uneven temps, ice dams, drafts — the real signs of under-insulation, and how to check before you spend.",
    date: "2026-07-28",
    category: "Buying & DIY Guidance",
    image: "/images/diy-homeowner-installing-insulation.jpg",
  },
  {
    slug: "is-spray-foam-insulation-safe",
    title: "Is Spray Foam Insulation Safe? What Homeowners Should Know Before They Buy",
    description:
      "An honest look at spray foam's reputation questions — what actually goes wrong, and how proper installation prevents it.",
    date: "2026-08-04",
    category: "Buying & DIY Guidance",
    image: "/images/spray-foam-application.jpg",
  },
];

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getAllPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getReadTime(slug: string): string {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const content = fs.readFileSync(filePath, "utf8");
    return readingTime(content).text;
  } catch {
    return "5 min read";
  }
}
