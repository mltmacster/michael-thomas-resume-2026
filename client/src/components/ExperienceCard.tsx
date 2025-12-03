import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export function ExperienceCard({ role, company, location, period, achievements }: ExperienceCardProps) {
  const { theme } = useTheme();

  return (
    <div className={cn(
      "mb-8 p-6 rounded-xl transition-all duration-300",
      theme === "glass" && "glass-card hover:-translate-y-1",
      theme === "neo" && "neo-border bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none rounded-none",
      theme === "swiss" && "border-t border-black pt-8 rounded-none hover:bg-gray-50"
    )}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
        <div>
          <h3 className={cn(
            "text-xl font-bold",
            theme === "neo" && "font-mono uppercase",
            theme === "swiss" && "text-2xl tracking-tight"
          )}>
            {role}
          </h3>
          <div className="text-lg font-medium text-muted-foreground">
            {company}
          </div>
        </div>
        
        <div className={cn(
          "flex flex-col items-start md:items-end text-sm text-muted-foreground gap-1",
          theme === "neo" && "font-mono font-bold text-black"
        )}>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {period}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
        </div>
      </div>

      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={cn(
              "mt-2 w-1.5 h-1.5 rounded-full shrink-0",
              theme === "glass" && "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]",
              theme === "neo" && "bg-black rounded-none w-2 h-2",
              theme === "swiss" && "bg-accent w-1 h-4 rounded-none mt-1"
            )} />
            <span className={cn(
              "text-muted-foreground",
              theme === "neo" && "text-black font-medium",
              theme === "swiss" && "text-gray-800 leading-relaxed"
            )}>
              {achievement}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
