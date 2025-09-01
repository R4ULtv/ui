"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

const ThemeSwitch = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn("size-8 group", className)}
      aria-label="Toggle theme between light and dark mode"
      onClick={handleToggleTheme}
      {...props}
    >
      <MoonIcon
        className="hidden dark:block fill-transparent group-hover:fill-foreground group-hover:rotate-12 group-hover:scale-110 transition-all duration-200 ease-out"
        aria-hidden="true"
      />
      <SunIcon
        className="dark:hidden fill-transparent group-hover:fill-foreground group-hover:rotate-12 group-hover:scale-110 transition-all duration-200 ease-out"
        aria-hidden="true"
      />
    </Button>
  );
};

export default ThemeSwitch;
