"use client";

import * as React from "react";
import { icons } from "lucide-react";
import { Grid, AutoSizer } from "react-virtualized";

import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";

import { Input } from "@/components/ui/input";

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
          "flex items-center justify-center size-7 rounded-md cursor-pointer text-popover-foreground/75 hover:bg-muted hover:text-primary transition-colors",
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
    onSelectIcon,
    selectedIcon,
    className,
    ...props
  }: {
    onSelectIcon?: (iconName: string) => void;
    selectedIcon?: string | null;
  } & React.ComponentProps<"div">) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const debouncedSearchQuery = useDebounce(searchQuery, 200);
    const gridRef = React.useRef<Grid | null>(null);

    const iconsMap = React.useMemo(() => Object.keys(icons), []);

    const filteredIcons = React.useMemo(() => {
      if (!debouncedSearchQuery.trim()) return iconsMap;
      return iconsMap.filter((iconName) =>
        iconName.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
      );
    }, [iconsMap, debouncedSearchQuery]);

    React.useEffect(() => {
      if (gridRef.current) {
        gridRef.current.recomputeGridSize();
      }
    }, [filteredIcons]);

    const handleSearchChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    const ICON_CELL_SIZE = 28;
    const COLUMNS = 9;

    const cellRenderer = React.useCallback(
      ({
        columnIndex,
        rowIndex,
        style,
      }: {
        columnIndex: number;
        rowIndex: number;
        style: React.CSSProperties;
      }) => {
        const index = rowIndex * COLUMNS + columnIndex;
        if (index >= filteredIcons.length) return null;

        const iconName = filteredIcons[index];

        return (
          <div style={style} key={iconName}>
            <IconItem
              iconName={iconName}
              onSelectIcon={onSelectIcon}
              selectedIcon={selectedIcon}
            />
          </div>
        );
      },
      [filteredIcons, onSelectIcon, selectedIcon],
    );

    return (
      <div
        className={cn("w-72 bg-popover rounded-lg border shadow-md", className)}
        aria-label="Icon picker"
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
        <div className="h-80 p-1.5">
          <AutoSizer>
            {({ width, height }: { width: number; height: number }) => {
              const rowCount = Math.ceil(filteredIcons.length / COLUMNS);
              return (
                <Grid
                  ref={gridRef}
                  cellRenderer={cellRenderer}
                  columnCount={COLUMNS}
                  columnWidth={ICON_CELL_SIZE}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={ICON_CELL_SIZE}
                  width={width}
                  overscanRowCount={10}
                  className="focus:outline-none"
                  role="listbox"
                  aria-label="Available icons"
                />
              );
            }}
          </AutoSizer>
        </div>
      </div>
    );
  },
);

IconPicker.displayName = "IconPicker";

export default IconPicker;
