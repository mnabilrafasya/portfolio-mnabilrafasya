"use client";

import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API tidak tersedia (mis. http non-secure) — diamkan, email tetap terlihat.
    }
  };

  return (
    <section id="contact" className="py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionLabel index="04" label="Contact" />

        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Let's <span className="text-accent-terracotta">Connect</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10 text-sm lg:text-base">
            I'm currently open to internship opportunities, software engineering
            roles, research collaborations, and exciting development projects.
            If you'd like to discuss technology, artificial intelligence, or
            potential collaboration, feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={150}>
          {/*
            Email copy button — uses terracotta fill but this is NOT a primary CTA
            (no hard-offset). It's an action button using solid fill per DS
            §Buttons — Primary spec (solid terracotta, DEFAULT radius 8px).
          */}
          <button
            onClick={handleCopy}
            className="text-sm lg:text-base group inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-accent-terracotta hover:bg-accent-terracotta/90 text-white font-medium transition-colors duration-150"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </Reveal>

        <Reveal delay={250}>
          <div className="flex items-center justify-center gap-6 mt-10">
            <span className="text-text-secondary text-sm">Or here:</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-terracotta transition-colors duration-150 text-sm"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-teal transition-colors duration-150 text-sm"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
