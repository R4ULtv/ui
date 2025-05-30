"use client";

import * as React from "react";
import { StarIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

interface RatingGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  max?: number;
  className?: string;
  disabled?: boolean;
  size?: "default" | "sm" | "lg";
}

function RatingGroup({
  value = "0",
  onValueChange,
  max = 5,
  className,
  disabled = false,
  size = "default",
  ...props
}: RatingGroupProps) {
  const [hoveredValue, setHoveredValue] = React.useState<number | null>(null);
  const currentValue = React.useMemo(() => parseInt(value || "0", 10), [value]);
  const displayValue = hoveredValue ?? currentValue;

  const starIndices = React.useMemo(
    () => Array.from({ length: max }, (_, i) => i + 1),
    [max],
  );

  const handleMouseEnter = React.useCallback(
    (starValue: number) => {
      if (!disabled) {
        setHoveredValue(starValue);
      }
    },
    [disabled],
  );

  const handleMouseLeave = React.useCallback(() => {
    setHoveredValue(null);
  }, []);

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={onValueChange}
      size={size}
      className={cn("gap-0", className)}
      disabled={disabled}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {starIndices.map((starIndex) => {
        const starValue = starIndex.toString();
        const isActive = starIndex <= displayValue;
        return (
          <ToggleGroupItem
            key={starValue}
            value={starValue}
            className={cn(
              "relative border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent hover:scale-110 transition-transform ease-out focus-visible:ring-0",
              disabled && "pointer-events-none opacity-50",
            )}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            disabled={disabled}
          >
            <StarIcon
              className={cn(
                "transition-colors ease-out",
                size === "sm" && "size-4",
                size === "default" && "size-5",
                size === "lg" && "size-6",
                isActive
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/50 hover:text-yellow-400",
              )}
            />
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}

export { RatingGroup };
