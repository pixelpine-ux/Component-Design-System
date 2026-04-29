import { useState } from "react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { AlertCircle, Bell, Check, X, Info, ChevronRight, Code2 } from "lucide-react";
import { toast } from "sonner";
import { CodeBlock } from "./CodeBlock";

export function ComponentShowcase() {
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [progress, setProgress] = useState(60);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [showCode, setShowCode] = useState(true);

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h2>Component Library</h2>
          <p className="text-muted-foreground mt-2">
            Explore our comprehensive collection of 50+ production-ready components with code examples.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2"
        >
          <Code2 className="w-4 h-4" />
          {showCode ? "Hide Code" : "Show Code"}
        </Button>
      </div>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="overlay">Overlay</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="space-y-6 mt-6">
          <Card className="p-6">
            <h3 className="mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button disabled>Disabled</Button>
            </div>
            {showCode && (
              <div className="mt-6">
                <CodeBlock
                  code={`<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button disabled>Disabled</Button>`}
                  language="tsx"
                />
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Check className="w-4 h-4" />
              </Button>
            </div>
            {showCode && (
              <div className="mt-6">
                <CodeBlock
                  code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Check className="w-4 h-4" />
</Button>`}
                  language="tsx"
                />
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            {showCode && (
              <div className="mt-6">
                <CodeBlock
                  code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
                  language="tsx"
                />
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="space-y-6 mt-6">
          <Card className="p-6">
            <h3 className="mb-4">Text Input</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <div>
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" disabled placeholder="Disabled input" />
              </div>
            </div>
            {showCode && (
              <div className="mt-6">
                <CodeBlock
                  code={`<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
<div>
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" placeholder="Enter password" />
</div>`}
                  language="tsx"
                />
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Checkbox & Switch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing">Receive marketing emails</Label>
              </div>
              <Separator />
              <div className="flex items-center space-x-2">
                <Switch id="notifications" checked={switchValue} onCheckedChange={setSwitchValue} />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Radio Group</h3>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Option Three</Label>
              </div>
            </RadioGroup>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Select</h3>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Slider</h3>
            <div className="space-y-4">
              <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} className="w-full" />
              <p className="text-muted-foreground">Value: {sliderValue[0]}</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6 mt-6">
          <Card className="p-6">
            <h3 className="mb-4">Alerts</h3>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational alert message.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again.</AlertDescription>
              </Alert>
            </div>
            {showCode && (
              <div className="mt-6">
                <CodeBlock
                  code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert message.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>`}
                  language="tsx"
                />
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Progress</h3>
            <div className="space-y-4">
              <Progress value={progress} />
              <div className="flex gap-2">
                <Button onClick={() => setProgress(Math.min(100, progress + 10))} size="sm">
                  Increase
                </Button>
                <Button onClick={() => setProgress(Math.max(0, progress - 10))} size="sm" variant="outline">
                  Decrease
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Toast Notifications</h3>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => toast.success("Success! Operation completed.")}>Success Toast</Button>
              <Button onClick={() => toast.error("Error! Something went wrong.")} variant="destructive">
                Error Toast
              </Button>
              <Button onClick={() => toast.info("Info: New update available.")} variant="outline">
                Info Toast
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Avatars</h3>
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6 mt-6">
          <Card className="p-6">
            <h3 className="mb-4">Accordion</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a design system?</AccordionTrigger>
                <AccordionContent>
                  A design system is a collection of reusable components, guided by clear standards, that can be
                  assembled together to build applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why use a design system?</AccordionTrigger>
                <AccordionContent>
                  Design systems improve consistency, speed up development, ensure accessibility, and create a shared
                  language between designers and developers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How to get started?</AccordionTrigger>
                <AccordionContent>
                  Start by reviewing the design principles, exploring the component library, and reading the usage
                  guidelines for each component.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Tabs</h3>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-muted-foreground">Overview content goes here.</p>
              </TabsContent>
              <TabsContent value="details" className="mt-4">
                <p className="text-muted-foreground">Detailed information goes here.</p>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <p className="text-muted-foreground">Settings and configurations go here.</p>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Calendar</h3>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-fit" />
          </Card>
        </TabsContent>

        <TabsContent value="overlay" className="space-y-6 mt-6">
          <Card className="p-6">
            <h3 className="mb-4">Dialog</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a dialog component. It can contain forms, confirmations, or any other content.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </DialogContent>
            </Dialog>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Popover</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4>Popover Content</h4>
                  <p className="text-muted-foreground">
                    Popovers can contain any content, from simple text to complex forms.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Tooltip</h3>
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tooltip content appears on hover</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Bell className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Notifications</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-6 mt-6">
          <Card className="p-6">
            <h3 className="mb-4">Breadcrumb</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span>Design System</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Components</span>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Separator</h3>
            <div>
              <p>Section one content</p>
              <Separator className="my-4" />
              <p>Section two content</p>
              <Separator className="my-4" />
              <p>Section three content</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
