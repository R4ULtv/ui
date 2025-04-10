"use client";

import { useState, useCallback } from "react";
import { CheckIcon } from "lucide-react";

export default function CopyUrl({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }, [url]);

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
    >
      {url}
      {copied && <CheckIcon size={16} />}
    </button>
  );
}
