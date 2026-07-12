"use client";

import { Sun, Moon } from "lucide-react";

/**
 * Sengaja TIDAK pakai React context/state untuk tema. Atribut data-theme di <html>
 * sudah diset sebelum paint pertama oleh inline script (lihat layout.tsx), dan kedua
 * ikon di bawah selalu ada di DOM — CSS di globals.css yang menentukan mana yang
 * terlihat berdasarkan data-theme milik ancestor. Pendekatan ini menghindari resiko
 * hydration mismatch dan kedipan ikon yang biasa terjadi pada toggle berbasis state.
 */
export default function ThemeToggle() {
  const handleToggle = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage tidak tersedia (mode private/disabled) — tema tetap berfungsi untuk sesi ini.
    }
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Ganti tema terang/gelap"
      className="relative w-8 h-8 rounded-lg border border-subtle bg-fill-subtle hover:bg-fill-subtle-hover flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
    >
      <Sun className="theme-icon-sun w-4 h-4" />
      <Moon className="theme-icon-moon w-4 h-4" />
    </button>
  );
}