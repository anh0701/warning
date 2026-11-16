import { Brain, ShieldCheck, Timer } from "lucide-react";

interface GameHUDProps {
  timeLeft: number;
  timePercentage: number;
  safety: number;
  calmness: number;
}

export default function GameHUD({
  timeLeft,
  timePercentage,
  safety,
  calmness,
}: GameHUDProps) {
  const isTimeCritical = timeLeft <= 10;

  return (
    <div className="w-full rounded-xl border border-white/10 bg-[#1b2835] p-4">
      {/* Top row */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#9aa8b5]">
            SURVIVAL STATUS
          </span>
        </div>

        <div
          className={`flex items-center gap-2 font-mono text-sm font-bold ${
            isTimeCritical ? "text-[#e05252]" : "text-[#e8a34a]"
          }`}
        >
          <Timer size={17} />
          <span>00:{String(timeLeft).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Timer progress */}
      <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            isTimeCritical ? "bg-[#e05252]" : "bg-[#e8a34a]"
          }`}
          style={{ width: `${timePercentage}%` }}
        />
      </div>

      {/* Status indicators */}
      <div className="grid grid-cols-2 gap-4">
        {/* Safety */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-[#f2f3f4]">
              <ShieldCheck size={17} className="text-[#58b889]" />
              <span>Safety</span>
            </div>

            <span className="font-mono text-sm font-semibold text-[#f2f3f4]">
              {safety}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#58b889] transition-all duration-500"
              style={{ width: `${safety}%` }}
            />
          </div>
        </div>

        {/* Calmness */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-[#f2f3f4]">
              <Brain size={17} className="text-[#e8a34a]" />
              <span>Calmness</span>
            </div>

            <span className="font-mono text-sm font-semibold text-[#f2f3f4]">
              {calmness}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#e8a34a] transition-all duration-500"
              style={{ width: `${calmness}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
