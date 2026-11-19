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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Timer
            size={17}
            className={isTimeCritical ? "text-[#e05252]" : "text-[#e8a34a]"}
          />
          <span className="text-[10px] font-bold tracking-wider text-[#8996a3]">
            TIME REMAINING
          </span>
        </div>

        <span
          className={`font-mono text-xl font-black tabular-nums ${
            isTimeCritical ? "text-[#e05252]" : "text-white"
          }`}
        >
          00:{String(timeLeft).padStart(2, "0")}
        </span>
      </div>

      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            isTimeCritical ? "bg-[#e05252]" : "bg-[#e8a34a]"
          }`}
          style={{ width: `${Math.max(0, timePercentage)}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#58b889]" />
              <span className="text-xs font-semibold text-[#b8c3cc]">
                Safety
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-white">
              {safety}%
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#58b889] transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, safety))}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Brain size={14} className="text-[#e8a34a]" />
              <span className="text-xs font-semibold text-[#b8c3cc]">
                Calmness
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-white">
              {calmness}%
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#e8a34a] transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, calmness))}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
