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
    <section className="relative">
      <div className="mb-3 flex items-center gap-2">
        <MessageSquare size={15} className="text-[#e8a34a]" />
        <span className="text-[10px] font-black tracking-[0.2em] text-[#e8a34a]">
          SITUATION
        </span>
      </div>

      <h2 className="text-lg font-bold leading-7 text-white sm:text-xl">
        {description}
      </h2>

      <div className="mt-4 rounded-lg border-l-2 border-[#e8a34a] bg-white/[0.035] px-4 py-3">
        <p className="text-sm leading-7 text-[#b8c3cc]">{dialogue}</p>
      </div>
    </section>
  );
}
