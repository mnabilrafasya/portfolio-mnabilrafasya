"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { profile } from "@/data/profile";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  // track failed URLs instead of numeric indexes to avoid mismatch when
  // the visible list is filtered. Store full URL strings.
  const [failedUrls, setFailedUrls] = useState<string[]>([]);

  const gallery = Array.from(
    new Set([profile.photo, ...(profile.photos ?? [])].filter(Boolean)),
  ) as string[];

  const visiblePhotos = gallery.filter((url) => !failedUrls.includes(url));

  useEffect(() => {
    if (visiblePhotos.length === 0) {
      setActiveIndex(0);
      return;
    }

    if (activeIndex >= visiblePhotos.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, visiblePhotos.length]);

  const currentPhoto = visiblePhotos[activeIndex] ?? null;
  const nextPhoto =
    visiblePhotos.length > 1
      ? visiblePhotos[(activeIndex + 1) % visiblePhotos.length]
      : null;
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (visiblePhotos.length <= 1) return;
    if (isHovered) return; // pause while hovering

    const id = setInterval(() => {
      setIsLoaded(false);
      setActiveIndex((prev) => (prev + 1) % visiblePhotos.length);
    }, 7000);

    return () => clearInterval(id);
  }, [visiblePhotos.length, isHovered]);

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-2xl lg:max-w-6xl mx-auto px-6">
        <SectionLabel index="01" label="About" />

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-start">
          {/* Bio text */}
          <Reveal delay={100}>
            <h2 className="pr-6 text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
              I'm{" "}
              <span className="text-gradient-violet-cyan">{profile.name}</span>,
              a Computer Science undergraduate passionate about building
              software that solves real-world problems.
            </h2>

            <div className="space-y-4 text-sm lg:text-base text-text-secondary leading-relaxed">
              <p>
                I am currently pursuing a Bachelor's degree in Computer Science
                at{" "}
                <span className="text-text-primary font-medium">
                  Sriwijaya University
                </span>
                . My primary interests include{" "}
                <span className="text-text-primary font-medium">
                  full-stack web development
                </span>
                ,{" "}
                <span className="text-text-primary font-medium">
                  mobile app development
                </span>
                , and{" "}
                <span className="text-text-primary font-medium">
                  computer vision
                </span>
                .
              </p>

              <p>
                During my internship at{" "}
                <span className="text-text-primary font-medium">
                  Land Office of Palembang City (BPN)
                </span>
                , I developed a full-stack Public Complaint Monitoring System
                featuring a public tracking portal and an administrative
                dashboard to support complaint management workflows using more
                than{" "}
                <span className="text-text-primary font-medium">
                  600 historical complaint records{" "}
                </span>
                during system testing.
              </p>

              <p>
                Beyond academic projects, I have developed full-stack web
                applications, mobile applications, and AI-powered computer
                vision systems using technologies such as{" "}
                <span className="text-text-primary font-medium">React</span>,{" "}
                <span className="text-text-primary font-medium">Next.js</span>,{" "}
                <span className="text-text-primary font-medium">
                  Express.js
                </span>
                , <span className="text-text-primary font-medium">MySQL</span>,{" "}
                <span className="text-text-primary font-medium">PyTorch</span>,
                and{" "}
                <span className="text-text-primary font-medium">YOLOv8</span>.
              </p>
            </div>
          </Reveal>

          {/* Photo card */}
          <Reveal
            delay={200}
            className="relative lg:left-14 mx-auto md:mx-0 max-w-sm w-full"
          >
            <div
              className="relative aspect-4/5"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* 1. Gambar Dekoratif di Belakang (Ukurannya sekarang presisi mengikuti aspect-4/5) */}
              {nextPhoto && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (prev) => (prev + 1) % visiblePhotos.length,
                      )
                    }
                    aria-label="Lanjut ke foto berikutnya"
                    className="hidden sm:block absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden translate-x-6 -translate-y-6 rotate-6 -z-10 focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    {/* Desktop decorative preview (background) */}
                    <img
                      src={nextPhoto}
                      alt="Next preview"
                      className="w-full h-full object-cover"
                    />
                  </button>

                  {/* Mobile decorative preview: small clickable thumbnail top-right */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (prev) => (prev + 1) % visiblePhotos.length,
                      )
                    }
                    aria-label="Lanjut ke foto berikutnya"
                    title="Lanjut ke foto berikutnya"
                    className="sm:hidden absolute top-3 right-3 w-12 h-12 rounded-lg overflow-hidden z-20 focus:outline-none border border-white/10 bg-black/10"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <img
                      src={nextPhoto}
                      alt="Next preview"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </>
              )}

              {/* 2. Kartu Foto Utama */}
              <div className="w-full h-full glass-card rounded-3xl p-2 z-10 relative">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-bg-elevated flex items-center justify-center relative">
                  <AnimatePresence mode="wait">
                    {currentPhoto ? (
                      <motion.div
                        key={currentPhoto}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={currentPhoto}
                          alt={profile.name}
                          fill
                          unoptimized
                          priority
                          className="object-cover"
                          onError={() => {
                            setFailedUrls((prev) =>
                              prev.includes(currentPhoto)
                                ? prev
                                : [...prev, currentPhoto],
                            );
                          }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center gap-3 text-text-muted"
                      >
                        <div className="w-20 h-20 rounded-full border border-violet-500/25 bg-violet-500/5 flex items-center justify-center">
                          <User className="w-9 h-9 text-violet-400/60" />
                        </div>
                        <span className="font-mono text-[11px]">
                          Photo not available
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 3. Teks Status dan University Tepat di Bawah Card (Aman dari Tabrakan Posisi Absolute) */}
            <div className="mt-6 space-y-4 flex flex-col items-center md:items-start w-full">
              {/* Status Badge */}
              <div className="w-full max-w-[90%] md:max-w-full flex justify-center md:justify-start">
                <div className="glass-card rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-card-hover">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse shrink-0" />
                  <span className="font-mono text-[11px] text-text-secondary leading-tight">
                    {profile.status}
                  </span>
                </div>
              </div>

              {/* Info Chips */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="tag-pill text-text-secondary border-subtle bg-fill-subtle">
                  {profile.university}
                </span>
                <span className="tag-pill text-text-secondary border-subtle bg-fill-subtle">
                  {profile.location}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
