import { Button } from "@/components/ui/button";
import { useTheme, type Theme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Monitor, Layers, Grid } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes: { id: Theme; label: string; icon: React.ElementType }[] = [
    { id: "glass", label: "Glassmorphism", icon: Layers },
    { id: "neo", label: "Neo-Brutalism", icon: Monitor },
    { id: "swiss", label: "Swiss Style", icon: Grid },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg">
      {themes.map((t) => {
        const Icon = t.icon;
        return (
          <Button
            key={t.id}
            variant={theme === t.id ? "default" : "ghost"}
            size="sm"
            onClick={() => setTheme(t.id)}
            className={cn(
              "rounded-full transition-all",
              theme === t.id && "shadow-md"
            )}
            title={t.label}
          >
            <Icon className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">{t.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
