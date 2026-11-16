
import {
  ArrowUpRight,
  Flame,
  Waves,
  CarFront,
  Shield,
  HeartPulse,
  LockKeyhole,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { getAllChapters } from '../../chapters/services/chapterService'
import type { Chapter } from '../../chapters/types/chapter.types'

const chapterIcons = {
  fire: Flame,
  flood: Waves,
  traffic: CarFront,
  personal: Shield,
  health: HeartPulse,
}

const chapterColors = {
  fire: 'text-orange-400',
  flood: 'text-sky-400',
  traffic: 'text-yellow-400',
  personal: 'text-violet-400',
  health: 'text-rose-400',
}

const chapterBackgrounds = {
  fire: 'from-orange-500/20',
  flood: 'from-sky-500/20',
  traffic: 'from-yellow-500/20',
  personal: 'from-violet-500/20',
  health: 'from-rose-500/20',
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  const Icon = chapterIcons[chapter.id as keyof typeof chapterIcons]
  const color = chapterColors[chapter.id as keyof typeof chapterColors]
  const background =
    chapterBackgrounds[chapter.id as keyof typeof chapterBackgrounds]

  const isAvailable = chapter.status === 'available'

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${background ?? 'from-primary/10'} to-transparent opacity-60`}
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${color ?? 'text-primary'}`}
          >
            {Icon ? <Icon size={25} /> : <Flame size={25} />}
          </div>

          <span className="text-3xl font-black text-white/10">
            {chapter.number}
          </span>
        </div>

        <p className="mt-7 text-[10px] font-bold tracking-[0.18em] text-muted">
          {chapter.category}
        </p>

        <h3 className="mt-2 text-xl font-bold">
          {chapter.title}
        </h3>

        <p className="mt-1 text-xs font-medium text-primary">
          {chapter.subtitle}
        </p>

        <p className="mt-3 min-h-14 text-sm leading-6 text-muted">
          {chapter.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <div>
            <span
              className={`flex items-center gap-2 text-[10px] font-bold tracking-wider ${
                isAvailable ? 'text-success' : 'text-muted'
              }`}
            >
              {isAvailable ? (
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
              ) : (
                <LockKeyhole size={12} />
              )}

              {isAvailable ? 'AVAILABLE' : 'COMING SOON'}
            </span>

            <p className="mt-1 text-xs text-muted">
              {chapter.scenarios.length > 0
                ? `${chapter.scenarios.length} Scenarios`
                : 'In development'}
            </p>
          </div>

          {isAvailable ? (
            <Link
              to={`/chapters/${chapter.id}`}
              className="flex items-center gap-2 text-sm font-bold text-primary transition group-hover:gap-3"
            >
              Explore
              <ArrowUpRight size={17} />
            </Link>
          ) : (
            <span className="cursor-not-allowed rounded-lg border border-white/10 px-3 py-2 text-xs text-muted">
              Locked
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function FeaturedChapters() {
  const chapters = getAllChapters()

  return (
    <section
      id="chapters"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8"
    >
      <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            CHOOSE YOUR CHALLENGE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Survival Chapters
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
            Mỗi chương là một hành trình với những tình huống thực tế.
            Mỗi quyết định đều có thể thay đổi diễn biến câu chuyện.
          </p>
        </div>

        <span className="text-sm text-muted">
          {chapters.length} Chapters
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </section>
  )
}
