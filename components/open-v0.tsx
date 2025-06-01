import { Button } from "@/components/ui/button";
import V0Icon from "@/components/icons/v0";

export default function OpenV0({ registry }: { registry: string }) {
  return (
    <Button variant="default" size="sm" asChild>
      <a
        href={`https://v0.dev/chat/api/open?url=${registry}`}
        target="_blank"
        rel="noreferrer"
      >
        <span className="hidden md:block">Open in </span>
        <V0Icon />
      </a>
    </Button>
  );
}
