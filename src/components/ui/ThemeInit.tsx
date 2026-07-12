"use client";

import { useEffect } from "react";

const themeInitScript = ` (function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})()`;

export default function ThemeInit() {
  useEffect(() => {
    try {
      // run the same logic as the previous inline script on client mount
      // keep it synchronous to avoid flashes as much as possible
      // eslint-disable-next-line no-eval
      eval(themeInitScript);
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
