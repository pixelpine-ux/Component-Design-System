import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      category: "Product",
      description:
        "Implemented design system across entire e-commerce platform, reducing development time by 50% and improving user satisfaction scores by 35%.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      metrics: [
        { label: "Components Reused", value: "42" },
        { label: "Dev Time Saved", value: "50%" },
        { label: "User Satisfaction", value: "+35%" },
      ],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Admin Dashboard",
      category: "Internal Tools",
      description:
        "Built comprehensive admin dashboard using design system components. Achieved 100% WCAG AA compliance and reduced onboarding time for new developers by 60%.",
      tags: ["Accessibility", "Data Visualization", "Forms"],
      metrics: [
        { label: "WCAG Compliance", value: "100%" },
        { label: "Onboarding Time", value: "-60%" },
        { label: "Code Reusability", value: "85%" },
      ],
      image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    },
    {
      title: "Psudo Mobile Banking App",
      category: "Mobile",
      description:
        "Created responsive mobile-first experience using design system. Improved load time by 40% through optimized component architecture.",
      tags: ["Mobile", "Performance", "Security"],
      metrics: [
        { label: "Load Time", value: "-40%" },
        { label: "Mobile Score", value: "98/100" },
        { label: "User Retention", value: "+28%" },
      ],
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2>Case Studies</h2>
        <p className="text-muted-foreground mt-2">
          Real-world applications of our design system across different products and use cases.
        </p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((study) => (
          <Card key={study.title} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className={`${study.image} flex items-center justify-center p-12 border-r border-border`}>
                <div className="text-center">
                  <Badge className="mb-2">{study.category}</Badge>
                  <h3 className="mb-2">{study.title}</h3>
                </div>
              </div>
              <div className="lg:col-span-2 p-6 space-y-4">
                <p className="text-muted-foreground">{study.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-3 bg-muted/30 rounded-lg">
                      <div className="mb-1">{metric.value}</div>
                      <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button variant="outline" size="sm">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-accent">
        <h3 className="mb-3">Impact Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="mb-2">3+</div>
            <p className="text-muted-foreground">Major Projects</p>
          </div>
          <div>
            <div className="mb-2">12</div>
            <p className="text-muted-foreground">Teams Using</p>
          </div>
          <div>
            <div className="mb-2">$2M+</div>
            <p className="text-muted-foreground">Estimated Savings</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
