import CopyText from "@/components/copy-text";
import {
  IconPickerExample,
  IconPickerExampleTanstack,
  IconPickerExampleVirtualized,
  IconPickerExamplePopover,
  IconPickerExampleMultiple,
  IconPickerExampleCustomColor,
  IconPickerExampleVirtua,
} from "@/components/examples/icon-picker";
import ThemeSwitch from "@/components/theme-switch";

export default function Page() {
  return (
    <main className="min-h-svh p-4 max-w-5xl mx-auto lg:border-x border-dashed">
      <div className="flex items-center justify-center flex-col gap-20 my-12">
        <div className="text-center text-pretty space-y-2">
          <h1 className="text-3xl font-bold font-mono">Icon Picker</h1>
          <p className="font-mono text-muted-foreground">
            A simple icon picker component with search functionality.
          </p>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-1 mb-2 ml-2">
            <h1 className="font-semibold">Icon Picker</h1>
            <CopyText text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker.json" />
          </div>
          <div className="relative border border-dashed w-full p-4 rounded-xl shadow-md">
            <div className="absolute top-3 right-3">
              <ThemeSwitch />
            </div>
            <div className="flex items-center justify-center h-[480px]">
              <IconPickerExample />
            </div>
          </div>
          <div className="text-xs text-muted-foreground m-2">
            View Code on{" "}
            <a
              target="_blank"
              href="https://github.com/R4ULtv/ui/blob/master/registry/icon-picker/icon-picker.tsx"
              className="underline hover:text-primary transition-colors"
            >
              Github
            </a>{" "}
            · Built with{" "}
            <a
              target="_blank"
              href="https://github.com/shadcn-ui/ui"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-1 mb-2 ml-2">
            <h1 className="font-semibold">Icon Picker - Multiple Selection</h1>
            <CopyText text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-multiple.json" />
          </div>
          <div className="relative border border-dashed w-full p-4 rounded-xl shadow-md">
            <div className="absolute top-3 right-3">
              <ThemeSwitch />
            </div>
            <div className="flex items-center justify-center h-[480px]">
              <IconPickerExampleMultiple />
            </div>
          </div>
          <div className="text-xs text-muted-foreground m-2">
            View Code on{" "}
            <a
              target="_blank"
              href="https://github.com/R4ULtv/ui/blob/master/registry/icon-picker/icon-picker-multiple.tsx"
              className="underline hover:text-primary transition-colors"
            >
              Github
            </a>{" "}
            · Built with{" "}
            <a
              target="_blank"
              href="https://github.com/shadcn-ui/ui"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-1 mb-2 ml-2">
            <h1 className="font-semibold">Icon Picker - Custom Color</h1>
            <CopyText text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-custom-color.json" />
          </div>
          <div className="relative border border-dashed w-full p-4 rounded-xl shadow-md">
            <div className="absolute top-3 right-3">
              <ThemeSwitch />
            </div>
            <div className="flex items-center justify-center h-[480px]">
              <IconPickerExampleCustomColor />
            </div>
          </div>
          <div className="text-xs text-muted-foreground m-2">
            View Code on{" "}
            <a
              target="_blank"
              href="https://github.com/R4ULtv/ui/blob/master/registry/icon-picker/icon-picker-custom-color.tsx"
              className="underline hover:text-primary transition-colors"
            >
              Github
            </a>{" "}
            · Built with{" "}
            <a
              target="_blank"
              href="https://github.com/shadcn-ui/ui"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-1 mb-2 ml-2">
            <h1 className="font-semibold">Icon Picker - Virtualized Grid</h1>
            <CopyText text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-tanstack.json" />
          </div>

          <div className="relative border border-dashed w-full p-4 rounded-xl shadow-md">
            <div className="absolute top-3 right-3">
              <ThemeSwitch />
            </div>
            <div className="flex items-center justify-center h-[480px]">
              <IconPickerExampleVirtua />
            </div>
          </div>
          <div className="text-xs text-muted-foreground m-2">
            View Code on{" "}
            <a
              target="_blank"
              href="https://github.com/R4ULtv/ui/blob/master/registry/icon-picker/icon-picker-tanstack.tsx"
              className="underline hover:text-primary transition-colors"
            >
              Github
            </a>{" "}
            · Built with{" "}
            <a
              target="_blank"
              href="https://github.com/shadcn-ui/ui"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>{" "}
            &{" "}
            <a
              target="_blank"
              href="https://github.com/tanstack/virtual"
              className="underline hover:text-primary transition-colors"
            >
              virtua
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-1 mb-2 ml-2">
            <h1 className="font-semibold">Icon Picker - Virtualized Grid</h1>
            <CopyText text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-tanstack.json" />
          </div>

          <div className="relative border border-dashed w-full p-4 rounded-xl shadow-md">
            <div className="absolute top-3 right-3">
              <ThemeSwitch />
            </div>
            <div className="flex items-center justify-center h-[480px]">
              <IconPickerExampleTanstack />
            </div>
          </div>
          <div className="text-xs text-muted-foreground m-2">
            View Code on{" "}
            <a
              target="_blank"
              href="https://github.com/R4ULtv/ui/blob/master/registry/icon-picker/icon-picker-tanstack.tsx"
              className="underline hover:text-primary transition-colors"
            >
              Github
            </a>{" "}
            · Built with{" "}
            <a
              target="_blank"
              href="https://github.com/shadcn-ui/ui"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>{" "}
            &{" "}
            <a
              target="_blank"
              href="https://github.com/tanstack/virtual"
              className="underline hover:text-primary transition-colors"
            >
              @tanstack/react-virtual
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-1 mb-2 ml-2">
            <h1 className="font-semibold">Icon Picker - Virtualized Grid</h1>
            <CopyText text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-virtualized.json" />
          </div>

          <div className="relative border border-dashed w-full p-4 rounded-xl shadow-md">
            <div className="absolute top-3 right-3">
              <ThemeSwitch />
            </div>
            <div className="flex items-center justify-center h-[480px]">
              <IconPickerExampleVirtualized />
            </div>
          </div>
          <div className="text-xs text-muted-foreground m-2">
            View Code on{" "}
            <a
              target="_blank"
              href="https://github.com/R4ULtv/ui/blob/master/registry/icon-picker/icon-picker-virtualized.tsx"
              className="underline hover:text-primary transition-colors"
            >
              Github
            </a>{" "}
            · Built with{" "}
            <a
              target="_blank"
              href="https://github.com/shadcn-ui/ui"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>{" "}
            &{" "}
            <a
              target="_blank"
              href="https://github.com/bvaughn/react-virtualized"
              className="underline hover:text-primary transition-colors"
            >
              react-virtualized
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-1 mb-2 ml-2">
            <h1 className="font-semibold">
              Icon Picker - Popover & Virtualized Grid
            </h1>
            <CopyText text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-popover.json" />
          </div>
          <div className="relative border border-dashed w-full p-4 rounded-xl shadow-md">
            <div className="absolute top-3 right-3">
              <ThemeSwitch />
            </div>
            <div className="flex items-center justify-center h-[480px]">
              <IconPickerExamplePopover />
            </div>
          </div>
          <div className="text-xs text-muted-foreground m-2">
            View Code on{" "}
            <a
              target="_blank"
              href="https://github.com/R4ULtv/ui/blob/master/registry/icon-picker/icon-picker-popover.tsx"
              className="underline hover:text-primary transition-colors"
            >
              Github
            </a>{" "}
            · Built with{" "}
            <a
              target="_blank"
              href="https://github.com/shadcn-ui/ui"
              className="underline hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>{" "}
            &{" "}
            <a
              target="_blank"
              href="https://github.com/tanstack/virtual"
              className="underline hover:text-primary transition-colors"
            >
              @tanstack/react-virtual
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
