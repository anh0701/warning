import { ArrowRight, Flame, Play } from "lucide-react";

export default function ContinueCard() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
      <div className="mb-5 flex items-center gap-2">
        <Flame size={20} className="text-primary" />
        <h2 className="text-xl font-bold">Tiếp tục hành trình</h2>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-transparent" />

        <div className="relative flex flex-col justify-between gap-8 p-7 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              YOUR LAST SESSION
            </p>

            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              Chapter 01: Fire
            </h3>

            <p className="mt-3 max-w-lg leading-7 text-muted">
              Một đám cháy bất ngờ xảy ra tại khu nhà trọ. Bạn đang ở trong
              phòng và bắt đầu nhận thấy mùi khét...
            </p>

            <div className="mt-6 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[35%] rounded-full bg-primary" />
            </div>

            <p className="mt-2 text-xs text-muted">Progress: 35%</p>
          </div>

          <a
            href="#chapters"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 font-bold text-background transition hover:bg-amber-300"
          >
            <Play size={17} fill="currentColor" />
            Tiếp tục
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
