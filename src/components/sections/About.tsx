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
    if (isHovered) return;

    const id = setInterval(() => {
      setIsLoaded(false);
      setActiveIndex((prev) => (prev + 1) % visiblePhotos.length);
    }, 7000);

    return () => clearInterval(id);
  }, [visiblePhotos.length, isHovered]);

  return (
    <section id="about" className="py-28">
      <div className="max-w-2xl lg:max-w-6xl mx-auto px-6">
        <SectionLabel index="01" label="About" />

        <div className="grid md:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-start">
          {/* Bio text */}
          <Reveal delay={100}>
            <h2 className="pr-6 text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
              I'm{" "}
              <span className="text-accent-terracotta">{profile.name}</span>,
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
              {/* Decorative background photo — offset behind main card */}
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
                    className="hidden sm:block absolute top-0 left-0 w-full h-full rounded-md overflow-hidden translate-x-6 -translate-y-6 rotate-6 -z-10 focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <img
                      src={nextPhoto}
                      alt="Next preview"
                      className="w-full h-full object-cover"
                    />
                  </button>

                  {/* Mobile thumbnail */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (prev) => (prev + 1) % visiblePhotos.length,
                      )
                    }
                    aria-label="Lanjut ke foto berikutnya"
                    title="Lanjut ke foto berikutnya"
                    className="sm:hidden absolute top-3 right-3 w-12 h-12 rounded-sm overflow-hidden z-20 focus:outline-none border border-border"
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

              {/* Main photo card — DS card spec: md radius, 1px border at 15% */}
              <div className="w-full h-full rounded-md border border-text-primary/15 overflow-hidden z-10 relative">
                <AnimatePresence mode="wait">
                  {currentPhoto ? (
                    <motion.div
                      key={currentPhoto}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.01 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-text-secondary"
                    >
                      <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center">
                        <User className="w-9 h-9 text-text-secondary/40" />
                      </div>
                      <span className="font-mono text-[11px]">
                        Photo not available
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Status & info below card */}
            <div className="mt-6 space-y-4 flex flex-col items-center md:items-start w-full">
              {/* Status badge — DS Level 1 card: 1px border, no shadow */}
              <div className="w-full max-w-[90%] md:max-w-full flex justify-center md:justify-start">
                <div className="rounded border border-border px-4 py-2.5 flex items-center gap-2">
                  {/* Static dot — no animate-glow-pulse (deleted animation) */}
                  <span className="w-2 h-2 rounded-full bg-accent-teal shrink-0" />
                  <span className="font-mono text-[11px] text-text-secondary leading-tight">
                    {profile.status}
                  </span>
                </div>
              </div>

              {/* Info chips — DS §Tags/Chips: full radius, teal, mono uppercase */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="tag-pill font-mono uppercase tracking-widest text-[10px] text-accent-teal border-accent-teal/20 bg-accent-teal/5">
                  {profile.university}
                </span>
                <span className="tag-pill font-mono uppercase tracking-widest text-[10px] text-accent-teal border-accent-teal/20 bg-accent-teal/5">
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
