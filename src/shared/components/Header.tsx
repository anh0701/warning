import { Shield, Menu } from "lucide-react";

const navigation = [
  { label: "Trang chủ", href: "#home" },
  { label: "Chương chơi", href: "#chapters" },
  { label: "Giới thiệu", href: "#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-background">
            <Shield size={23} strokeWidth={2.5} />
          </div>

          <div>
            <p className="text-lg font-black tracking-[0.12em]">
              WARNING<span className="text-primary">.</span>
            </p>
            <p className="text-[9px] font-medium tracking-[0.2em] text-muted">
              SURVIVAL EXPERIENCE
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#chapters"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background transition hover:bg-amber-300 md:inline-flex"
        >
          Bắt đầu chơi
        </a>

        <button
          type="button"
          aria-label="Mở menu"
          className="rounded-lg border border-white/10 p-2 text-foreground md:hidden"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
