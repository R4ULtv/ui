"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeSwitch = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  // Update checked state when theme changes
  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const handleCheckedChange = useCallback(
    (isChecked: boolean) => {
      setChecked(isChecked);
      const newTheme = isChecked ? "dark" : "light";
      setTheme(newTheme);
    },
    [setTheme],
  );

  return (
    <div
      className={cn("relative flex items-center h-9 group", className)}
      {...props}
    >
      <Switch
        checked={checked}
        onCheckedChange={handleCheckedChange}
        className="peer data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-[34px]"
      />
      <span className="peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center">
        <SunIcon
          size={16}
          aria-hidden="true"
          className={cn(
            !checked &&
              "fill-transparent group-hover:fill-foreground group-hover:rotate-12 group-hover:scale-110 transition-all duration-200 ease-out",
          )}
        />
      </span>
      <span className="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center">
        <MoonIcon
          size={16}
          aria-hidden="true"
          className={cn(
            checked &&
              "fill-transparent group-hover:fill-foreground group-hover:rotate-12 group-hover:scale-110 transition-all duration-200 ease-out",
          )}
        />
      </span>
    </div>
  );
};

export default ThemeSwitch;
