import { Button } from "@/components/ui/button";
import GitHub from "./icons/github";

export default function OpenCode({ url }: { url: string }) {
  return (
    <Button
      nativeButton={false}
      aria-label="Copy URL"
      variant="outline"
      size="sm"
      render={<a href={url} target="_blank" rel="noreferrer" />}
    >
      <span className="hidden md:block">Code </span>
      <GitHub />
    </Button>
  );
}
