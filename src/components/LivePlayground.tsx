import { useState } from "react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { CodeBlock } from "./CodeBlock";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Play } from "lucide-react";

export function LivePlayground() {
  // Button playground state
  const [buttonVariant, setButtonVariant] = useState<string>("default");
  const [buttonSize, setButtonSize] = useState<string>("default");
  const [buttonText, setButtonText] = useState("Click me");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Card playground state
  const [cardPadding, setCardPadding] = useState([24]);
  const [cardTitle, setCardTitle] = useState("Card Title");
  const [cardDescription, setCardDescription] = useState("This is a card description");
  const [showCardFooter, setShowCardFooter] = useState(true);

  // Badge playground state
  const [badgeVariant, setBadgeVariant] = useState<string>("default");
  const [badgeText, setBadgeText] = useState("Badge");

  const generateButtonCode = () => {
    const props = [];
    if (buttonVariant !== "default") props.push(`variant="${buttonVariant}"`);
    if (buttonSize !== "default") props.push(`size="${buttonSize}"`);
    if (buttonDisabled) props.push("disabled");
    
    const propsString = props.length > 0 ? ` ${props.join(" ")}` : "";
    return `<Button${propsString}>\n  ${buttonText}\n</Button>`;
  };

  const generateCardCode = () => {
    const padding = cardPadding[0];
    return `<Card${padding !== 24 ? ` className="p-${Math.round(padding / 4)}"` : ' className="p-6"'}>
  <h3>${cardTitle}</h3>
  <p className="text-muted-foreground mt-2">
    ${cardDescription}
  </p>${showCardFooter ? '\n  <div className="mt-4">\n    <Button>Action</Button>\n  </div>' : ''}
</Card>`;
  };

  const generateBadgeCode = () => {
    const props = badgeVariant !== "default" ? ` variant="${badgeVariant}"` : "";
    return `<Badge${props}>${badgeText}</Badge>`;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2>Live Playground</h2>
        <p className="text-muted-foreground mt-2">
          Customize components in real-time and see the generated code. Perfect for experimenting and learning.
        </p>
      </div>

      <Tabs defaultValue="button" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="button">Button</TabsTrigger>
          <TabsTrigger value="card">Card</TabsTrigger>
          <TabsTrigger value="badge">Badge</TabsTrigger>
        </TabsList>

        {/* Button Playground */}
        <TabsContent value="button" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Controls */}
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="mb-4">Customize Button</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="button-text">Button Text</Label>
                    <Input
                      id="button-text"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="button-variant">Variant</Label>
                    <Select value={buttonVariant} onValueChange={setButtonVariant}>
                      <SelectTrigger id="button-variant" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="secondary">Secondary</SelectItem>
                        <SelectItem value="destructive">Destructive</SelectItem>
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="ghost">Ghost</SelectItem>
                        <SelectItem value="link">Link</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="button-size">Size</Label>
                    <Select value={buttonSize} onValueChange={setButtonSize}>
                      <SelectTrigger id="button-size" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sm">Small</SelectItem>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="lg">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="button-disabled"
                      checked={buttonDisabled}
                      onCheckedChange={setButtonDisabled}
                    />
                    <Label htmlFor="button-disabled">Disabled</Label>
                  </div>
                </div>
              </div>
            </Card>

            {/* Preview & Code */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4>Preview</h4>
                  <Badge variant="secondary">
                    <Play className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="flex items-center justify-center min-h-[120px] bg-muted/30 rounded-lg border border-border">
                  <Button
                    variant={buttonVariant as any}
                    size={buttonSize as any}
                    disabled={buttonDisabled}
                  >
                    {buttonText}
                  </Button>
                </div>
              </Card>

              <div>
                <h4 className="mb-3">Generated Code</h4>
                <CodeBlock code={generateButtonCode()} language="tsx" />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Card Playground */}
        <TabsContent value="card" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Controls */}
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="mb-4">Customize Card</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="card-title">Title</Label>
                    <Input
                      id="card-title"
                      value={cardTitle}
                      onChange={(e) => setCardTitle(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="card-description">Description</Label>
                    <Input
                      id="card-description"
                      value={cardDescription}
                      onChange={(e) => setCardDescription(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="card-padding">Padding: {cardPadding[0]}px</Label>
                    <Slider
                      id="card-padding"
                      value={cardPadding}
                      onValueChange={setCardPadding}
                      min={8}
                      max={48}
                      step={4}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="card-footer"
                      checked={showCardFooter}
                      onCheckedChange={setShowCardFooter}
                    />
                    <Label htmlFor="card-footer">Show Footer</Label>
                  </div>
                </div>
              </div>
            </Card>

            {/* Preview & Code */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4>Preview</h4>
                  <Badge variant="secondary">
                    <Play className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="bg-muted/30 rounded-lg border border-border p-4">
                  <Card style={{ padding: `${cardPadding[0]}px` }}>
                    <h3>{cardTitle}</h3>
                    <p className="text-muted-foreground mt-2">{cardDescription}</p>
                    {showCardFooter && (
                      <div className="mt-4">
                        <Button>Action</Button>
                      </div>
                    )}
                  </Card>
                </div>
              </Card>

              <div>
                <h4 className="mb-3">Generated Code</h4>
                <CodeBlock code={generateCardCode()} language="tsx" />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Badge Playground */}
        <TabsContent value="badge" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Controls */}
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="mb-4">Customize Badge</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="badge-text">Badge Text</Label>
                    <Input
                      id="badge-text"
                      value={badgeText}
                      onChange={(e) => setBadgeText(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="badge-variant">Variant</Label>
                    <Select value={badgeVariant} onValueChange={setBadgeVariant}>
                      <SelectTrigger id="badge-variant" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="secondary">Secondary</SelectItem>
                        <SelectItem value="destructive">Destructive</SelectItem>
                        <SelectItem value="outline">Outline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>

            {/* Preview & Code */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4>Preview</h4>
                  <Badge variant="secondary">
                    <Play className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="flex items-center justify-center min-h-[120px] bg-muted/30 rounded-lg border border-border">
                  <Badge variant={badgeVariant as any}>{badgeText}</Badge>
                </div>
              </Card>

              <div>
                <h4 className="mb-3">Generated Code</h4>
                <CodeBlock code={generateBadgeCode()} language="tsx" />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Card className="p-6 bg-accent">
        <h3 className="mb-3">Pro Tips</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Experiment with different combinations to see how components behave</li>
          <li>• Copy the generated code directly into your project</li>
          <li>• All components support theming through CSS variables</li>
          <li>• Check the accessibility tab for keyboard navigation support</li>
        </ul>
      </Card>
    </div>
  );
}
