import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { StartupCard } from "@/components/ui/startup-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Startup } from "@/types/startup";
import { 
  Plus, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Zap,
  AlertTriangle,
  Target
} from "lucide-react";

// Mock data - would come from Supabase in real app
const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'ScaleLens',
    industry: 'SaaS',
    stage: 'MVP',
    revenue: 12000,
    burn: 6000,
    runway: 8.5,
    cac: 45,
    ltv: 540,
    users: 1250,
    churn: 5.2,
    growthRate: 12.5,
    riskLevel: 'medium' as const,
    nextSteps: [
      'Focus on LinkedIn outbound → CAC = $50 → ROI = 3.2x',
      'Optimize onboarding flow to reduce churn by 15%',
      'Prepare $150k pre-seed raise for Q2'
    ]
  },
  {
    id: '2',
    name: 'HealthAI',
    industry: 'HealthTech',
    stage: 'Early Traction',
    revenue: 8500,
    burn: 4200,
    runway: 14.2,
    cac: 65,
    ltv: 890,
    users: 950,
    churn: 3.8,
    growthRate: 8.3,
    riskLevel: 'low' as const,
    nextSteps: [
      'Scale content marketing → 40% organic growth',
      'Launch enterprise tier with $500/mo pricing',
      'Build strategic partnerships with hospitals'
    ]
  },
  {
    id: '3',
    name: 'AgroTech',
    industry: 'AgTech',
    stage: 'Scaling',
    revenue: 45000,
    burn: 12000,
    runway: 18.7,
    cac: 120,
    ltv: 2400,
    users: 3800,
    churn: 2.1,
    growthRate: 23.1,
    riskLevel: 'low' as const,
    nextSteps: [
      'Expand to 3 new geographic markets',
      'Launch Series A fundraising → $2M target',
      'Hire VP of Sales and 2 AEs'
    ]
  }
];

const Dashboard = () => {
  const [selectedStartup, setSelectedStartup] = useState(mockStartups[0]);

  const handleStartupChange = (basicStartup: { id: string; name: string; stage: string; revenue: number }) => {
    // Find the full startup data from our mock data
    const fullStartup = mockStartups.find(s => s.id === basicStartup.id);
    if (fullStartup) {
      setSelectedStartup(fullStartup);
    }
  };

  // Calculate aggregated metrics
  const totalRevenue = mockStartups.reduce((sum, startup) => sum + startup.revenue, 0);
  const totalUsers = mockStartups.reduce((sum, startup) => sum + startup.users, 0);
  const avgGrowthRate = mockStartups.reduce((sum, startup) => sum + startup.growthRate, 0) / mockStartups.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentStartup={selectedStartup} 
        onStartupChange={handleStartupChange}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, Founder 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's what's happening with your startups today
              </p>
            </div>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all">
              <Plus className="w-4 h-4 mr-2" />
              Add Startup
            </Button>
          </div>

          {/* Quick Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="w-4 h-4 text-brand-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  ${totalRevenue.toLocaleString()}/mo
                </div>
                <div className="flex items-center text-xs">
                  <TrendingUp className="w-3 h-3 mr-1 text-brand-accent" />
                  <span className="text-brand-accent">+{avgGrowthRate.toFixed(1)}% avg growth</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Startups
                  </CardTitle>
                  <BarChart3 className="w-4 h-4 text-brand-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {mockStartups.length}
                </div>
                <div className="text-xs text-muted-foreground">
                  Across {new Set(mockStartups.map(s => s.industry)).size} industries
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Users
                  </CardTitle>
                  <Users className="w-4 h-4 text-brand-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {totalUsers.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">
                  Across all startups
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    AI Insights
                  </CardTitle>
                  <Zap className="w-4 h-4 text-brand-warning" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  12
                </div>
                <div className="text-xs text-muted-foreground">
                  New recommendations
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Startup Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">Your Startups</h2>
              <Badge variant="secondary" className="bg-brand-accent/10 text-brand-accent border-brand-accent/20">
                {mockStartups.length} Active
              </Badge>
            </div>

            <div className="grid gap-6">
              {mockStartups.map((startup) => (
                <StartupCard 
                  key={startup.id} 
                  startup={startup}
                  onViewDetails={() => console.log('View details for:', startup.name)}
                />
              ))}
            </div>
          </div>

          {/* AI Assistant & Insights */}
          <div className="space-y-6">
            {/* AI Co-Founder Chat */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Co-Founder</CardTitle>
                    <CardDescription>Your strategic growth assistant</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                  <p className="text-sm text-foreground font-medium">
                    💡 Based on your metrics, I recommend:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ScaleLens should focus on reducing CAC through LinkedIn outbound. 
                    This could improve ROI by 40% within 8 weeks.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask AI Co-Founder
                </Button>
              </CardContent>
            </Card>

            {/* Critical Alerts */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-brand-warning" />
                  <CardTitle className="text-lg">Critical Alerts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-brand-warning/10 border border-brand-warning/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-brand-warning rounded-full" />
                    <span className="text-sm font-medium text-foreground">ScaleLens</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Runway dropping below 10 months. Consider fundraising or reducing burn.
                  </p>
                </div>
                <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                    <span className="text-sm font-medium text-foreground">HealthAI</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Ready for Series A! Growth metrics exceed benchmarks.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Generate Growth Playbook
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Update Startup Metrics
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Predictions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;