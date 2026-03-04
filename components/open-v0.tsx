import { Button } from "@/components/ui/button";
import V0Icon from "@/components/icons/v0";

export default function OpenV0({ url }: { url: string }) {
  return (
    <Button
      nativeButton={false}
      variant="default"
      size="sm"
      render={
        <a
          href={`https://v0.dev/chat/api/open?url=${url}`}
          target="_blank"
          rel="noreferrer"
        />
      }
    >
      <span className="hidden md:block">Open in </span>
      <V0Icon />
    </Button>
  );
}
