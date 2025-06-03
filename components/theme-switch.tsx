"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export default function ThemeSwitch() {
  const { setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className="size-8 group"
      aria-label="Change Theme"
      onClick={toggleTheme}
    >
      <MoonIcon
        className="hidden dark:block fill-transparent group-hover:fill-foreground group-hover:scale-110 transition-all duration-200 ease-out"
        aria-hidden="true"
      />
      <SunIcon
        className="dark:hidden fill-transparent group-hover:fill-foreground group-hover:scale-110 transition-all duration-200 ease-out"
        aria-hidden="true"
      />
    </Button>
  );
}
