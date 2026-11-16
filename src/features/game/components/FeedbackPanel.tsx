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
    background: "bg-[#58b889]/10",
    button: "bg-[#58b889] hover:bg-[#469d75]",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-[#e8a34a]",
    border: "border-[#e8a34a]/30",
    background: "bg-[#e8a34a]/10",
    button: "bg-[#e8a34a] hover:bg-[#d38f35]",
  },
  danger: {
    icon: XCircle,
    color: "text-[#e05252]",
    border: "border-[#e05252]/30",
    background: "bg-[#e05252]/10",
    button: "bg-[#e05252] hover:bg-[#c94343]",
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
      className={`rounded-xl border ${style.border} ${style.background} p-5 sm:p-6`}
    >
      {/* Feedback heading */}
      <div className="mb-4 flex items-center gap-3">
        <Icon size={25} className={style.color} />

        <h3 className={`text-lg font-bold ${style.color}`}>{feedback.title}</h3>
      </div>

      {/* Message */}
      <p className="mb-3 text-sm font-medium leading-6 text-[#f2f3f4]">
        {feedback.message}
      </p>

      {/* Explanation */}
      <div className="border-t border-white/10 pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#9aa8b5]">
          Why does it matter?
        </p>

        <p className="text-sm leading-7 text-[#b8c3cc]">
          {feedback.explanation}
        </p>
      </div>

      {/* Continue button */}
      <button
        type="button"
        onClick={onContinue}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-[#101820] transition-colors ${style.button}`}
      >
        Continue
        <ArrowRight size={17} />
      </button>
    </section>
  );
}
