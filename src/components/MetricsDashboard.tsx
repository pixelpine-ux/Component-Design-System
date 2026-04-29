import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { TrendingUp, Clock, Users, Zap, CheckCircle2, Code } from "lucide-react";

export function MetricsDashboard() {
  const metrics = [
    {
      icon: Clock,
      label: "Time Saved",
      value: "40%",
      description: "Reduction in design-to-development time",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      icon: CheckCircle2,
      label: "Consistency Score",
      value: "95%",
      description: "UI consistency across products",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: Users,
      label: "Team Adoption",
      value: "12",
      description: "Teams actively using the system",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      icon: Zap,
      label: "Performance",
      value: "< 50kb",
      description: "Average bundle size per component",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
    },
  ];

  const adoption = [
    { name: "Product Team", progress: 100, status: "complete" },
    { name: "Marketing", progress: 85, status: "in-progress" },
    { name: "Customer Portal", progress: 90, status: "in-progress" },
    { name: "Admin Dashboard", progress: 75, status: "in-progress" },
  ];

  const componentUsage = [
    { name: "Button", usage: 1240, growth: "+15%" },
    { name: "Card", usage: 890, growth: "+22%" },
    { name: "Input", usage: 756, growth: "+18%" },
    { name: "Badge", usage: 645, growth: "+30%" },
    { name: "Alert", usage: 423, growth: "+12%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2>Impact Metrics</h2>
        <p className="text-muted-foreground mt-2">
          Real-world data showing the measurable impact of our design system across the organization.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="p-6">
              <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="mb-1">{metric.value}</div>
              <p className="text-muted-foreground">{metric.description}</p>
            </Card>
          );
        })}
      </div>

      {/* Team Adoption */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="mb-1">Team Adoption</h3>
            <p className="text-muted-foreground">Design system usage across teams</p>
          </div>
          <Badge variant="secondary">
            <TrendingUp className="w-3 h-3 mr-1" />
            Growing
          </Badge>
        </div>
        <div className="space-y-6">
          {adoption.map((team) => (
            <div key={team.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">{team.name}</span>
                <span>{team.progress}%</span>
              </div>
              <Progress value={team.progress} />
            </div>
          ))}
        </div>
      </Card>

      {/* Component Usage */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="mb-1">Top Components</h3>
          <p className="text-muted-foreground">Most frequently used components (last 30 days)</p>
        </div>
        <div className="space-y-4">
          {componentUsage.map((component, index) => (
            <div key={component.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded bg-muted text-muted-foreground">
                  {index + 1}
                </div>
                <div>
                  <p>{component.name}</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    {component.usage.toLocaleString()} instances
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="text-chart-2">
                {component.growth}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-2">
            <Code className="w-5 h-5 text-muted-foreground" />
            <Badge variant="outline">Active</Badge>
          </div>
          <div className="mb-1">54</div>
          <p className="text-muted-foreground">Total Components</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-2">
            <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
            <Badge variant="outline">Tested</Badge>
          </div>
          <div className="mb-1">100%</div>
          <p className="text-muted-foreground">WCAG AA Compliant</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-muted-foreground" />
            <Badge variant="outline">Updated</Badge>
          </div>
          <div className="mb-1">v1.8.2</div>
          <p className="text-muted-foreground">Latest Version</p>
        </Card>
      </div>

      <Card className="p-6 bg-accent">
        <h3 className="mb-3">Success Stories</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-primary pl-4">
            <p className="mb-1">"Reduced our component development time by 60%"</p>
            <p className="text-muted-foreground">— Product Engineering Team</p>
          </div>
          <div className="border-l-2 border-primary pl-4">
            <p className="mb-1">"Accessibility compliance is now built-in, not an afterthought"</p>
            <p className="text-muted-foreground">— QA & Accessibility Team</p>
          </div>
          <div className="border-l-2 border-primary pl-4">
            <p className="mb-1">"Onboarding new designers is 3x faster with consistent patterns"</p>
            <p className="text-muted-foreground">— Design Team Lead</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
