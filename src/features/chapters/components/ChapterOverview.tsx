
import { CheckCircle2, Target } from 'lucide-react'
import type { Chapter } from '../types/chapter.types'

interface ChapterOverviewProps {
  chapter: Chapter
}

export default function ChapterOverview({
  chapter,
}: ChapterOverviewProps) {
  return (
    <section className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <Target className="text-primary" size={22} />

          <h2 className="text-xl font-bold">
            Mission Objectives
          </h2>
        </div>

        <p className="mb-6 text-sm leading-7 text-muted">
          Sau khi hoàn thành chương này, bạn sẽ có cơ hội tìm hiểu
          những kiến thức và kỹ năng sau:
        </p>

        <ul className="space-y-4">
          {chapter.objectives.map((objective, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-success"
              />

              <span className="text-sm leading-6 text-gray-300">
                {objective}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface p-6 md:p-7">
        <p className="text-xs font-bold tracking-[0.2em] text-primary">
          CHAPTER BRIEFING
        </p>

        <h3 className="mt-4 text-2xl font-black">
          Be prepared.
          <br />
          Stay aware.
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted">
          WARNING mô phỏng những tình huống trong đời sống thường ngày.
          Hãy quan sát bối cảnh, cân nhắc rủi ro và lựa chọn hành động
          phù hợp thay vì chỉ cố gắng phản ứng thật nhanh.
        </p>

        <div className="mt-7 border-t border-white/10 pt-5">
          <p className="text-xs text-muted">
            ESTIMATED PLAY TIME
          </p>

          <p className="mt-2 text-3xl font-black text-primary">
            {chapter.estimatedMinutes}
            <span className="ml-2 text-sm font-medium text-muted">
              minutes
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
