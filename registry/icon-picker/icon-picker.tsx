"use client";

import { icons } from "lucide-react";
import { useState, useMemo, useCallback, memo } from "react";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const IconItem = memo(
  ({
    iconName,
    onSelectIcon,
  }: {
    iconName: string;
    onSelectIcon?: (iconName: string) => void;
  }) => {
    const Icon = icons[iconName as keyof typeof icons];

    const handleClick = useCallback(() => {
      onSelectIcon?.(iconName);
    }, [iconName, onSelectIcon]);

    return (
      <button
        className="flex items-center justify-center size-7 rounded-md cursor-pointer text-popover-foreground/75 hover:bg-muted hover:text-primary"
        onClick={handleClick}
        title={iconName}
      >
        <Icon size={16} />
      </button>
    );
  },
);

IconItem.displayName = "IconItem";

const IconPicker = memo(
  ({ onSelectIcon }: { onSelectIcon?: (iconName: string) => void }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const iconsMap = useMemo(() => Object.keys(icons), []);

    const filteredIcons = useMemo(() => {
      if (!searchQuery.trim()) return iconsMap;
      return iconsMap.filter((iconName) =>
        iconName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }, [iconsMap, searchQuery]);

    const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    return (
      <div className="w-72 bg-popover rounded-lg border shadow-md">
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
          />
        </div>
        <ScrollArea className="h-80 p-1.5">
          <div className="grid grid-cols-9">
            {filteredIcons.map((iconName) => (
              <IconItem
                key={iconName}
                iconName={iconName}
                onSelectIcon={onSelectIcon}
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
