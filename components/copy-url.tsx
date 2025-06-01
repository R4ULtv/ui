"use client";

import { useCallback, useState } from "react";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CopyURL({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Registry URL copied to clipboard");

    setTimeout(() => setCopied(false), 2000);
  }, [url]);

  return (
    <Button
      aria-label="Copy URL"
      variant="outline"
      size="sm"
      onClick={handleCopy}
    >
      {copied ? <CheckIcon size={16} /> : <ClipboardIcon size={16} />}
      <span className="hidden md:block">URL</span>
    </Button>
  );
}
