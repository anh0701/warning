import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { getChapterById } from "../services/chapterService";
import ChapterHero from "../components/ChapterHero";
import ChapterOverview from "../components/ChapterOverview";
import ChapterScenarioList from "../components/ChapterScenarioList";

export default function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();

  const chapter = chapterId ? getChapterById(chapterId) : undefined;

  if (!chapter) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-primary">
            404 - CHAPTER NOT FOUND
          </p>

          <h1 className="mt-4 text-3xl font-black">Chapter not found</h1>

          <p className="mt-3 text-sm text-muted">
            Chương bạn đang tìm kiếm không tồn tại.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-background transition hover:bg-amber-300"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <ChapterHero chapter={chapter} />

      <main className="mx-auto max-w-7xl space-y-20 px-5 py-16 md:px-8 md:py-20">
        <ChapterOverview chapter={chapter} />

        <ChapterScenarioList chapter={chapter} />
      </main>
    </>
  );
}
