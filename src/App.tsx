import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { GettingStarted } from "./components/GettingStarted";
import { DesignPrinciples } from "./components/DesignPrinciples";
import { ColorPalette } from "./components/ColorPalette";
import { TypographyGuide } from "./components/TypographyGuide";
import { ComponentShowcase } from "./components/ComponentShowcase";
import { AccessibilityGuide } from "./components/AccessibilityGuide";
import { LivePlayground } from "./components/LivePlayground";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { CaseStudies } from "./components/CaseStudies";
import { Toaster } from "./components/ui/sonner";
import { Button } from "./components/ui/button";
import { Moon, Sun, Menu, Github, ArrowUp } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show scroll to top button when scrolled down
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const navigation = [
    { id: "overview", label: "Overview" },
    { id: "principles", label: "Principles" },
    { id: "components", label: "Components" },
    { id: "playground", label: "Playground" },
    { id: "case-studies", label: "Case Studies" },
    { id: "metrics", label: "Metrics" },
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "accessibility", label: "Accessibility" },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Toaster />

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          size="icon"
          className="fixed bottom-8 right-8 z-50 shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
      
      {/* Announcement Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center" style={{ fontSize: '0.875rem' }}>
        <p>
          🎨 Portfolio Showcase Project • Design System with 50+ Components • 
          <span className="ml-2">Built with React, TypeScript & Tailwind CSS</span>
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground transition-transform hover:scale-105">
                DS
              </div>
              <div>
                <h4 className="leading-none mb-1">Design System</h4>
                <p className="text-muted-foreground leading-none" style={{ fontSize: '0.75rem' }}>
                  v1.8.2
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col gap-4 mt-8">
                    {navigation.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8 overflow-x-auto pb-2">
            <TabsList className="inline-flex w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="principles">Principles</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="playground">Playground</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview">
            <GettingStarted />
          </TabsContent>

          <TabsContent value="principles">
            <DesignPrinciples />
          </TabsContent>

          <TabsContent value="components">
            <ComponentShowcase />
          </TabsContent>

          <TabsContent value="playground">
            <LivePlayground />
          </TabsContent>

          <TabsContent value="case-studies">
            <CaseStudies />
          </TabsContent>

          <TabsContent value="metrics">
            <MetricsDashboard />
          </TabsContent>

          <TabsContent value="colors">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="typography">
            <TypographyGuide />
          </TabsContent>

          <TabsContent value="accessibility">
            <AccessibilityGuide />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  DS
                </div>
                <h4>Design System</h4>
              </div>
              <p className="text-muted-foreground">
                Building better products through consistent, accessible design.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Playground</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Figma</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 Design System. Built for portfolio showcase.</p>
            <p className="text-muted-foreground">Version 1.8.2</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
