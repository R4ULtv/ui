"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";

import { CheckIcon } from "lucide-react";
import ShadcnIcon from "@/components/icons/shadcn";
import { Button } from "@/components/ui/button";

export default function CopyShadcn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("npx command copied to clipboard");

    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <Button
      aria-label="Copy shadcn/cli"
      variant="outline"
      size="sm"
      onClick={handleCopy}
    >
      {copied ? <CheckIcon size={16} /> : <ShadcnIcon />} shadcn/cli
    </Button>
  );
}
