import { AlertTriangle, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

import type { ScenarioFeedback } from "../types/game.types";

interface FeedbackPanelProps {
  feedback: ScenarioFeedback;
  onContinue: () => void;
}

const feedbackStyles = {
  success: {
    icon: CheckCircle2,
    color: "text-[#58b889]",
    border: "border-[#58b889]/30",
    background: "bg-[#58b889]/[0.07]",
    button: "bg-[#58b889] hover:bg-[#469d75]",
    label: "GOOD DECISION",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-[#e8a34a]",
    border: "border-[#e8a34a]/30",
    background: "bg-[#e8a34a]/[0.07]",
    button: "bg-[#e8a34a] hover:bg-[#d38f35]",
    label: "CAUTION",
  },
  danger: {
    icon: XCircle,
    color: "text-[#e05252]",
    border: "border-[#e05252]/30",
    background: "bg-[#e05252]/[0.07]",
    button: "bg-[#e05252] hover:bg-[#c94343]",
    label: "DANGEROUS DECISION",
  },
};

export default function FeedbackPanel({
  feedback,
  onContinue,
}: FeedbackPanelProps) {
  const style = feedbackStyles[feedback.type];
  const Icon = style.icon;

  return (
    <section
      className={`rounded-xl border ${style.border} ${style.background} p-4 sm:p-5`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/20 ${style.color}`}
        >
          <Icon size={22} />
        </div>

        <div className="min-w-0">
          <p
            className={`text-[9px] font-black tracking-[0.2em] ${style.color}`}
          >
            {style.label}
          </p>
          <h3 className="mt-1 text-lg font-black text-white">
            {feedback.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm font-semibold leading-6 text-[#f2f3f4]">
        {feedback.message}
      </p>

      <div className="mt-4 border-t border-white/10 pt-4">
        <p className="mb-2 text-[10px] font-black tracking-[0.15em] text-[#8996a3]">
          WHY DOES IT MATTER?
        </p>
        <p className="text-sm leading-7 text-[#b8c3cc]">
          {feedback.explanation}
        </p>
      </div>

      <button
        type="button"
        onClick={onContinue}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-black text-[#101820] transition ${style.button}`}
      >
        CONTINUE
        <ArrowRight size={17} />
      </button>
    </section>
  );
}
