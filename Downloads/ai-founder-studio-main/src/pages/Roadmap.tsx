import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Zap, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Calendar,
  Rocket,
  Brain,
  BarChart3,
  Users,
  Shield,
  Smartphone,
  Globe,
  Workflow
} from "lucide-react";

const Roadmap = () => {
  const navigate = useNavigate();

  const roadmapItems = [
    // Q1 2024 (Completed)
    {
      quarter: "Q1 2024",
      status: "completed",
      items: [
        {
          title: "MVP Launch",
          description: "Core dashboard with startup metrics tracking and basic AI insights",
          icon: Rocket,
          status: "completed"
        },
        {
          title: "Multi-Startup Management",
          description: "Switch between multiple startups in one account",
          icon: BarChart3,
          status: "completed"
        },
        {
          title: "Growth Predictions",
          description: "ML-powered runway and revenue forecasting",
          icon: Brain,
          status: "completed"
        }
      ]
    },
    // Q2 2024 (In Progress)
    {
      quarter: "Q2 2024",
      status: "in-progress",
      items: [
        {
          title: "AI Co-Founder Chat",
          description: "Interactive AI assistant for strategic guidance and Q&A",
          icon: Brain,
          status: "in-progress"
        },
        {
          title: "Advanced Analytics",
          description: "Cohort analysis, funnel optimization, and custom KPI tracking",
          icon: BarChart3,
          status: "in-progress"
        },
        {
          title: "Team Collaboration",
          description: "Multi-user accounts with role-based permissions",
          icon: Users,
          status: "planned"
        }
      ]
    },
    // Q3 2024 (Planned)
    {
      quarter: "Q3 2024",
      status: "planned",
      items: [
        {
          title: "Mobile Applications",
          description: "Native iOS and Android apps for on-the-go insights",
          icon: Smartphone,
          status: "planned"
        },
        {
          title: "Integration Hub",
          description: "Connect with Stripe, HubSpot, Google Analytics, and more",
          icon: Workflow,
          status: "planned"
        },
        {
          title: "Custom AI Models",
          description: "Train personalized AI models on your industry and startup data",
          icon: Brain,
          status: "planned"
        }
      ]
    },
    // Q4 2024 (Future)
    {
      quarter: "Q4 2024",
      status: "future",
      items: [
        {
          title: "Investor Dashboard",
          description: "Share real-time metrics and insights with investors",
          icon: Shield,
          status: "future"
        },
        {
          title: "Global Market Intelligence",
          description: "Industry benchmarks and competitive analysis worldwide",
          icon: Globe,
          status: "future"
        },
        {
          title: "Advanced Security",
          description: "SOC 2 compliance, SSO, and enterprise-grade security",
          icon: Shield,
          status: "future"
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-brand-accent" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-brand-warning" />;
      case "planned":
        return <Calendar className="w-4 h-4 text-brand-secondary" />;
      case "future":
        return <Calendar className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Calendar className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-brand-accent/10 text-brand-accent border-brand-accent/20";
      case "in-progress":
        return "bg-brand-warning/10 text-brand-warning border-brand-warning/20";
      case "planned":
        return "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20";
      case "future":
        return "bg-muted/50 text-muted-foreground border-muted/20";
      default:
        return "bg-muted/50 text-muted-foreground border-muted/20";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "✅ Completed";
      case "in-progress":
        return "🚧 In Progress";
      case "planned":
        return "📅 Planned";
      case "future":
        return "🔮 Future";
      default:
        return "📅 Planned";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  AI Co-Founder
                </span>
              </div>
            </div>
            <Button onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
            <Rocket className="w-3 h-3 mr-1" />
            Product Roadmap
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Building the Future of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what we're building next to help founders make smarter decisions and accelerate their startup growth. 
            Your feedback shapes our roadmap!
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          {roadmapItems.map((quarter, quarterIndex) => (
            <div key={quarterIndex} className="space-y-6">
              {/* Quarter Header */}
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-foreground">
                  {quarter.quarter}
                </div>
                <Badge className={getStatusColor(quarter.status)}>
                  {getStatusLabel(quarter.status)}
                </Badge>
              </div>

              {/* Quarter Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quarter.items.map((item, itemIndex) => (
                  <Card 
                    key={itemIndex} 
                    className={`group transition-all duration-300 bg-gradient-card border-border/50 ${
                      item.status === 'completed' 
                        ? 'hover:shadow-glow' 
                        : item.status === 'in-progress'
                        ? 'hover:shadow-lg border-brand-warning/30'
                        : 'hover:shadow-md'
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          item.status === 'completed' 
                            ? 'bg-brand-accent/20' 
                            : item.status === 'in-progress'
                            ? 'bg-brand-warning/20'
                            : 'bg-muted/50'
                        }`}>
                          <item.icon className={`w-5 h-5 ${
                            item.status === 'completed'
                              ? 'text-brand-accent'
                              : item.status === 'in-progress'
                              ? 'text-brand-warning'
                              : 'text-muted-foreground'
                          }`} />
                        </div>
                        {getStatusIcon(item.status)}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quarter Divider */}
              {quarterIndex < roadmapItems.length - 1 && (
                <div className="border-t border-border/30 my-8" />
              )}
            </div>
          ))}
        </div>

        {/* Feature Request CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-2xl border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Have a feature request?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're constantly evolving based on founder feedback. Let us know what features 
            would help you grow your startup faster!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Request Feature
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')}>
              Try Current Features
            </Button>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Completed", count: 3, color: "text-brand-accent" },
            { label: "In Progress", count: 2, color: "text-brand-warning" },
            { label: "Planned", count: 4, color: "text-brand-secondary" },
            { label: "Future", count: 3, color: "text-muted-foreground" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.count}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Roadmap;