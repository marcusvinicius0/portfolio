"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "lucide-react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex space-x-5">
      <button onClick={() => setTheme("light")} title={theme === "light" ? "" : "Selecionar modo claro"}>
        <SunIcon className={`${theme === "light" ? 'w-5 h-5 text-gray-600' : 'w-5 h-5'}`} />
      </button>
      <button onClick={() => setTheme("dark")} title={theme !== "light" ? "" : "Selecionar modo escuro"}>
        <MoonIcon className="w-5 h-5 dark:text-gray-600"/>
      </button>
    </div>
  );
}
