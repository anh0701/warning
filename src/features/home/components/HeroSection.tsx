import { ArrowRight, Play, ShieldAlert } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[580px] items-center overflow-hidden border-b border-white/10"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpeg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/20" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 md:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold tracking-[0.15em] text-primary">
            <ShieldAlert size={15} />
            REAL-LIFE SURVIVAL SIMULATOR
          </div>

          <h1 className="text-5xl leading-[1.08] font-black tracking-tight md:text-7xl">
            ONE DECISION.
            <br />
            <span className="text-primary">ONE CHANCE.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
            Nếu một tình huống nguy hiểm xảy ra ngay lúc này, bạn sẽ làm gì? Hãy
            trải nghiệm những tình huống sinh tồn trong đời sống và học cách đưa
            ra quyết định an toàn hơn.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#chapters"
              className="inline-flex items-center gap-3 rounded-lg bg-primary px-7 py-4 font-bold text-background transition hover:-translate-y-1 hover:bg-amber-300"
            >
              <Play size={18} fill="currentColor" />
              Bắt đầu hành trình
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Tìm hiểu thêm
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-12 flex gap-10 border-t border-white/15 pt-6">
            <div>
              <p className="text-2xl font-black text-primary">05</p>
              <p className="mt-1 text-xs tracking-wider text-muted">CHAPTERS</p>
            </div>

            <div>
              <p className="text-2xl font-black text-primary">01</p>
              <p className="mt-1 text-xs tracking-wider text-muted">
                LIFE MATTERS
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-primary">∞</p>
              <p className="mt-1 text-xs tracking-wider text-muted">
                POSSIBILITIES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
