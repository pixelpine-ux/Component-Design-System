import { Card } from "./ui/card";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colorGroups = [
    {
      title: "Brand Colors",
      colors: [
        { name: "Primary", var: "--color-primary", fg: "--color-primary-foreground" },
        { name: "Secondary", var: "--color-secondary", fg: "--color-secondary-foreground" },
        { name: "Accent", var: "--color-accent", fg: "--color-accent-foreground" },
        { name: "Destructive", var: "--color-destructive", fg: "--color-destructive-foreground" },
      ],
    },
    {
      title: "Neutral Colors",
      colors: [
        { name: "Background", var: "--color-background", fg: "--color-foreground" },
        { name: "Card", var: "--color-card", fg: "--color-card-foreground" },
        { name: "Muted", var: "--color-muted", fg: "--color-muted-foreground" },
        { name: "Popover", var: "--color-popover", fg: "--color-popover-foreground" },
      ],
    },
    {
      title: "Border & Input",
      colors: [
        { name: "Border", var: "--color-border", fg: "--color-foreground" },
        { name: "Input", var: "--color-input-background", fg: "--color-foreground" },
        { name: "Ring", var: "--color-ring", fg: "--color-foreground" },
      ],
    },
    {
      title: "Chart Colors",
      colors: [
        { name: "Chart 1", var: "--color-chart-1", fg: "--color-background" },
        { name: "Chart 2", var: "--color-chart-2", fg: "--color-background" },
        { name: "Chart 3", var: "--color-chart-3", fg: "--color-foreground" },
        { name: "Chart 4", var: "--color-chart-4", fg: "--color-background" },
        { name: "Chart 5", var: "--color-chart-5", fg: "--color-background" },
      ],
    },
  ];

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(value);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2>Color System</h2>
        <p className="text-muted-foreground mt-2">
          Our color palette is designed for consistency and accessibility. All colors meet WCAG AA standards for contrast.
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <h3>{group.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.colors.map((color) => (
              <Card key={color.name} className="overflow-hidden">
                <div
                  className="h-24 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: `var(${color.var})`, color: `var(${color.fg})` }}
                  onClick={() => copyToClipboard(color.var)}
                >
                  {copiedColor === color.var ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5 opacity-0 hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <div className="p-4 space-y-1">
                  <p>{color.name}</p>
                  <code className="text-muted-foreground block break-all" style={{ fontSize: '0.75rem' }}>
                    {color.var}
                  </code>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Card className="p-6">
        <h3 className="mb-3">Usage Guidelines</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Use Primary for main actions and key interactive elements</li>
          <li>• Secondary is for supporting actions and complementary UI elements</li>
          <li>• Destructive should only be used for dangerous or irreversible actions</li>
          <li>• Muted colors are perfect for secondary text and disabled states</li>
          <li>• All color combinations have been tested for WCAG AA compliance</li>
        </ul>
      </Card>
    </div>
  );
}
