import { MessageSquare } from "lucide-react";

interface DialogueBoxProps {
  description: string;
  dialogue: string;
}

export default function DialogueBox({
  description,
  dialogue,
}: DialogueBoxProps) {
  return (
    <section className="relative rounded-xl border border-white/10 bg-[#1b2835] p-5 sm:p-6">
      {/* Decorative line */}
      <div className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-[#e8a34a]" />

      <div className="pl-3">
        {/* Header */}
        <div className="mb-4 flex items-center gap-2">
          <MessageSquare size={17} className="text-[#e8a34a]" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9aa8b5]">
            Situation Briefing
          </span>
        </div>

        {/* Description */}
        <h3 className="mb-3 text-lg font-semibold text-[#f2f3f4] sm:text-xl">
          {description}
        </h3>

        {/* Dialogue */}
        <p className="text-sm leading-7 text-[#b8c3cc] sm:text-base">
          {dialogue}
        </p>
      </div>
    </section>
  );
}
