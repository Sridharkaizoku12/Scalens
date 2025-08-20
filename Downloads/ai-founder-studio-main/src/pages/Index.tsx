import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Zap, 
  BarChart3, 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign,
  Rocket,
  ArrowRight,
  Check
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI Co-Founder
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => navigate('/pricing')}>
                Pricing
              </Button>
              <Button variant="ghost" onClick={() => navigate('/roadmap')}>
                Roadmap
              </Button>
              <Button onClick={() => navigate('/dashboard')}>
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                  <Rocket className="w-3 h-3 mr-1" />
                  AI-Powered Growth Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your AI Co-Founder for{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Startup Growth
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Get personalized growth playbooks, predict your runway, and make data-driven decisions 
                  with AI-powered insights tailored for startup founders.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all"
                  onClick={() => navigate('/dashboard')}
                >
                  Start Building Growth
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Startups Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">87%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">12mo</div>
                  <div className="text-sm text-muted-foreground">Avg Runway Extension</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Co-Founder Dashboard" 
                className="rounded-2xl shadow-2xl border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
              Core Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Everything you need to scale your startup
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From growth predictions to personalized playbooks, get all the tools you need in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Multi-Startup Dashboard",
                description: "Manage multiple startups from one unified dashboard with real-time metrics and insights.",
                color: "text-brand-primary"
              },
              {
                icon: Brain,
                title: "AI Growth Playbooks",
                description: "Get personalized, step-by-step growth strategies based on your startup's unique metrics.",
                color: "text-brand-secondary"
              },
              {
                icon: Target,
                title: "Runway Prediction",
                description: "Predict your cash runway with 87% accuracy and get alerts before critical milestones.",
                color: "text-brand-accent"
              },
              {
                icon: TrendingUp,
                title: "Growth Forecasting",
                description: "ML-powered predictions for revenue, user growth, and key performance indicators.",
                color: "text-brand-warning"
              },
              {
                icon: Users,
                title: "AI Co-Founder Chat",
                description: "Ask questions and get instant strategic advice from your AI co-founder assistant.",
                color: "text-brand-primary"
              },
              {
                icon: DollarSign,
                title: "Fundraising Insights",
                description: "Optimize your fundraising strategy with data-driven recommendations and timing predictions.",
                color: "text-brand-secondary"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader>
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-2`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to accelerate your startup growth?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of founders who are using AI to make smarter growth decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all"
                onClick={() => navigate('/dashboard')}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/pricing')}>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI Co-Founder
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button onClick={() => navigate('/pricing')}>Pricing</button>
              <button onClick={() => navigate('/roadmap')}>Roadmap</button>
              <span>© 2024 AI Co-Founder. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;