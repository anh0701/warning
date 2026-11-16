import HeroSection from "../components/HeroSection";
import ContinueCard from "../components/ContinueCard";
import FeaturedChapters from "../components/FeaturedChapters";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContinueCard />
      <FeaturedChapters />

      <section
        id="about"
        className="border-t border-white/10 bg-surface/50 px-5 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary">
            ABOUT THE GAME
          </p>

          <h2 className="mt-4 text-3xl font-black">
            Knowledge Can Save Lives.
          </h2>

          <p className="mt-5 leading-8 text-muted">
            WARNING là trò chơi mô phỏng các tình huống nguy hiểm trong cuộc
            sống thường ngày. Thông qua những lựa chọn và diễn biến câu chuyện,
            người chơi có cơ hội tìm hiểu kiến thức an toàn và cách ứng phó phù
            hợp.
          </p>
        </div>
      </section>
    </>
  );
}
