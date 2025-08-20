import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  Users, 
  Zap,
  ArrowRight 
} from "lucide-react";

interface StartupData {
  id: string;
  name: string;
  industry: string;
  stage: string;
  revenue: number;
  burn: number;
  runway: number;
  cac: number;
  ltv: number;
  users: number;
  churn: number;
  growthRate: number;
  riskLevel: 'low' | 'medium' | 'high';
  nextSteps: string[];
}

interface StartupCardProps {
  startup: StartupData;
  onViewDetails?: () => void;
}

export const StartupCard = ({ startup, onViewDetails }: StartupCardProps) => {
  const runwayMonths = Math.floor(startup.runway);
  const riskColor = {
    low: 'text-brand-accent',
    medium: 'text-brand-warning', 
    high: 'text-brand-error'
  }[startup.riskLevel];

  const riskBg = {
    low: 'bg-brand-accent/10 border-brand-accent/20',
    medium: 'bg-brand-warning/10 border-brand-warning/20',
    high: 'bg-brand-error/10 border-brand-error/20'
  }[startup.riskLevel];

  return (
    <Card className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {startup.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{startup.industry}</p>
          </div>
          <Badge variant="secondary" className={riskBg}>
            <span className={riskColor}>{startup.stage}</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center text-xs text-muted-foreground">
              <DollarSign className="w-3 h-3 mr-1" />
              Revenue
            </div>
            <div className="text-lg font-semibold text-foreground">
              ${startup.revenue.toLocaleString()}/mo
            </div>
            <div className="flex items-center text-xs">
              {startup.growthRate > 0 ? (
                <TrendingUp className="w-3 h-3 mr-1 text-brand-accent" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1 text-brand-error" />
              )}
              <span className={startup.growthRate > 0 ? 'text-brand-accent' : 'text-brand-error'}>
                {startup.growthRate > 0 ? '+' : ''}{startup.growthRate}%
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1" />
              Runway
            </div>
            <div className="text-lg font-semibold text-foreground">
              {runwayMonths} months
            </div>
            <div className="text-xs text-muted-foreground">
              Burn: ${startup.burn.toLocaleString()}/mo
            </div>
          </div>
        </div>

        {/* Runway Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Cash Runway</span>
            <span className={`font-medium ${runwayMonths < 6 ? 'text-brand-error' : runwayMonths < 12 ? 'text-brand-warning' : 'text-brand-accent'}`}>
              {runwayMonths < 6 ? 'Critical' : runwayMonths < 12 ? 'Warning' : 'Healthy'}
            </span>
          </div>
          <Progress 
            value={Math.min(runwayMonths * 5, 100)} 
            className="h-2"
          />
        </div>

        {/* Additional Metrics */}
        <div className="flex justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <Users className="w-3 h-3 mr-1" />
            {startup.users.toLocaleString()} users
          </div>
          <div className="text-muted-foreground">
            LTV/CAC: {(startup.ltv / startup.cac).toFixed(1)}x
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-primary/5 border border-primary/20 rounded-lg p-3">
          <div className="flex items-center text-xs font-medium text-primary mb-1">
            <Zap className="w-3 h-3 mr-1" />
            AI Insights
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Next recommended action based on growth patterns
          </p>
          <div className="text-xs text-foreground">
            {startup.nextSteps[0]}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
          onClick={onViewDetails}
        >
          View Growth Playbook
          <ArrowRight className="w-3 h-3 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};