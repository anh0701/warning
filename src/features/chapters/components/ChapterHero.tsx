import { ArrowDown, LockKeyhole } from "lucide-react";
import type { Chapter } from "../types/chapter.types";

interface ChapterHeroProps {
  chapter: Chapter;
}

const difficultyLabels = {
  easy: "EASY",
  medium: "MEDIUM",
  hard: "HARD",
};

export default function ChapterHero({ chapter }: ChapterHeroProps) {
  const isAvailable = chapter.status === "available";

  return (
    <section className="relative isolate flex min-h-[480px] items-end overflow-hidden border-b border-white/10 md:min-h-[560px]">
      {/* Cover image */}
      {chapter.coverImage && (
        <img
          src={chapter.coverImage}
          alt={chapter.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-bold tracking-widest text-primary">
              CHAPTER {chapter.number}
            </span>

            <span className="text-xs font-bold tracking-[0.15em] text-muted">
              {chapter.category}
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            {chapter.title}
          </h1>

          <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-primary md:text-base">
            {chapter.subtitle}
          </p>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-gray-300 md:text-base">
            {chapter.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold tracking-wider text-muted">
            <span>
              DIFFICULTY:{" "}
              <span className="text-foreground">
                {difficultyLabels[chapter.difficulty]}
              </span>
            </span>

            <span>
              DURATION:{" "}
              <span className="text-foreground">
                {chapter.estimatedMinutes} MIN
              </span>
            </span>

            <span>
              SCENARIOS:{" "}
              <span className="text-foreground">
                {chapter.scenarios.length}
              </span>
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            {isAvailable ? (
              <a
                href="#chapter-scenarios"
                className="inline-flex items-center gap-3 rounded-lg bg-primary px-7 py-4 font-bold text-background transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Explore Chapter
                <ArrowDown size={18} />
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-7 py-4 font-bold text-muted">
                <LockKeyhole size={18} />
                Coming Soon
              </span>
            )}

            <a
              href="/#chapters"
              className="inline-flex items-center rounded-lg border border-white/15 px-7 py-4 font-semibold text-foreground transition hover:bg-white/10"
            >
              All Chapters
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
