import { IconPickerExample } from "@/components/examples/icon-picker";
import Link from "next/link";
import { GithubContributionsExample } from "@/components/examples/github-contributions";
import V0Icon from "@/components/icons/v0";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col px-4 py-8 flex-1 gap-8 md:gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/icon-picker"
              className="text-sm line-clamp-1 font-medium"
            >
              Icon Picker
            </Link>
            <Separator orientation="vertical" className="!h-4 hidden lg:flex" />
            <span className="text-sm text-muted-foreground line-clamp-1 hidden lg:flex">
              A simple icon picker component with search functionality.
            </span>
          </div>
          <div className="flex gap-2">
            <CopyShadcn text="npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker.json" />
            <CopyURL url="https://ui.raulcarini.dev/r/icon-picker.json" />
            <Button variant="default" size="sm" asChild>
              <a
                href="https://v0.dev/chat/api/open?url=https://ui.raulcarini.dev/r/icon-picker.json"
                target="_blank"
                rel="noreferrer"
              >
                Open in
                <V0Icon />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex items-center border rounded-lg justify-center min-h-[400px] p-4 md:p-10 relative bg-muted/30">
          <IconPickerExample />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/github-contributions"
              className="text-sm line-clamp-1 font-medium"
            >
              Github Contributions
            </Link>
            <Separator orientation="vertical" className="!h-4 hidden lg:flex" />
            <span className="text-sm text-muted-foreground line-clamp-1 hidden lg:flex">
              A simple Github contributions table.
            </span>
          </div>
          <div className="flex gap-2">
            <CopyShadcn text="npx shadcn@latest add https://ui.raulcarini.dev/r/github-contributions.json" />
            <CopyURL url="https://ui.raulcarini.dev/r/github-contributions.json" />
            <Button variant="default" size="sm" asChild>
              <a
                href="https://v0.dev/chat/api/open?url=https://ui.raulcarini.dev/r/github-contributions.json"
                target="_blank"
                rel="noreferrer"
              >
                Open in
                <V0Icon />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex items-center border rounded-lg justify-center min-h-[400px] p-4 md:p-10 relative bg-muted/30">
          <GithubContributionsExample />
        </div>
      </div>
    </main>
  );
}
