"use client";
import { useState, useEffect } from "react";
import { DarkIcon, LightIcon } from "@/assets/icons";

export function ToggleTheme() {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function handleTheme() {
    const isDark = theme === "dark";

    if (isDark) {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }

  if (!theme) return null; // prevent flashing

  return (
    <>
      <div
        onClick={handleTheme}
        className="cursor-pointer transition-transform duration-300 transform hover:rotate-45"
      >
        {theme === "dark" ? (
          <LightIcon className="w-8 h-8" />
        ) : (
          <DarkIcon className="w-7 h-7" />
        )}
      </div>
    </>
  );
}
