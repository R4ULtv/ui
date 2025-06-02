"use client";

import * as React from "react";
import { StarIcon, HeartIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

interface RatingGroupAdvancedProps {
  value?: string;
  onValueChange?: (value: string) => void;
  max?: number;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  size?: "sm" | "default" | "lg";
  variant?: "star" | "heart";
  allowHalf?: boolean;
  emptyIcon?: React.ComponentType<{ className?: string }>;
  filledIcon?: React.ComponentType<{ className?: string }>;
  colors?: {
    filled?: string;
    empty?: string;
    hover?: string;
  };
  allowClear?: boolean;
}

const defaultColors = {
  filled: "fill-yellow-400 text-yellow-400",
  empty: "text-muted-foreground/50",
  hover: "text-yellow-300",
};

const iconVariants = {
  star: StarIcon,
  heart: HeartIcon,
};

function RatingGroupAdvanced({
  value = "0",
  onValueChange,
  max = 5,
  className,
  disabled = false,
  readOnly = false,
  size = "default",
  variant = "star",
  allowHalf = false,
  emptyIcon,
  filledIcon,
  colors = defaultColors,
  allowClear = false,
  ...props
}: RatingGroupAdvancedProps) {
  const [hoveredValue, setHoveredValue] = React.useState<number | null>(null);

  const currentValue = React.useMemo(() => parseFloat(value || "0"), [value]);
  const displayValue = hoveredValue ?? currentValue;

  const EmptyIcon = emptyIcon || iconVariants[variant];
  const FilledIcon = filledIcon || iconVariants[variant];

  const indices = React.useMemo(
    () => Array.from({ length: max }, (_, i) => i + 1),
    [max],
  );

  const handleMouseEnter = React.useCallback(
    (starValue: number, isHalf?: boolean) => {
      if (!disabled && !readOnly) {
        const finalValue = allowHalf && isHalf ? starValue - 0.5 : starValue;
        setHoveredValue(finalValue);
      }
    },
    [disabled, readOnly, allowHalf],
  );

  const handleMouseLeave = React.useCallback(() => {
    setHoveredValue(null);
  }, []);

  const handleClick = React.useCallback(
    (starValue: number, isHalf?: boolean) => {
      if (!disabled && !readOnly && onValueChange) {
        const finalValue = allowHalf && isHalf ? starValue - 0.5 : starValue;
        const newValue =
          allowClear && currentValue === finalValue
            ? "0"
            : finalValue.toString();
        onValueChange(newValue);
      }
    },
    [disabled, readOnly, onValueChange, allowHalf, allowClear, currentValue],
  );

  const getIconState = (index: number) => {
    const value = displayValue;
    if (value >= index) return "filled";
    if (allowHalf && value >= index - 0.5) return "half";
    return "empty";
  };

  const sizeClasses = {
    sm: "size-4",
    default: "size-5",
    lg: "size-6",
  };

  return (
    <div className="relative">
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
        {indices.map((index) => {
          const starValue = index.toString();
          const iconState = getIconState(index);

          return (
            <div key={starValue} className="relative">
              <ToggleGroupItem
                value={starValue}
                aria-label={`${index} rating`}
                className={cn(
                  "relative border-0 bg-transparent p-0 hover:bg-transparent data-[state=on]:bg-transparent focus-visible:ring-0",
                  "hover:scale-110 focus-visible:scale-110 transition-transform ease-out",
                  (disabled || readOnly) && "pointer-events-none opacity-50",
                )}
                onClick={() => handleClick(index)}
                disabled={disabled || readOnly}
              >
                {allowHalf ? (
                  <div className="relative">
                    <div
                      className="absolute inset-0 w-1/2 z-10"
                      onMouseEnter={() => handleMouseEnter(index, true)}
                    />
                    <div
                      className="absolute inset-0 left-1/2 w-1/2 z-10"
                      onMouseEnter={() => handleMouseEnter(index, false)}
                    />
                    <div className="relative">
                      {iconState === "half" ? (
                        <div className="relative">
                          <EmptyIcon
                            className={cn(
                              "transition-colors ease-out",
                              sizeClasses[size],
                              colors.empty,
                            )}
                          />
                          <div className="absolute inset-0 overflow-hidden w-1/2">
                            <FilledIcon
                              className={cn(
                                "transition-colors ease-out",
                                sizeClasses[size],
                                colors.filled,
                              )}
                            />
                          </div>
                        </div>
                      ) : (
                        <FilledIcon
                          className={cn(
                            "transition-colors ease-out",
                            sizeClasses[size],
                            iconState === "filled"
                              ? colors.filled
                              : colors.empty,
                          )}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div onMouseEnter={() => handleMouseEnter(index)}>
                    <FilledIcon
                      className={cn(
                        "transition-colors ease-out",
                        sizeClasses[size],
                        iconState === "filled" ? colors.filled : colors.empty,
                      )}
                    />
                  </div>
                )}
              </ToggleGroupItem>
            </div>
          );
        })}
      </ToggleGroup>
    </div>
  );
}

export { RatingGroupAdvanced };
