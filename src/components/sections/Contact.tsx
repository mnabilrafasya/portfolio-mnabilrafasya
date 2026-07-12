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
    <section id="contact" className="py-28 relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionLabel index="04" label="Contact" />

        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Let's <span className="text-gradient-violet-cyan">Connect</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10 text-sm lg:text-base">
            I'm currently open to internship opportunities, software engineering
            roles, research collaborations, and exciting development projects.
            If you'd like to discuss technology, artificial intelligence, or
            potential collaboration, feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <button
            onClick={handleCopy}
            className="text-sm lg:text-base group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-200 shadow-glow-violet"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
            {copied ? (
              <Check className="w-4 h-4 text-emerald-300" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </Reveal>

        <Reveal delay={250}>
          <div className="flex items-center justify-center gap-6 mt-10">
            <span className="text-text-muted text-sm">Or here:</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-violet-300 transition-colors text-sm"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-cyan-300 transition-colors text-sm"
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
