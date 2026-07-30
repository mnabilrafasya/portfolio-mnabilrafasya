"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";
import { cn } from "@/lib/utils";
import { GalleryItem, ProjectCategory } from "@/types/project";

interface ProjectGallerySliderProps {
  title: string;
  category: ProjectCategory;
  gallery: GalleryItem[];
}

export default function ProjectGallerySlider({
  title,
  category,
  gallery,
}: ProjectGallerySliderProps) {
  const [index, setIndex] = useState(0);

  if (gallery.length === 0) return null;

  const current = gallery[index];
  const goTo = (i: number) => setIndex((i + gallery.length) % gallery.length);

  return (
    <div>
      <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-21/10 min-h-[260px] md:min-h-[360px] rounded-md overflow-hidden border border-text-primary/15">
        <ProjectThumbnail
          key={current.image}
          title={`${title} — ${current.label}`}
          category={category}
          image={current.image}
          video={current.video}
          showPlayHint
          alwaysShowControls
        />

        {gallery.length > 1 && (
          <>
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        <span className="absolute bottom-3 left-3 font-mono text-[11px] text-white/90 bg-black/60 px-2 py-1 rounded-sm">
          {current.label}
        </span>
      </div>

      {gallery.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {gallery.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setIndex(i)}
              aria-label={`Lihat ${item.label}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-6 bg-accent-terracotta"
                  : "w-1.5 bg-text-secondary/30 hover:bg-text-secondary/50",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
