"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile, heroTechStack } from "@/data/profile";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-100"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Hero glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124,58,237,0.08), transparent 70%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-20 md:pt-0 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-glow-pulse" />
          <span className="font-mono text-xs text-violet-300">
            {profile.role} · {profile.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-text-primary">Building </span>
          <span className="text-gradient-violet-cyan">
            full-stack applications
          </span>
          <br />
          <span className="text-text-primary">and </span>
          <span className="text-gradient-violet-cyan">
            AI-powered solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-text-secondary text-base md:text-xl max-w-4xl mx-auto leading-relaxed mb-10"
        >
          Computer Science undergraduate at{" "}
          <span className="text-text-primary font-medium">
            Sriwijaya University
          </span>{" "}
          with hands-on experience in{" "}
          <span className="text-text-primary font-medium">
            full-stack software development
          </span>{" "}
          and{" "}
          <span className="text-text-primary font-medium">
            computer vision.{" "}
          </span>{" "}
          Passionate about building practical software solutions ranging from
          public service platforms and organizational websites to AI-powered
          image analysis applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all duration-200 shadow-glow-violet hover:shadow-lg"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href={profile.cvFile}
            download
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-violet-500/25 bg-violet-500/5 hover:bg-violet-500/10 text-text-primary text-sm font-medium transition-all duration-200"
          >
            <Download className="w-4 h-4 text-violet-400" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mt-14"
        >
          {heroTechStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md border border-subtle bg-fill-subtle text-text-muted hover:text-text-secondary hover:border-violet-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-text-muted">scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-violet-500/40 to-transparent" />
      </motion.div>
    </section>
  );
}
