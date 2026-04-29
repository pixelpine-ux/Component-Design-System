import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "tsx", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-border bg-muted/30 overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
          <span className="text-muted-foreground">{title}</span>
          <span className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>
            {language}
          </span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto" style={{ fontSize: '0.875rem' }}>
          <code className="text-foreground">{code}</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}
