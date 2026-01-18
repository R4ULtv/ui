"use client";

import * as React from "react";
import { icons, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const IconItem = React.memo(
  ({
    iconName,
    toggleSelectedIcon,
    selectedIcons,
  }: {
    iconName: string;
    toggleSelectedIcon?: (iconName: string) => void;
    selectedIcons?: string[];
  }) => {
    const Icon = icons[iconName as keyof typeof icons];
    const isSelected = selectedIcons?.includes(iconName);

    const handleClick = React.useCallback(() => {
      toggleSelectedIcon?.(iconName);
    }, [iconName, toggleSelectedIcon]);

    return (
      <button
        className={cn(
          "flex items-center justify-center size-7 rounded-md cursor-pointer text-popover-foreground/70 hover:bg-muted hover:text-popover-foreground transition-colors",
          isSelected &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        )}
        onClick={handleClick}
        title={iconName}
        aria-label={`${isSelected ? "Deselect" : "Select"} ${iconName} icon`}
        aria-pressed={isSelected}
      >
        <Icon size={16} />
      </button>
    );
  },
);
IconItem.displayName = "IconItem";

const IconPicker = React.memo(
  ({
    setSelectedIcons,
    selectedIcons = [],
    className,
    ...props
  }: {
    setSelectedIcons?: (iconNames: string[]) => void;
    selectedIcons?: string[];
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

    const selectedIconsRef = React.useRef(selectedIcons);
    React.useEffect(() => {
      selectedIconsRef.current = selectedIcons;
    }, [selectedIcons]);

    const toggleSelectedIcon = React.useCallback(
      (iconName: string) => {
        if (!setSelectedIcons) return;
        const current = selectedIconsRef.current;

        setSelectedIcons(
          current.includes(iconName)
            ? current.filter((name) => name !== iconName)
            : [...current, iconName],
        );
      },
      [setSelectedIcons],
    );

    const handleSearchChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    const handleClearSelection = React.useCallback(() => {
      setSelectedIcons?.([]);
    }, [setSelectedIcons]);

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
            placeholder={
              selectedIcons.length > 0
                ? `Selected ${selectedIcons.length} icon${selectedIcons.length > 1 ? "s" : ""}...`
                : "Select an icon..."
            }
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search icons"
          />
          {selectedIcons.length > 0 && (
            <Button
              onClick={() => handleClearSelection()}
              variant="outline"
              size="icon"
              className="border-none focus-visible:ring-2"
            >
              <XIcon />
            </Button>
          )}
        </div>

        <ScrollArea className="h-60 md:h-80 p-1.5">
          <div
            className="grid grid-cols-7 md:grid-cols-9"
            aria-label="Available icons"
            aria-multiselectable="true"
          >
            {filteredIcons.map((iconName) => (
              <IconItem
                key={iconName}
                iconName={iconName}
                toggleSelectedIcon={toggleSelectedIcon}
                selectedIcons={selectedIcons}
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
