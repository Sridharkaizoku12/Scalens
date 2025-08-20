import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Check, 
  Zap, 
  ArrowLeft, 
  Star,
  BarChart3,
  Brain,
  MessageSquare,
  Shield,
  Users,
  Infinity
} from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for solo founders getting started",
      features: [
        "1 Startup dashboard",
        "Basic growth metrics",
        "AI insights (5/month)",
        "Community support",
        "Mobile app access"
      ],
      limitations: [
        "Limited AI recommendations",
        "Basic analytics only"
      ],
      cta: "Get Started Free",
      popular: false,
      icon: BarChart3
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Everything you need to scale multiple startups",
      features: [
        "Unlimited startups",
        "Advanced growth playbooks",
        "AI Co-Founder chat (unlimited)",
        "Runway predictions",
        "Custom growth models",
        "Priority support",
        "API access",
        "Export capabilities"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      icon: Brain
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Multi-team collaboration",
        "Custom AI model training",
        "Dedicated success manager",
        "SLA guarantee",
        "On-premise deployment",
        "Custom integrations",
        "Advanced security & compliance"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      icon: Shield
    }
  ];

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
            <Star className="w-3 h-3 mr-1" />
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Choose Your Growth Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. All plans include our core AI-powered insights 
            to help you make better startup decisions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 ${
                plan.popular 
                  ? 'border-brand-primary/50 shadow-glow bg-gradient-card' 
                  : 'bg-gradient-card border-border/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-muted'
                  }`}>
                    <plan.icon className={`w-5 h-5 ${
                      plan.popular ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  {plan.name === "Pro" && (
                    <p className="text-xs text-brand-accent">14-day free trial</p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow transition-all' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => {
                    if (plan.name === 'Enterprise') {
                      // In real app, open contact form or email
                      console.log('Contact sales');
                    } else {
                      navigate('/dashboard');
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our pricing and features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I switch plans anytime?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any differences."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your data remains accessible for 30 days after cancellation. You can export everything or reactivate your account anytime during this period."
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer: "Yes! Annual subscribers get 2 months free (20% discount) and priority support. Perfect for committed founders scaling long-term."
              },
              {
                question: "How accurate are the AI predictions?",
                answer: "Our AI models achieve 87% accuracy on average, trained on thousands of real startup data points. Accuracy improves as you input more data."
              },
              {
                question: "Can I connect multiple team members?",
                answer: "Pro plans support up to 5 team members. Enterprise plans have unlimited seats with advanced collaboration features."
              },
              {
                question: "Is there an API for custom integrations?",
                answer: "Yes! Pro and Enterprise plans include full API access to integrate with your existing tools and workflows."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-2xl border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to supercharge your startup growth?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of founders who are already using AI Co-Founder to make smarter 
            decisions and accelerate their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all"
              onClick={() => navigate('/dashboard')}
            >
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Talk to Sales
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;