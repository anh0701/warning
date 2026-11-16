import { MapPin } from "lucide-react";

interface SceneViewProps {
  title: string;
  location: string;
  image?: string;
}

export default function SceneView({ title, location, image }: SceneViewProps) {
  return (
    <section className="relative isolate h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#1b2835] sm:h-[360px] lg:h-[420px]">
      {/* Background image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Fallback background */}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#293c4c] via-[#1b2835] to-[#101820]" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/20 to-black/10" />

      {/* Location */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-sm">
        <MapPin size={15} className="text-[#e8a34a]" />

        <span className="text-xs font-medium tracking-wide text-white/90">
          {location}
        </span>
      </div>

      {/* Scene title */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e8a34a]">
          Current Situation
        </p>

        <h2 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
    </section>
  );
}
