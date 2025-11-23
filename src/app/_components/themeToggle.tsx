"use client";
import { useState } from "react";
import { DarkIcon, LightIcon } from "@/assets/icons";

export function ToggleTheme() {
  const [theme, setTheme] = useState<string | undefined>();

  function handleTheme() {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }
  return (
    <>
      {theme !== "dark" ? (
        <div onClick={handleTheme} className="cursor-pointer">
          <LightIcon className="w-10 h-10 " color="yellow" />
        </div>
      ) : (
        <div onClick={handleTheme} className="cursor-pointer">
          <DarkIcon className="w-7 h-7" />
        </div>
      )}
    </>
  );
}
