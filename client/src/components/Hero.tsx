import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { resumeData } from "@/lib/resume-data";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { theme } = useTheme();

  const heroImage = {
    glass: "/images/hero-glassmorphism.png",
    neo: "/images/hero-neobrutalism.png",
    swiss: "/images/hero-swiss.png",
  }[theme];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className={cn(
          "absolute inset-0",
          theme === "glass" && "bg-background/80 backdrop-blur-sm bg-gradient-to-b from-transparent to-background",
          theme === "neo" && "bg-white/90 bg-[url('/noise.png')] opacity-90 mix-blend-hard-light",
          theme === "swiss" && "bg-white/90"
        )} />
      </div>

      <div className="container relative z-10">
        <div className={cn(
          "max-w-4xl mx-auto",
          theme === "swiss" && "max-w-none grid grid-cols-12 gap-4"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
              "text-center",
              theme === "neo" && "text-left border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
              theme === "swiss" && "col-span-8 col-start-3 text-left"
            )}
          >
            <h1 className={cn(
              "text-5xl md:text-7xl font-bold mb-4 tracking-tight",
              theme === "glass" && "text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
              theme === "neo" && "font-mono uppercase text-black leading-none",
              theme === "swiss" && "text-8xl font-black text-black leading-[0.8] tracking-tighter"
            )}>
              {resumeData.personal.name}
            </h1>
            
            <h2 className={cn(
              "text-2xl md:text-3xl mb-8",
              theme === "glass" && "text-primary font-light",
              theme === "neo" && "font-bold bg-primary text-black inline-block px-2 py-1 transform -rotate-1",
              theme === "swiss" && "text-4xl font-medium text-gray-500 mt-4"
            )}>
              {resumeData.personal.title}
            </h2>

            <p className={cn(
              "text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed",
              theme === "glass" && "text-muted-foreground",
              theme === "neo" && "text-black font-mono mx-0 border-l-4 border-primary pl-4",
              theme === "swiss" && "text-2xl text-gray-800 mx-0 font-light"
            )}>
              {resumeData.personal.summary}
            </p>

            <div className={cn(
              "flex flex-wrap justify-center gap-4 mb-12",
              (theme === "neo" || theme === "swiss") && "justify-start"
            )}>
              <Button 
                size="lg" 
                className={cn(
                  theme === "glass" && "bg-primary hover:bg-primary/80 text-white shadow-[0_0_20px_rgba(var(--primary),0.5)] rounded-full",
                  theme === "neo" && "neo-button rounded-none h-14 px-8 text-lg",
                  theme === "swiss" && "bg-black text-white rounded-none hover:bg-accent h-16 px-10 text-xl"
                )}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className={cn(
                  theme === "glass" && "border-white/20 hover:bg-white/10 text-white rounded-full",
                  theme === "neo" && "border-4 border-black text-black font-bold hover:bg-black hover:text-white rounded-none h-14 px-8 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                  theme === "swiss" && "border-2 border-black text-black rounded-none hover:bg-black hover:text-white h-16 px-10 text-xl"
                )}
                onClick={() => window.location.href = `mailto:${resumeData.personal.email}`}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            <div className={cn(
              "flex flex-wrap justify-center gap-6 text-sm md:text-base",
              theme === "glass" && "text-muted-foreground",
              theme === "neo" && "justify-start font-mono font-bold border-t-4 border-black pt-6",
              theme === "swiss" && "justify-start text-gray-500 border-t border-gray-200 pt-8 mt-12"
            )}>
              <a href={`mailto:${resumeData.personal.email}`} className="flex items-center hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {resumeData.personal.email}
              </a>
              <a href={`tel:${resumeData.personal.phone}`} className="flex items-center hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {resumeData.personal.phone}
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {resumeData.personal.location}
              </div>
              <a href={`https://linkedin.com/${resumeData.personal.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
