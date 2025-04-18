"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const IconPicker = dynamic(() => import("@/registry/icon-picker/icon-picker"));
export const IconPickerExample = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <IconPicker selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
  );
};

const IconPickerMultiple = dynamic(
  () => import("@/registry/icon-picker/icon-picker-multiple"),
);
export const IconPickerExampleMultiple = () => {
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);

  return (
    <IconPickerMultiple
      selectedIcons={selectedIcons}
      setSelectedIcons={setSelectedIcons}
    />
  );
};

const IconPickerTanstack = dynamic(
  () => import("@/registry/icon-picker/icon-picker-tanstack"),
);
export const IconPickerExampleTanstack = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <IconPickerTanstack
      selectedIcon={selectedIcon}
      setSelectedIcon={setSelectedIcon}
    />
  );
};

const IconPickerVirtualized = dynamic(
  () => import("@/registry/icon-picker/icon-picker-virtualized"),
);
export const IconPickerExampleVirtualized = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <IconPickerVirtualized
      selectedIcon={selectedIcon}
      setSelectedIcon={setSelectedIcon}
    />
  );
};

const IconPickerPopover = dynamic(
  () => import("@/registry/icon-picker/icon-picker-popover"),
);
export const IconPickerExamplePopover = () => {
  return <IconPickerPopover />;
};

const IconPickerCustomColor = dynamic(
  () => import("@/registry/icon-picker/icon-picker-custom-color"),
);
export const IconPickerExampleCustomColor = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    "oklch(62.3% 0.214 259.815)",
  );

  return (
    <IconPickerCustomColor
      selectedIcon={selectedIcon}
      setSelectedIcon={setSelectedIcon}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
    />
  );
};
