import { ArrowDown } from "lucide-react";
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
  return (
    <section className="relative isolate flex min-h-[390px] items-end overflow-hidden border-b border-white/10 md:min-h-[440px]">
      {chapter.coverImage && (
        <img
          src={chapter.coverImage}
          alt={chapter.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/30 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-28 md:px-8 md:pb-14">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-bold tracking-widest text-primary">
              {chapter.category}
            </span>

            <span className="text-xs font-semibold tracking-wider text-muted">
              CHAPTER {chapter.number}
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            {chapter.title}
          </h1>

          <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-primary md:text-base">
            {chapter.subtitle}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
            {chapter.description}
          </p>

          <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-lg border border-white/10 bg-black/25 p-3">
              <p className="text-[10px] font-bold tracking-wider text-muted">
                DIFFICULTY
              </p>
              <p className="mt-1 text-sm font-bold text-foreground">
                {difficultyLabels[chapter.difficulty]}
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/25 p-3">
              <p className="text-[10px] font-bold tracking-wider text-muted">
                DURATION
              </p>
              <p className="mt-1 text-sm font-bold text-foreground">
                {chapter.estimatedMinutes} MIN
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/25 p-3">
              <p className="text-[10px] font-bold tracking-wider text-muted">
                SCENARIOS
              </p>
              <p className="mt-1 text-sm font-bold text-foreground">
                {chapter.scenarios.length}
              </p>
            </div>
          </div>

          <a
            href="#chapter-scenarios"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-background transition hover:-translate-y-1 hover:bg-amber-300"
          >
            Explore Scenarios
            <ArrowDown size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
