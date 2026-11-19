import { Shield, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { label: "Trang chủ", href: "/#home" },
  { label: "Chương chơi", href: "/#chapters" },
  { label: "Giới thiệu", href: "/#about" },
];

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* LOGO */}
        <Link
          to="/#home"
          onClick={handleNavigation}
          className="flex items-center gap-3"
        >
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
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm text-muted transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* PLAY BUTTON */}
        <Link
          to="/#chapters"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background transition hover:bg-amber-300 md:inline-flex"
        >
          Bắt đầu chơi
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Mở menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/10 p-2 text-foreground md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-background px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavigation}
                className="text-sm text-muted transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/#chapters"
              onClick={handleNavigation}
              className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-bold text-background"
            >
              Bắt đầu chơi
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
