"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
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
  /** Selalu tampilkan kontrol play/pause (untuk detail page). Di mobile selalu tampil, di desktop hanya jika true. */
  alwaysShowControls?: boolean;
}

export default function ProjectThumbnail({
  title,
  category,
  image,
  video,
  className,
  alwaysPlay = false,
  showPlayHint = false,
  alwaysShowControls = false,
}: ProjectThumbnailProps) {
  const [hovered, setHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [manuallyPlaying, setManuallyPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect mobile on client side
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1025);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hasPlayableVideo = Boolean(video) && !videoFailed;
  // Video visible jika: hover OR auto-play mode OR manual play (mobile/detail page)
  // isPlaying TIDAK dimasukkan ke sini, agar hover auto-play stop saat mouse leave
  const showVideo =
    hasPlayableVideo &&
    (hovered ||
      alwaysPlay ||
      (isMobile && manuallyPlaying) ||
      (alwaysShowControls && !isMobile && manuallyPlaying));
  // Tidak ada path gambar sama sekali → langsung placeholder, tanpa percobaan fetch apa pun.
  const usePlaceholder = !image || imgFailed;
  const initial = title.trim().charAt(0).toUpperCase() || "?";

  // Tentukan apakah tombol kontrol harus ditampilkan
  // Mobile: selalu tampil jika ada video
  // Desktop detail page: hanya saat hover
  const shouldShowControls =
    hasPlayableVideo && (isMobile || (alwaysShowControls && hovered));

  // Di detail page, icon visible hanya saat hover (tidak ganggu saat manual playing di luar thumbnail)
  const showPauseIcon = alwaysShowControls && hovered && isPlaying;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (showVideo) {
      // Reset currentTime hanya saat auto-play dari hover/alwaysPlay, bukan manual playing
      // Cek: jika isPlaying false tapi showVideo true, berarti ini dari hover/alwaysPlay
      if (!isPlaying) {
        el.currentTime = 0;
      }
      el.play().catch(() => {
        // Browser menolak autoplay (jarang terjadi karena sudah muted) — biarkan diam, thumbnail tetap tampil.
      });
    } else {
      el.pause();
    }
  }, [showVideo]);

  // Sync isPlaying state dengan actual video playback
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const updatePlayState = () => {
      setIsPlaying(!el.paused);
    };

    el.addEventListener("play", updatePlayState);
    el.addEventListener("pause", updatePlayState);

    return () => {
      el.removeEventListener("play", updatePlayState);
      el.removeEventListener("pause", updatePlayState);
    };
  }, []);

  const togglePlayVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const el = videoRef.current;
    if (!el) return;

    // Check actual video playback state, bukan state isPlaying
    if (el.paused) {
      // Manual play: jangan reset currentTime, lanjutkan dari di mana berhenti
      el.play().catch(() => {
        console.error("Failed to play video");
      });
      setManuallyPlaying(true); // User sedang manual playing
    } else {
      el.pause();
      setManuallyPlaying(false); // User berhenti manual playing
    }
  };

  return (
    <div
      className={cn(
        "relative w-full h-full min-h-0 overflow-hidden bg-bg-elevated",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
      }}
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

      {/* Video Player Controls - tampil di mobile atau di detail page (alwaysShowControls=true) */}
      {shouldShowControls && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlayVideo}
            className={cn(
              "flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 border",
              isPlaying || showPauseIcon
                ? "w-12 h-12 bg-black/60 border-white/30 hover:bg-black/70"
                : "w-14 h-14 bg-black/50 border-white/20 hover:bg-black/60",
            )}
            aria-label={
              isPlaying || showPauseIcon ? "Pause video" : "Play video"
            }
          >
            {isPlaying || showPauseIcon ? (
              <Pause className="w-6 h-6 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
