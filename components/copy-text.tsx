"use client";

import { useState, useCallback } from "react";
import { CheckIcon } from "lucide-react";

export default function CopyText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy text"
      className="flex items-center gap-2 text-sm text-muted-foreground hover:underline text-left"
    >
      {text}
      {copied && <CheckIcon size={16} />}
    </button>
  );
}
