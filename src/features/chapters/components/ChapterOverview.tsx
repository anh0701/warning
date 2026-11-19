import { CheckCircle2, ChevronDown, Target } from "lucide-react";
import type { Chapter } from "../types/chapter.types";

interface ChapterOverviewProps {
  chapter: Chapter;
}

export default function ChapterOverview({ chapter }: ChapterOverviewProps) {
  if (chapter.objectives.length === 0) return null;

  return (
    <section className="border-t border-white/10 pt-8">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Target size={20} className="text-primary" />
            </div>

            <div>
              <h2 className="font-bold">Mission Objectives</h2>
              <p className="mt-1 text-xs text-muted">
                Những kỹ năng bạn sẽ rèn luyện trong chương này
              </p>
            </div>
          </div>

          <ChevronDown
            size={20}
            className="shrink-0 text-muted transition group-open:rotate-180"
          />
        </summary>

        <ul className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
          {chapter.objectives.map((objective, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-success"
              />

              <span className="text-sm leading-6 text-gray-300">
                {objective}
              </span>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
