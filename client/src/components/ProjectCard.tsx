import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <div className={cn(
      "p-6 rounded-xl transition-all",
      theme === "glass" && "glass-card group hover:bg-white/5",
      theme === "neo" && "border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-none",
      theme === "swiss" && "border-t border-black pt-4 rounded-none p-0"
    )}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            theme === "glass" && "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors",
            theme === "neo" && "bg-black text-white rounded-none",
            theme === "swiss" && "hidden"
          )}>
            <FolderGit2 className="w-5 h-5" />
          </div>
          <h3 className={cn(
            "font-bold text-lg",
            theme === "swiss" && "text-xl leading-tight"
          )}>{title}</h3>
        </div>
        {link && link !== "#" && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-muted-foreground hover:text-primary transition-colors",
              theme === "neo" && "text-black hover:text-primary"
            )}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      
      <p className={cn(
        "text-sm mb-4",
        theme === "glass" && "text-muted-foreground",
        theme === "neo" && "text-gray-600 font-medium",
        theme === "swiss" && "text-gray-600 text-base"
      )}>{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge 
            key={index}
            variant="outline"
            className={cn(
              "text-xs",
              theme === "glass" && "border-white/10 bg-white/5 text-white/80",
              theme === "neo" && "border-black text-black rounded-none bg-transparent font-bold",
              theme === "swiss" && "border-gray-200 bg-gray-50 text-gray-600 rounded-none font-normal"
            )}
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
