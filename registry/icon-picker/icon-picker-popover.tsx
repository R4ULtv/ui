"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import IconPicker from "@/registry/icon-picker/icon-picker-virtualized";

export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button>
          {selectedIcon ? `Selected Icon: ${selectedIcon}` : "Icon Picker"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <IconPicker
          selectedIcon={selectedIcon}
          onSelectIcon={setSelectedIcon}
        />
      </PopoverContent>
    </Popover>
  );
}
