import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export function AccessibilityGuide() {
  const wcagCriteria = [
    {
      level: "A",
      criteria: [
        "All interactive elements are keyboard accessible",
        "Color is not the only visual means of conveying information",
        "Text alternatives for non-text content",
        "Captions for audio content",
      ],
    },
    {
      level: "AA",
      criteria: [
        "Minimum contrast ratio of 4.5:1 for normal text",
        "Minimum contrast ratio of 3:1 for large text",
        "Text can be resized up to 200% without loss of content",
        "No keyboard trap - users can navigate away from any component",
      ],
    },
    {
      level: "AAA",
      criteria: [
        "Enhanced contrast ratio of 7:1 for normal text",
        "Enhanced contrast ratio of 4.5:1 for large text",
        "No timing requirements for interactions",
        "Detailed focus indicators on all interactive elements",
      ],
    },
  ];

  const features = [
    {
      title: "Keyboard Navigation",
      description:
        "All components support full keyboard navigation with Tab, Enter, Escape, and arrow keys. Focus management is handled automatically.",
    },
    {
      title: "Screen Reader Support",
      description:
        "Semantic HTML and ARIA labels ensure components are properly announced by screen readers. Live regions announce dynamic changes.",
    },
    {
      title: "Focus Management",
      description:
        "Clear focus indicators on all interactive elements. Focus is automatically managed in modals, dialogs, and complex components.",
    },
    {
      title: "Color Contrast",
      description:
        "All color combinations meet or exceed WCAG AA standards. Text has a minimum contrast ratio of 4.5:1 against backgrounds.",
    },
    {
      title: "Touch Targets",
      description:
        "All interactive elements have a minimum touch target size of 44x44 pixels for comfortable mobile interaction.",
    },
    {
      title: "Motion Preferences",
      description:
        "Respects prefers-reduced-motion settings. Animations can be disabled for users who prefer reduced motion.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2>Accessibility Guidelines</h2>
        <p className="text-muted-foreground mt-2">
          Our design system is built to be accessible to everyone, meeting WCAG 2.1 AA standards as a baseline.
        </p>
      </div>

      <Card className="p-6 bg-accent">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary text-primary-foreground rounded-lg">
            <Check className="w-6 h-6" />
          </div>
          <div>
            <h3 className="mb-2">WCAG 2.1 AA Compliant</h3>
            <p className="text-muted-foreground">
              All components meet or exceed Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="mb-4">Accessibility Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <Card key={feature.title} className="p-4">
              <h4 className="mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4">WCAG Compliance Levels</h3>
        <div className="space-y-4">
          {wcagCriteria.map((level) => (
            <Card key={level.level} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge>{level.level}</Badge>
                <h4>Level {level.level} Criteria</h4>
              </div>
              <ul className="space-y-2">
                {level.criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6">
        <h3 className="mb-4">Testing Checklist</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 text-primary" />
            <div>
              <p>Test with keyboard only - no mouse interaction</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 text-primary" />
            <div>
              <p>Verify with screen readers (NVDA, JAWS, VoiceOver)</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 text-primary" />
            <div>
              <p>Check color contrast ratios with automated tools</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 text-primary" />
            <div>
              <p>Test with browser zoom at 200%</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 text-primary" />
            <div>
              <p>Validate HTML semantics and ARIA attributes</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 text-primary" />
            <div>
              <p>Test with reduced motion preferences enabled</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-3">Resources</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/</li>
          <li>• WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/</li>
          <li>• ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/</li>
          <li>• Axe DevTools: Browser extension for accessibility testing</li>
        </ul>
      </Card>
    </div>
  );
}
