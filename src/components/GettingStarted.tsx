import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Package, FileCode, BookOpen, Rocket, CheckCircle2, ArrowRight, Github, FileText } from "lucide-react";

export function GettingStarted() {
  const stats = [
    { label: "Components", value: "50+" },
    { label: "Design Tokens", value: "40+" },
    { label: "Accessibility", value: "WCAG AA" },
    { label: "Time Saved", value: "40%" },
  ];

  const steps = [
    {
      icon: Package,
      title: "1. Install Dependencies",
      description: "Install the design system package and its peer dependencies.",
      code: "npm install @company/design-system",
    },
    {
      icon: FileCode,
      title: "2. Import Components",
      description: "Import the components you need in your application.",
      code: "import { Button, Card } from '@company/design-system'",
    },
    {
      icon: BookOpen,
      title: "3. Review Guidelines",
      description: "Familiarize yourself with our design principles and accessibility standards.",
    },
    {
      icon: Rocket,
      title: "4. Start Building",
      description: "Use our components to build consistent, accessible interfaces quickly.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <Badge className="mb-2">Design System v1.8.2</Badge>
        <h1 className="mb-4">Component Design System</h1>
        <p className="text-muted-foreground" style={{ fontSize: '1.125rem' }}>
          A comprehensive design system and component library for building consistent, accessible user interfaces across
          multiple products. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>
          <Button size="lg" variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Documentation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6 text-center">
            <div className="mb-2">{stat.value}</div>
            <p className="text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-destructive/10 border-destructive/20">
          <h3 className="mb-3 text-destructive">Problem</h3>
          <p className="text-muted-foreground">
            Inconsistent UI patterns across products leading to poor UX, duplicated effort, and accessibility issues.
          </p>
        </Card>
        <Card className="p-6 bg-accent">
          <h3 className="mb-3">Process</h3>
          <p className="text-muted-foreground">
            Audited components, established principles, created reusable patterns, and documented guidelines.
          </p>
        </Card>
        <Card className="p-6 bg-primary/10 border-primary/20">
          <h3 className="mb-3 text-primary">Solution</h3>
          <p className="text-muted-foreground">
            Modular design system with 50+ components, accessibility guidelines, and comprehensive documentation.
          </p>
        </Card>
      </div>

      <div>
        <h2 className="mb-6">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">{step.title}</h4>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    {step.code && (
                      <code className="block bg-muted p-3 rounded text-foreground" style={{ fontSize: '0.75rem' }}>
                        {step.code}
                      </code>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-4">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="mb-1">50+ Production-Ready Components</h4>
                <p className="text-muted-foreground">
                  Comprehensive library covering all common UI patterns and use cases.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="mb-1">Accessibility First</h4>
                <p className="text-muted-foreground">WCAG 2.1 AA compliant with keyboard and screen reader support.</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="mb-1">Theme Support</h4>
                <p className="text-muted-foreground">
                  Built-in light and dark modes with customizable design tokens.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="mb-1">TypeScript Support</h4>
                <p className="text-muted-foreground">Full type safety with comprehensive TypeScript definitions.</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="mb-1">Responsive Design</h4>
                <p className="text-muted-foreground">Mobile-first approach with responsive variants for all components.</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="mb-1">Performance Optimized</h4>
                <p className="text-muted-foreground">Lightweight components with minimal bundle size impact.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-primary text-primary-foreground">
        <h3 className="mb-3">Expected Results</h3>
        <div className="space-y-2">
          <p>• 40% reduction in design-to-development time</p>
          <p>• Improved UI consistency across all products</p>
          <p>• 100% WCAG AA compliance across components</p>
          <p>• Reduced technical debt and maintenance overhead</p>
          <p>• Faster onboarding for new team members</p>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent border-primary/20">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="mb-3">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Explore the component library, try the live playground, and start building consistent, accessible interfaces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>
              View Components
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline">
              Try Playground
            </Button>
            <Button variant="ghost">
              Read Docs
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
