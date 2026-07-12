"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn, categoryColor } from "@/lib/utils";
import { ProjectCategory } from "@/types/project";

interface ProjectThumbnailProps {
  title: string;
  category: ProjectCategory;
  image?: string;
  /** Video singkat (idealnya 5–10 detik), diputar otomatis saat di-hover. */
  video?: string;
  className?: string;
  /** Putar video langsung tanpa perlu hover (dipakai di slider galeri detail). */
  alwaysPlay?: boolean;
  /** Tampilkan ikon play kecil sebagai hint bahwa ada video preview. */
  showPlayHint?: boolean;
}

export default function ProjectThumbnail({
  title,
  category,
  image,
  video,
  className,
  alwaysPlay = false,
  showPlayHint = false,
}: ProjectThumbnailProps) {
  const [hovered, setHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasPlayableVideo = Boolean(video) && !videoFailed;
  const showVideo = hasPlayableVideo && (hovered || alwaysPlay);
  // Tidak ada path gambar sama sekali → langsung placeholder, tanpa percobaan fetch apa pun.
  const usePlaceholder = !image || imgFailed;
  const initial = title.trim().charAt(0).toUpperCase() || "?";

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (showVideo) {
      el.currentTime = 0;
      el.play().catch(() => {
        // Browser menolak autoplay (jarang terjadi karena sudah muted) — biarkan diam, thumbnail tetap tampil.
      });
    } else {
      el.pause();
    }
  }, [showVideo]);

  return (
    <div
      className={cn(
        "relative w-full h-full min-h-0 overflow-hidden bg-bg-elevated",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {usePlaceholder ? (
        // Placeholder berupa elemen biasa (bukan gambar) — otomatis ikut tema
        // terang/gelap lewat token CSS, tanpa percobaan fetch file apa pun.
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-fill-subtle bg-grid-pattern transition-opacity duration-300",
            showVideo ? "opacity-0" : "opacity-100",
          )}
        >
          <div
            className={cn(
              "w-14 h-14 rounded-full border flex items-center justify-center font-mono text-lg",
              categoryColor[category],
            )}
          >
            {initial}
          </div>
          <span className="font-mono text-[11px] text-text-muted tracking-wide">
            Preview not available
          </span>
        </div>
      ) : (
        <Image
          src={image as string}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
          className={cn(
            "w-full h-full object-contain object-center transition-opacity duration-300",
            showVideo ? "opacity-0" : "opacity-100",
          )}
          onError={() => setImgFailed(true)}
        />
      )}

      {hasPlayableVideo && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          onError={() => setVideoFailed(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-300",
            showVideo ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        />
      )}

      {showPlayHint && hasPlayableVideo && !showVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Play className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      )}
    </div>
  );
}
