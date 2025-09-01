import { Button } from "@/components/ui/button";
import GitHub from "./icons/github";

export default function OpenCode({ url }: { url: string }) {
  return (
    <Button aria-label="Copy URL" variant="outline" size="sm" asChild>
      <a href={url} target="_blank" rel="noreferrer">
        <span className="hidden md:block">Code </span>
        <GitHub />
      </a>
    </Button>
  );
}
