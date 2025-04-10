"use client";

import * as React from "react";
import { icons } from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const IconItem = React.memo(
  ({
    iconName,
    onSelectIcon,
    selectedIcon,
  }: {
    iconName: string;
    onSelectIcon?: (iconName: string) => void;
    selectedIcon?: string | null;
  }) => {
    const Icon = icons[iconName as keyof typeof icons];

    const handleClick = React.useCallback(() => {
      onSelectIcon?.(iconName);
    }, [iconName, onSelectIcon]);

    return (
      <button
        className={cn(
          "flex items-center justify-center size-7 rounded-md cursor-pointer text-popover-foreground/75 hover:bg-muted hover:text-primary",
          selectedIcon === iconName &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        )}
        onClick={handleClick}
        title={iconName}
      >
        <Icon size={16} />
      </button>
    );
  },
);

IconItem.displayName = "IconItem";

const IconPicker = React.memo(
  ({
    onSelectIcon,
    selectedIcon,
    className,
    ...props
  }: {
    onSelectIcon?: (iconName: string) => void;
    selectedIcon?: string | null;
  } & React.ComponentProps<"div">) => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const iconsMap = React.useMemo(() => Object.keys(icons), []);

    const filteredIcons = React.useMemo(() => {
      if (!searchQuery.trim()) return iconsMap;
      return iconsMap.filter((iconName) =>
        iconName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }, [iconsMap, searchQuery]);

    const handleSearchChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    return (
      <div
        className={cn("w-72 bg-popover rounded-lg border shadow-md", className)}
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
          />
        </div>
        <ScrollArea className="h-80 p-1.5">
          <div className="grid grid-cols-9">
            {filteredIcons.map((iconName) => (
              <IconItem
                key={iconName}
                iconName={iconName}
                onSelectIcon={onSelectIcon}
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
