"use client";

import { icons } from "lucide-react";
import { useState, useMemo, useCallback, memo, useRef, useEffect } from "react";
import { Grid, AutoSizer } from "react-virtualized";

import { Input } from "@/components/ui/input";

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
    const gridRef = useRef<Grid | null>(null);

    const iconsMap = useMemo(() => Object.keys(icons), []);

    const filteredIcons = useMemo(() => {
      if (!searchQuery.trim()) return iconsMap;
      return iconsMap.filter((iconName) =>
        iconName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }, [iconsMap, searchQuery]);

    useEffect(() => {
      if (gridRef.current) {
        gridRef.current.recomputeGridSize();
      }
    }, [filteredIcons]);

    const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    const ICON_CELL_SIZE = 28;
    const COLUMNS = 9;

    const cellRenderer = useCallback(
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
            <IconItem iconName={iconName} onSelectIcon={onSelectIcon} />
          </div>
        );
      },
      [filteredIcons, onSelectIcon],
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
