import { Card } from "./ui/card";
import { Accessibility, Layers, Zap, Users, Shield, Palette } from "lucide-react";

export function DesignPrinciples() {
  const principles = [
    {
      icon: Accessibility,
      title: "Accessibility First",
      description:
        "Every component is built with accessibility in mind. WCAG 2.1 AA compliance is our minimum standard, with keyboard navigation and screen reader support throughout.",
    },
    {
      icon: Layers,
      title: "Consistency",
      description:
        "Unified patterns and components ensure a cohesive experience across all products. Shared visual language reduces cognitive load for users.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Lightweight, optimized components that load fast and run smoothly. Every component is tested for performance impact and optimized for production.",
    },
    {
      icon: Users,
      title: "User-Centered",
      description:
        "Designed based on real user needs and behaviors. Regular usability testing ensures our components solve actual problems.",
    },
    {
      icon: Shield,
      title: "Robust & Reliable",
      description:
        "Thoroughly tested components with comprehensive error handling. Built to handle edge cases and work reliably in production environments.",
    },
    {
      icon: Palette,
      title: "Flexible & Themeable",
      description:
        "Customizable design tokens allow for brand-specific theming while maintaining consistency. Light and dark modes are supported by default.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2>Design Principles</h2>
        <p className="text-muted-foreground mt-2">
          Our design system is built on six core principles that guide every decision we make.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <Card key={principle.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Implementation Guidelines</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2">Component Architecture</h4>
            <p className="text-muted-foreground">
              All components follow a modular architecture using React and TypeScript. Each component is self-contained
              with its own styles, logic, and documentation.
            </p>
          </div>
          <div>
            <h4 className="mb-2">Design Tokens</h4>
            <p className="text-muted-foreground">
              CSS custom properties (variables) are used for all design decisions including colors, spacing, and typography.
              This allows for easy theming and consistent styling.
            </p>
          </div>
          <div>
            <h4 className="mb-2">Testing Standards</h4>
            <p className="text-muted-foreground">
              Every component includes unit tests, accessibility tests, and visual regression tests. We maintain 90%+ code
              coverage across the design system.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-accent">
        <h3 className="mb-3">Benefits & Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div>
            <div className="mb-2">40%</div>
            <p className="text-muted-foreground">Faster design-to-development time</p>
          </div>
          <div>
            <div className="mb-2">50+</div>
            <p className="text-muted-foreground">Reusable components</p>
          </div>
          <div>
            <div className="mb-2">100%</div>
            <p className="text-muted-foreground">WCAG AA compliance</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
