import { Clock3, LockKeyhole, Play } from "lucide-react";
import type { Chapter } from "../types/chapter.types";
import { Link } from "react-router-dom";

interface ChapterScenarioListProps {
  chapter: Chapter;
}

export default function ChapterScenarioList({
  chapter,
}: ChapterScenarioListProps) {
  return (
    <section id="chapter-scenarios" className="scroll-mt-24">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            CHOOSE YOUR SCENARIO
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Select Your Mission
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Mỗi tình huống là một thử thách sinh tồn riêng. Hãy chọn nhiệm vụ và
            chuẩn bị cho những quyết định quan trọng.
          </p>
        </div>

        <p className="shrink-0 text-xs font-semibold tracking-wider text-muted">
          {
            chapter.scenarios.filter((item) => item.status === "available")
              .length
          }{" "}
          / {chapter.scenarios.length} AVAILABLE
        </p>
      </div>

      {chapter.scenarios.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chapter.scenarios.map((scenario, index) => {
            const isAvailable = scenario.status === "available";

            return (
              <article
                key={scenario.id}
                className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border bg-surface transition duration-300 ${
                  isAvailable
                    ? "border-primary/30 hover:-translate-y-1 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/5"
                    : "border-white/10"
                }`}
              >
                <div className="absolute inset-0">
                  {scenario.coverImage ? (
                    <img
                      src={scenario.coverImage}
                      alt={scenario.title}
                      className={`h-full w-full object-cover transition duration-700 ${
                        isAvailable ? "group-hover:scale-105" : "grayscale"
                      }`}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-surface to-background" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/10" />
                </div>

                <div className="relative flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between">
                    <span className="rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-black tracking-wider text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {isAvailable ? (
                      <span className="rounded-md border border-primary/40 bg-primary/15 px-3 py-1.5 text-[10px] font-bold tracking-widest text-primary">
                        AVAILABLE
                      </span>
                    ) : (
                      <span className="rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-bold tracking-widest text-muted">
                        COMING SOON
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-28">
                    <h3 className="text-2xl font-black tracking-tight text-white">
                      {scenario.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 min-h-[66px] text-sm leading-6 text-gray-300">
                      {scenario.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-muted">
                        <Clock3 size={15} />
                        {scenario.estimatedMinutes} minutes
                      </div>

                      {isAvailable ? (
                        <Link
                          to={`/game/${chapter.id}/${scenario.id}`}
                          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-black tracking-wider text-background transition hover:bg-amber-300"
                        >
                          PLAY
                          <Play size={13} fill="currentColor" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold tracking-wider text-muted">
                          <LockKeyhole size={13} />
                          LOCKED
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
