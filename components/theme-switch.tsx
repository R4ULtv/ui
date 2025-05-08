"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect, useCallback } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-8 rounded-md"></div>;
  }

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className="size-8"
      aria-label="Change Theme"
      onClick={toggleTheme}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
