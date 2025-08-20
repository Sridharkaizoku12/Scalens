export interface Startup {
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

export interface BasicStartup {
  id: string;
  name: string;
  stage: string;
  revenue: number;
}