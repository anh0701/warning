import { Check, ChevronRight, CircleAlert } from "lucide-react";

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
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9aa8b5]">
          What will you do?
        </h3>

        <span className="text-xs text-[#71808e]">
          {choices.length} actions available
        </span>
      </div>

      <div className="grid gap-3">
        {choices.map((choice, index) => {
          const isSelected = selectedChoice?.id === choice.id;

          return (
            <button
              key={choice.id}
              type="button"
              disabled={disabled}
              onClick={() => onChoose(choice)}
              className={`
                group flex w-full items-center gap-4 rounded-xl
                border p-4 text-left transition-all duration-200
                ${
                  isSelected
                    ? "border-[#e8a34a] bg-[#e8a34a]/10"
                    : "border-white/10 bg-[#1b2835] hover:border-[#e8a34a]/60 hover:bg-[#243545]"
                }
                ${disabled && !isSelected ? "cursor-not-allowed opacity-50" : ""}
              `}
            >
              {/* Option number */}
              <span
                className={`
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-lg border font-mono text-sm font-bold
                  ${
                    isSelected
                      ? "border-[#e8a34a] bg-[#e8a34a] text-[#101820]"
                      : "border-white/10 bg-white/5 text-[#9aa8b5]"
                  }
                `}
              >
                {isSelected ? <Check size={18} /> : `0${index + 1}`}
              </span>

              {/* Option text */}
              <span className="flex-1 text-sm font-medium leading-6 text-[#f2f3f4] sm:text-base">
                {choice.text}
              </span>

              {/* Right icon */}
              {isSelected ? (
                <CircleAlert size={18} className="shrink-0 text-[#e8a34a]" />
              ) : (
                <ChevronRight
                  size={19}
                  className="shrink-0 text-[#71808e] transition-transform group-hover:translate-x-1 group-hover:text-[#e8a34a]"
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
