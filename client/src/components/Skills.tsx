import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface SkillsProps {
  technical: string[];
  soft: string[];
}

export function Skills({ technical, soft }: SkillsProps) {
  const { theme } = useTheme();

  const getCardStyles = () => {
    switch (theme) {
      case "neo":
        return "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white rounded-none";
      case "glass":
        return "bg-white/10 backdrop-blur-lg border-white/20 text-white";
      case "swiss":
        return "border-none shadow-none bg-gray-50";
      default:
        return "";
    }
  };

  const getBadgeStyles = (type: "technical" | "soft") => {
    const baseStyles = "text-sm py-1 px-3";
    
    switch (theme) {
      case "neo":
        return cn(
          baseStyles,
          "border-2 border-black rounded-none font-bold",
          type === "technical" ? "bg-[#FF6B6B] text-black" : "bg-[#4ECDC4] text-black"
        );
      case "glass":
        return cn(
          baseStyles,
          "backdrop-blur-md border-white/10",
          type === "technical" 
            ? "bg-blue-500/20 text-blue-100 hover:bg-blue-500/30" 
            : "bg-purple-500/20 text-purple-100 hover:bg-purple-500/30"
        );
      case "swiss":
        return cn(
          baseStyles,
          "rounded-full font-medium",
          type === "technical" 
            ? "bg-black text-white" 
            : "bg-gray-200 text-gray-900"
        );
      default:
        return baseStyles;
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className={cn("h-full", getCardStyles())}>
        <CardHeader>
          <CardTitle className={cn(
            "text-xl font-bold",
            theme === "swiss" && "text-3xl tracking-tight"
          )}>
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technical.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={getBadgeStyles("technical")}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className={cn("h-full", getCardStyles())}>
        <CardHeader>
          <CardTitle className={cn(
            "text-xl font-bold",
            theme === "swiss" && "text-3xl tracking-tight"
          )}>
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {soft.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={getBadgeStyles("soft")}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
