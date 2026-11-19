import { MapPin } from "lucide-react";

interface SceneViewProps {
  title: string;
  location: string;
  image?: string;
}

export default function SceneView({ title, location, image }: SceneViewProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#17232e]">
      {image ? (
        <img
          key={image}
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#293c4c] to-[#101820]" />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#080e14]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

      <div className="absolute left-5 top-16 z-10 flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-3 py-2 backdrop-blur-md">
        <MapPin size={14} className="text-[#e8a34a]" />
        <span className="text-xs font-semibold text-white">{location}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7">
        <p className="mb-2 text-[10px] font-black tracking-[0.25em] text-[#e8a34a]">
          CURRENT LOCATION
        </p>
        <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
