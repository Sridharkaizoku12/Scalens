import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BasicStartup } from "@/types/startup";
import { BarChart3, ChevronDown, Plus, Settings, User, Zap } from "lucide-react";

// Mock data - in real app this would come from Supabase
const mockStartups: BasicStartup[] = [
  { id: '1', name: 'ScaleLens', stage: 'MVP', revenue: 12000 },
  { id: '2', name: 'HealthAI', stage: 'Early Traction', revenue: 8500 },
  { id: '3', name: 'AgroTech', stage: 'Scaling', revenue: 45000 },
];

interface NavigationProps {
  currentStartup?: BasicStartup;
  onStartupChange?: (startup: BasicStartup) => void;
}

export const Navigation = ({ currentStartup, onStartupChange }: NavigationProps) => {
  const [selectedStartup, setSelectedStartup] = useState<BasicStartup>(
    currentStartup || mockStartups[0]
  );

  const handleStartupChange = (startup: BasicStartup) => {
    setSelectedStartup(startup);
    onStartupChange?.(startup);
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Startup Selector */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI Co-Founder
              </span>
            </div>

            {/* Startup Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-left p-2 h-auto">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm">
                      <div className="font-medium">{selectedStartup.name}</div>
                      <div className="text-muted-foreground text-xs">
                        ${selectedStartup.revenue.toLocaleString()}/mo • {selectedStartup.stage}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {mockStartups.map((startup) => (
                  <DropdownMenuItem
                    key={startup.id}
                    onClick={() => handleStartupChange(startup)}
                    className="p-3"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <div className="font-medium">{startup.name}</div>
                        <div className="text-sm text-muted-foreground">
                          ${startup.revenue.toLocaleString()}/mo • {startup.stage}
                        </div>
                      </div>
                      {startup.id === selectedStartup.id && (
                        <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="p-3 border-t border-border mt-1">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Startup
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            
            <Badge variant="secondary" className="bg-brand-accent/10 text-brand-accent border-brand-accent/20">
              Pro Plan
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};