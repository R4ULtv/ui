"use client";

import * as React from "react";
import { icons } from "lucide-react";

import { experimental_VGrid as VGrid } from "virtua";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

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
      <div className="flex items-center justify-center size-full">
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
      </div>
    );
  },
);
IconItem.displayName = "IconItem";

const IconPicker = React.memo(
  ({
    setSelectedIcon,
    selectedIcon,
    className,
    ...props
  }: {
    setSelectedIcon?: (iconName: string) => void;
    selectedIcon?: string | null;
  } & React.ComponentProps<"div">) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const debouncedSearchQuery = useDebounce(searchQuery, 200);

    const iconsMap = React.useMemo(() => Object.keys(icons), []);

    const filteredIcons = React.useMemo(() => {
      if (!debouncedSearchQuery.trim()) {
        return iconsMap;
      }
      return iconsMap.filter((iconName) =>
        iconName.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
      );
    }, [debouncedSearchQuery, iconsMap]);

    const handleSearchChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    const ITEMS_PER_ROW = 9;
    const ITEM_SIZE = 28; // size-7 corresponds to 28px

    const gridKey = React.useMemo(
      () => `icon-grid-${filteredIcons.length}`,
      [filteredIcons.length],
    );

    const totalRows = Math.ceil(filteredIcons.length / ITEMS_PER_ROW);

    return (
      <div
        className={cn("w-72 bg-popover rounded-lg border shadow-md", className)}
        aria-label="Icon Picker"
        {...props}
      >
        <div className="relative px-2 pt-2">
          <Input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className="border-none focus-visible:ring-2 font-semibold px-2.5 py-2"
            placeholder="Search..."
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search icons"
          />
        </div>
        <div className="h-80 p-1.5" aria-label="Available icons">
          <VGrid
            key={gridKey}
            row={totalRows}
            col={ITEMS_PER_ROW}
            cellWidth={ITEM_SIZE}
            cellHeight={ITEM_SIZE}
          >
            {({ rowIndex, colIndex }) => {
              const index = rowIndex * ITEMS_PER_ROW + colIndex;
              if (index >= filteredIcons.length) return null;

              return (
                <IconItem
                  key={filteredIcons[index]}
                  iconName={filteredIcons[index]}
                  setSelectedIcon={setSelectedIcon}
                  selectedIcon={selectedIcon}
                />
              );
            }}
          </VGrid>
        </div>
      </div>
    );
  },
);
IconPicker.displayName = "IconPicker";

export default IconPicker;
