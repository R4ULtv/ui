"use client";

import * as React from "react";
import { icons, PaletteIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const IconItem = React.memo(
  ({
    iconName,
    setSelectedIcon,
    selectedIcon,
  }: {
    iconName: string;
    setSelectedIcon?: (iconName: string) => void;
    selectedIcon?: string | null;
  }) => {
    const Icon = icons[iconName as keyof typeof icons];

    const handleClick = React.useCallback(() => {
      setSelectedIcon?.(iconName);
    }, [iconName, setSelectedIcon]);

    return (
      <button
        className={cn(
          "flex items-center justify-center size-7 rounded-md cursor-pointer text-popover-foreground/70 hover:bg-muted hover:text-popover-foreground transition-colors",
          selectedIcon === iconName &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        )}
        onClick={handleClick}
        title={iconName}
        aria-label={`Select ${iconName} icon`}
        aria-pressed={selectedIcon === iconName}
      >
        <Icon size={16} />
      </button>
    );
  },
);

IconItem.displayName = "IconItem";

const IconPicker = React.memo(
  ({
    setSelectedIcon,
    selectedIcon,
    setSelectedColor,
    selectedColor,
    className,
    ...props
  }: {
    setSelectedIcon?: (iconName: string) => void;
    selectedIcon?: string | null;
    selectedColor?: string;
    setSelectedColor?: (color: string) => void;
  } & React.ComponentProps<"div">) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const debouncedSearchQuery = useDebounce(searchQuery, 200);

    const iconsMap = React.useMemo(() => Object.keys(icons), []);

    const filteredIcons = React.useMemo(() => {
      if (!debouncedSearchQuery.trim()) return iconsMap;
      return iconsMap.filter((iconName) =>
        iconName.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
      );
    }, [iconsMap, debouncedSearchQuery]);

    const handleSearchChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    return (
      <div
        className={cn(
          "max-w-72 bg-popover rounded-lg border shadow-md",
          className,
        )}
        aria-label="Icon picker"
        {...props}
      >
        <div className="mt-1.5 mx-1.5 flex items-center gap-1.5 min-w-0 md:min-w-[252px]">
          <Input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className="border-none focus-visible:ring-2 font-semibold px-2.5 py-2 w-full"
            placeholder="Search..."
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search icons"
          />
          {selectedIcon && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none focus-visible:ring-2 relative"
                  style={{ backgroundColor: selectedColor }}
                >
                  <PaletteIcon size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-min">
                <RadioGroup
                  className="flex gap-1.5"
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                >
                  <RadioGroupItem
                    value="oklch(62.3% 0.214 259.815)"
                    aria-label="blue"
                    className="size-6 !border-blue-500 !bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
                  />
                  <RadioGroupItem
                    value="oklch(58.5% 0.233 277.117)"
                    aria-label="indigo"
                    className="size-6 !border-indigo-500 !bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
                  />
                  <RadioGroupItem
                    value="oklch(65.6% 0.241 354.308)"
                    aria-label="pink"
                    className="size-6 !border-pink-500 !bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
                  />
                  <RadioGroupItem
                    value="oklch(63.7% 0.237 25.331)"
                    aria-label="red"
                    className="size-6 !border-red-500 !bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
                  />
                  <RadioGroupItem
                    value="oklch(70.5% 0.213 47.604)"
                    aria-label="orange"
                    className="size-6 !border-orange-500 !bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
                  />
                  <RadioGroupItem
                    value="oklch(76.9% 0.188 70.08)"
                    aria-label="amber"
                    className="size-6 !border-amber-500 !bg-amber-500 shadow-none data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500"
                  />
                  <RadioGroupItem
                    value="oklch(69.6% 0.17 162.48)"
                    aria-label="emerald"
                    className="size-6 !border-emerald-500 !bg-emerald-500 shadow-none data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
                  />
                  <RadioGroupItem
                    value="oklch(71.48% 0.1257 215.22)"
                    aria-label="teal"
                    className="size-6 !border-teal-500 !bg-teal-500 shadow-none data-[state=checked]:border-teal-500 data-[state=checked]:bg-teal-500"
                  />
                </RadioGroup>
              </PopoverContent>
            </Popover>
          )}
        </div>
        <ScrollArea className="h-60 md:h-80 p-1.5">
          <div
            className="grid grid-cols-7 md:grid-cols-9"
            aria-label="Available icons"
          >
            {filteredIcons.map((iconName) => (
              <IconItem
                key={iconName}
                iconName={iconName}
                setSelectedIcon={setSelectedIcon}
                selectedIcon={selectedIcon}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  },
);

IconPicker.displayName = "IconPicker";

export default IconPicker;
