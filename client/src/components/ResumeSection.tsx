import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ResumeSection({ title, children, className, delay = 0 }: ResumeSectionProps) {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("mb-16 scroll-mt-24", className)}
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <div className={cn(
        "flex flex-col md:flex-row gap-8",
        theme === "swiss" && "swiss-grid block"
      )}>
        <div className={cn(
          "md:w-1/4",
          theme === "swiss" && "col-span-3"
        )}>
          <h2 className={cn(
            "text-3xl font-bold mb-4 sticky top-24",
            theme === "glass" && "text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400",
            theme === "neo" && "font-mono uppercase text-4xl border-b-4 border-black pb-2",
            theme === "swiss" && "swiss-title text-black"
          )}>
            {title}
          </h2>
        </div>
        
        <div className={cn(
          "md:w-3/4",
          theme === "swiss" && "col-span-9"
        )}>
          {children}
        </div>
      </div>
    </motion.section>
  );
}
