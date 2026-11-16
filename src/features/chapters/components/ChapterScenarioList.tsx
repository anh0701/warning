import { ArrowRight, Clock3, Play, LockKeyhole } from "lucide-react";
import type { Chapter } from "../types/chapter.types";
import { Link } from "react-router-dom";

interface ChapterScenarioListProps {
  chapter: Chapter;
}

export default function ChapterScenarioList({
  chapter,
}: ChapterScenarioListProps) {
  const isAvailable = chapter.status === "available";

  return (
    <section id="chapter-scenarios" className="scroll-mt-24">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-[0.2em] text-primary">
          YOUR JOURNEY
        </p>

        <h2 className="mt-3 text-3xl font-black">Chapter Scenarios</h2>

        <p className="mt-3 text-sm leading-7 text-muted">
          Hành trình được chia thành nhiều tình huống liên kết với nhau. Những
          quyết định của bạn sẽ ảnh hưởng đến diễn biến tiếp theo.
        </p>
      </div>

      {chapter.scenarios.length > 0 ? (
        <div className="space-y-3">
          {chapter.scenarios.map((scenario, index) => (
            <article
              key={scenario.id}
              className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-surface p-5 transition hover:border-primary/30 sm:flex-row sm:items-center"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-black text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold">{scenario.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {scenario.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                  <Clock3 size={14} />
                  {scenario.estimatedMinutes} minutes
                </div>
              </div>

              <div className="shrink-0">
                {isAvailable ? (
                  <Link
                    to={`/game/${chapter.id}?scenario=${scenario.id}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#e8a34a]/40 px-3 py-2 text-xs font-bold tracking-wider text-[#e8a34a] transition hover:bg-[#e8a34a] hover:text-[#101820]"
                  >
                    PLAY
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs text-muted">
                    <LockKeyhole size={14} />
                    LOCKED
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/15 bg-surface/50 px-6 py-12 text-center">
          <LockKeyhole size={30} className="mx-auto text-muted" />

          <h3 className="mt-4 font-bold">Scenarios are being developed</h3>

          <p className="mt-2 text-sm text-muted">
            Nội dung chương này sẽ sớm được cập nhật.
          </p>
        </div>
      )}
    </section>
  );
}
