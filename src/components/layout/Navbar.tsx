"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/projects", label: "All Projects" },
  { href: "/#contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/#.*$/, "")) && href !== "/";
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-background/95 border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-sm border border-accent-terracotta/40 flex items-center justify-center group-hover:border-accent-terracotta transition-colors duration-150">
            <Terminal className="w-3.5 h-3.5 text-accent-terracotta" />
          </div>
          <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">
            mnabilrafasya
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    // Plain text — underline-based active/hover state, Terracotta accent
                    "relative text-sm font-medium transition-colors duration-150 pb-0.5",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent-terracotta after:transition-all after:duration-150",
                    active
                      ? "text-accent-terracotta after:w-full"
                      : "text-text-secondary hover:text-text-primary after:w-0 hover:after:w-full",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors duration-150"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — CSS max-h transition, no spring/bounce per DS */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-border bg-background transition-all duration-200",
          mobileOpen ? "max-h-96" : "max-h-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors duration-150",
                  active
                    ? "text-accent-terracotta"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {/* Mobile: left-border indicator instead of underline */}
                <span
                  className={cn(
                    "border-l-2 pl-3 transition-colors duration-150",
                    active ? "border-accent-terracotta" : "border-transparent",
                  )}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
