import { Check, ChevronRight } from "lucide-react";
import type { ScenarioChoice } from "../types/game.types";

interface ChoiceListProps {
  choices: ScenarioChoice[];
  selectedChoice: ScenarioChoice | null;
  onChoose: (choice: ScenarioChoice) => void;
  disabled: boolean;
}

export default function ChoiceList({
  choices,
  selectedChoice,
  onChoose,
  disabled,
}: ChoiceListProps) {
  return (
    <section>
      <div className="mb-4">
        <p className="text-[10px] font-black tracking-[0.2em] text-[#e8a34a]">
          DECISION POINT
        </p>
        <h3 className="mt-2 text-xl font-black text-white">
          What will you do?
        </h3>
        <p className="mt-1 text-xs text-[#8996a3]">Select your next action.</p>
      </div>

      <div className="space-y-2.5">
        {choices.map((choice, index) => {
          const isSelected = selectedChoice?.id === choice.id;
          const letter = String.fromCharCode(65 + index);

          return (
            <button
              key={choice.id}
              type="button"
              disabled={disabled}
              onClick={() => onChoose(choice)}
              className={`group flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 sm:p-4 ${
                isSelected
                  ? "border-[#e8a34a] bg-[#e8a34a]/10 shadow-[0_0_20px_rgba(232,163,74,0.08)]"
                  : "border-white/10 bg-[#192632] hover:border-[#e8a34a]/60 hover:bg-[#202f3c]"
              } ${
                disabled && !isSelected ? "cursor-not-allowed opacity-40" : ""
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-mono text-sm font-black transition ${
                  isSelected
                    ? "border-[#e8a34a] bg-[#e8a34a] text-[#101820]"
                    : "border-white/10 bg-white/5 text-[#8996a3] group-hover:border-[#e8a34a]/50 group-hover:text-[#e8a34a]"
                }`}
              >
                {isSelected ? <Check size={17} /> : letter}
              </span>

              <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-[#e3e8ec]">
                {choice.text}
              </span>

              <ChevronRight
                size={17}
                className={`shrink-0 transition ${
                  isSelected
                    ? "text-[#e8a34a]"
                    : "text-[#65727e] group-hover:translate-x-1 group-hover:text-[#e8a34a]"
                }`}
              />
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-[10px] tracking-wider text-[#65727e]">
        YOUR DECISION WILL AFFECT THE OUTCOME
      </p>
    </section>
  );
}
