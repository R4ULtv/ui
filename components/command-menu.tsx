"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import GitHub from "@/components/icons/github";
import ShadcnIcon from "@/components/icons/shadcn";
import V0Icon from "@/components/icons/v0";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  CalendarRangeIcon,
  Link2Icon,
  MousePointerClickIcon,
  MusicIcon,
  PanelTopIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
} from "lucide-react";

import registry from "@/registry.json";
import { toast } from "sonner";

export default function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [openPopover, setOpenPopover] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<string>("");
  const commandRef = React.useRef<HTMLDivElement>(null);
  const openRef = React.useRef(open);

  React.useEffect(() => {
    openRef.current = open;
  }, [open]);

  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Open command menu with Cmd/Ctrl+K
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
        if (openRef.current) setOpenPopover(true);
        return;
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Get the currently selected item from the DOM
    const getSelectedItem = () => {
      const selectedElement = commandRef.current?.querySelector(
        '[cmdk-item][data-selected="true"]',
      );
      const itemValue = selectedElement?.getAttribute("data-value");
      return itemValue || selectedItem;
    };

    // Open Github Code with Cmd/Ctrl+Shift+G
    if (e.key.toLowerCase() === "g" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
      e.preventDefault();
      const item = getSelectedItem();
      handleOpenGithub(item);
      setOpen(false);
      return;
    }
    // Open in V0 with Cmd/Ctrl+Shift+V
    if (e.key.toLowerCase() === "v" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
      e.preventDefault();
      const item = getSelectedItem();
      handleOpenV0(item);
      setOpen(false);
      return;
    }
    // Copy shadcn/cli with Cmd/Ctrl+C
    if (e.key.toLowerCase() === "c" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      const item = getSelectedItem();
      await handleCopyShadcnCli(item);
      setOpen(false);
      return;
    }
    // Copy url with Cmd/Ctrl+U
    if (e.key.toLowerCase() === "u" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      const item = getSelectedItem();
      await handleCopyUrl(item);
      setOpen(false);
      return;
    }
  };

  const handleSelect = (item: string) => {
    const component = registry.items.find((c) => c.name === item);
    if (!component) {
      toast.error("Component not found");
      return;
    }

    if (!component.files || component.files.length === 0) {
      toast.error("Component files not found");
      return;
    }
    setOpen(false);
    setSelectedItem(""); // Reset selection when closing
    try {
      const path = component.files[0].path
        .replace("registry/", "")
        .replace(".tsx", "")
        .split("/");
      router.push("/" + path[0] + "#" + path[1], { scroll: true });
    } catch (error) {
      console.error("Failed to navigate:", error);
      toast.error("Failed to open component");
    }
  };

  const handleCopyShadcnCli = async (item: string) => {
    if (!item) {
      toast.error("No component selected");
      return;
    }

    const cliCommand = `npx shadcn@latest add ${item}`;
    try {
      await navigator.clipboard.writeText(cliCommand);
      toast.success("npx command copied to clipboard");
    } catch (err) {
      console.error("Failed to copy shadcn/ui command:", err);
      toast.error("Failed to copy command to clipboard");
    }
  };

  const handleCopyUrl = async (item: string) => {
    if (!item) {
      toast.error("No component selected");
      return;
    }

    const url = `https://ui.raulcarini.dev/r/${item}.json`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Registry URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy URL:", err);
      toast.error("Failed to copy URL to clipboard");
    }
  };

  const handleOpenGithub = (item: string) => {
    if (!item) {
      toast.error("No component selected");
      return;
    }

    const component = registry.items.find((c) => c.name === item);
    if (!component) {
      toast.error("Component not found");
      return;
    }

    if (!component.files || component.files.length === 0) {
      toast.error("Component files not found");
      return;
    }

    try {
      const githubUrl = `https://github.com/r4ultv/ui/blob/master/${component.files[0].path}`;
      window.open(githubUrl, "_blank");
    } catch (error) {
      console.error("Failed to open GitHub:", error);
      toast.error("Failed to open GitHub link");
    }
  };

  const handleOpenV0 = (item: string) => {
    if (!item) {
      toast.error("No component selected");
      return;
    }

    try {
      const url = `https://ui.raulcarini.dev/r/${item}.json`;
      const v0Url = `https://v0.dev/chat/api/open?url=${url}`;
      window.open(v0Url, "_blank");
    } catch (error) {
      console.error("Failed to open V0:", error);
      toast.error("Failed to open V0 link");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogHeader className="sr-only">
        <DialogTitle>Search for a component</DialogTitle>
        <DialogDescription>
          Search for a component open or copy its registry URL to use in your
          project.
        </DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0 sm:max-w-[640px] max-h-[725px] transition-[max-height] duration-300">
        <Command
          ref={commandRef}
          onValueChange={setSelectedItem}
          onKeyDown={handleKeyPress}
          className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-[48px] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[data-slot='command-input-wrapper']_svg]:size-4.5 [&_[cmdk-input]]:text-[15px] [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]_svg]:w-5"
        >
          <CommandInput placeholder="Search..." />
          <CommandList
            className="max-h-[378px] outline-none"
            style={{ scrollbarWidth: "thin" }}
          >
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Components">
              {registry.items.map((item) => (
                <CommandItem
                  key={item.name}
                  value={item.name}
                  onSelect={handleSelect}
                  className="h-10 rounded-lg not-first:mt-1 px-2"
                >
                  {item.name.startsWith("icon-picker") && (
                    <div className="p-[3px] rounded-sm bg-linear-to-b from-[#f55354] to-[#eb4646]">
                      <MousePointerClickIcon className="size-3.5! text-white" />
                    </div>
                  )}
                  {item.name.startsWith("github-contributions") && (
                    <div className="p-[3px] rounded-sm bg-linear-to-b from-[#6cb9a3] to-[#2c6459]">
                      <CalendarRangeIcon className="size-3.5! text-white" />
                    </div>
                  )}
                  {item.name.startsWith("music-player") && (
                    <div className="p-[3px] rounded-sm bg-linear-to-b from-[#8b5cf6] to-[#7c3aed]">
                      <MusicIcon className="size-3.5! text-white" />
                    </div>
                  )}
                  {item.name.startsWith("search-bar") && (
                    <div className="p-[3px] rounded-sm bg-linear-to-b from-[#3b82f6] to-[#2563eb]">
                      <SearchIcon className="size-3.5! text-white" />
                    </div>
                  )}
                  {item.name.startsWith("rating-group") && (
                    <div className="p-[3px] rounded-sm bg-linear-to-b from-[#f59e0b] to-[#d97706]">
                      <StarIcon className="size-3.5! text-white" />
                    </div>
                  )}
                  {item.name.startsWith("theme-switch") && (
                    <div className="p-[3px] rounded-sm bg-linear-to-b from-[#6366f1] to-[#4f46e5]">
                      <SunIcon className="size-3.5! text-white" />
                    </div>
                  )}
                  {item.name.startsWith("github") &&
                    !item.name.startsWith("github-contributions") && (
                      <div className="p-[3px] rounded-sm bg-linear-to-b from-[#374151] to-[#1f2937]">
                        <GitHub className="size-3.5! text-white" />
                      </div>
                    )}
                  {item.title}
                  <CommandShortcut className="tracking-normal text-[13px] first-letter:uppercase">
                    {item.type.replace("registry:", "")}
                  </CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <DialogFooter className="py-1.5 px-3 border-t items-center">
            <MousePointerClickIcon className="size-4" />{" "}
            <span className="mr-auto text-xs text-foreground/90 ">
              UI Components
            </span>
            <Button
              className="text-xs pl-2 pr-1 text-foreground/90 h-7"
              size="sm"
              variant="ghost"
            >
              Open Page{" "}
              <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                ↵
              </kbd>
            </Button>
            <Separator
              orientation="vertical"
              className="h-3! hidden md:block"
            />
            <Popover open={openPopover} onOpenChange={setOpenPopover}>
              <PopoverTrigger asChild>
                <Button
                  className="text-xs pl-2 pr-1 text-foreground/70 h-7"
                  size="sm"
                  variant="ghost"
                >
                  Actions{" "}
                  <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                    ⌘
                  </kbd>{" "}
                  <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                    K
                  </kbd>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                side="top"
                sideOffset={8}
                className="p-0 w-[318px]"
              >
                <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-[41px] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[data-slot='command-input-wrapper']_svg]:hidden [&_[data-slot='command-input-wrapper']]:border-t [&_[data-slot='command-input-wrapper']]:border-b-0 [&_[cmdk-input]]:text-sm [&_[cmdk-input]]:h-10 [&_[cmdk-item]]:px-2 [&_[cmdk-item]_svg]:w-5">
                  <CommandList className="max-h-[378px] outline-none">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Quick Actions">
                      <CommandItem className="h-10 rounded-lg data-[selected=true]:bg-accent/50">
                        <PanelTopIcon className="size-4" /> Open Page
                        <CommandShortcut className="ml-auto text-xs bg-accent size-5 flex items-center justify-center rounded">
                          ↵
                        </CommandShortcut>
                      </CommandItem>
                      <CommandItem className="h-10 rounded-lg data-[selected=true]:bg-accent/50">
                        <ShadcnIcon className="size-4" /> Copy shadcn/cli
                        <CommandShortcut className="ml-auto space-x-1 flex items-center">
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            ⌘
                          </kbd>
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            C
                          </kbd>
                        </CommandShortcut>
                      </CommandItem>
                      <CommandItem className="h-10 rounded-lg data-[selected=true]:bg-accent/50">
                        <Link2Icon className="size-4" /> Copy URL
                        <CommandShortcut className="ml-auto space-x-1 flex items-center">
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            ⌘
                          </kbd>
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            U
                          </kbd>
                        </CommandShortcut>
                      </CommandItem>
                      <CommandItem className="h-10 rounded-lg data-[selected=true]:bg-accent/50">
                        <GitHub className="size-4" /> Open Code
                        <CommandShortcut className="ml-auto space-x-1 flex items-center">
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            ⌘
                          </kbd>
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            ⇧
                          </kbd>
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            G
                          </kbd>
                        </CommandShortcut>
                      </CommandItem>
                      <CommandItem className="h-10 rounded-lg data-[selected=true]:bg-accent/50">
                        <V0Icon className="size-4" /> Open in V0
                        <CommandShortcut className="ml-auto space-x-1 flex items-center">
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            ⌘
                          </kbd>
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            ⇧
                          </kbd>
                          <kbd className="text-xs bg-accent size-5 flex items-center justify-center rounded">
                            V
                          </kbd>
                        </CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                  <CommandInput
                    className="text-sm"
                    placeholder="Search for actions..."
                  />
                </Command>
              </PopoverContent>
            </Popover>
          </DialogFooter>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
