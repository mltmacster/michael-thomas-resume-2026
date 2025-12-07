import { Hero } from "@/components/Hero";
import { ResumeSection } from "@/components/ResumeSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { resumeData } from "@/lib/resume-data";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Cpu, GraduationCap } from "lucide-react";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      <ThemeSwitcher />
      
      <main className="flex-grow">
        <Hero />
        
        <div className={cn(
          "container py-20",
          theme === "swiss" && "max-w-none px-8 md:px-16"
        )}>
          {/* Skills Section */}
          <ResumeSection title="Core Competencies" delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className={cn(
                    "text-base py-2 px-4 transition-all hover:scale-105 cursor-default",
                    theme === "glass" && "bg-white/5 hover:bg-primary/20 border border-white/10 text-white",
                    theme === "neo" && "bg-white border-2 border-black text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono font-bold",
                    theme === "swiss" && "bg-gray-100 text-black rounded-none hover:bg-accent hover:text-white text-lg font-normal"
                  )}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </ResumeSection>

          {/* Experience Section */}
          <ResumeSection title="Professional Experience" delay={0.3}>
            <div className={cn(
              "space-y-2",
              theme === "swiss" && "space-y-0"
            )}>
              {resumeData.experience.map((job, index) => (
                <ExperienceCard key={index} {...job} />
              ))}
            </div>
          </ResumeSection>

          {/* Certifications Section */}
          <ResumeSection title="Certifications" delay={0.4}>
            <div className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-6",
              theme === "swiss" && "grid-cols-3 gap-8"
            )}>
              {resumeData.certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-6 rounded-xl transition-all",
                    theme === "glass" && "glass-card group",
                    theme === "neo" && "border-2 border-black bg-primary/20 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                    theme === "swiss" && "border-t border-black pt-4 rounded-none p-0"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-lg shrink-0",
                      theme === "glass" && "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors",
                      theme === "neo" && "bg-black text-white rounded-none border-2 border-black",
                      theme === "swiss" && "hidden"
                    )}>
                      {cert.name.includes("Security") ? <Shield className="w-6 h-6" /> : 
                       cert.name.includes("Cloud") ? <Cpu className="w-6 h-6" /> : 
                       <Award className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className={cn(
                        "font-bold mb-1",
                        theme === "swiss" && "text-xl leading-tight mb-2"
                      )}>{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                      <p className={cn(
                        "text-xs font-mono opacity-70",
                        theme === "neo" && "bg-white inline-block px-1 border border-black text-black font-bold"
                      )}>ID: {cert.id}</p>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={cn(
                            "text-xs mt-2 inline-flex items-center gap-1 hover:underline",
                            theme === "glass" && "text-primary",
                            theme === "neo" && "text-black font-bold underline decoration-2",
                            theme === "swiss" && "text-blue-600 font-medium"
                          )}
                        >
                          Verify Credential →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Education Section */}
          <ResumeSection title="Education" delay={0.5}>
            {resumeData.education.map((edu, index) => (
              <div 
                key={index}
                className={cn(
                  "p-8 rounded-xl",
                  theme === "glass" && "glass border-l-4 border-l-primary",
                  theme === "neo" && "bg-black text-white border-4 border-primary rounded-none p-6",
                  theme === "swiss" && "border-t-4 border-black pt-8 rounded-none p-0"
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className={cn(
                    "w-8 h-8",
                    theme === "glass" && "text-primary",
                    theme === "neo" && "text-primary",
                    theme === "swiss" && "hidden"
                  )} />
                  <div>
                    <h3 className={cn(
                      "text-2xl font-bold",
                      theme === "neo" && "font-mono uppercase text-primary"
                    )}>{edu.school}</h3>
                    <p className={cn(
                      "text-lg",
                      theme === "glass" && "text-muted-foreground",
                      theme === "neo" && "text-gray-300"
                    )}>{edu.location} | {edu.year}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-medium">{edu.degree}</p>
                  <p className="text-lg text-muted-foreground">{edu.major}</p>
                  <p className={cn(
                    "mt-4 inline-block px-4 py-2 rounded-lg text-sm font-bold",
                    theme === "glass" && "bg-white/10 text-white",
                    theme === "neo" && "bg-primary text-black rounded-none uppercase",
                    theme === "swiss" && "bg-gray-100 text-black rounded-none mt-2"
                  )}>{edu.details}</p>
                </div>
              </div>
            ))}
          </ResumeSection>
        </div>
      </main>

      <footer className={cn(
        "py-8 text-center text-sm",
        theme === "glass" && "border-t border-white/10 text-muted-foreground bg-black/20",
        theme === "neo" && "bg-black text-white font-mono border-t-4 border-primary",
        theme === "swiss" && "border-t border-gray-200 text-gray-500"
      )}>
        <div className="container">
          <p>© 2026 Michael L. Thomas. All rights reserved.</p>
          <p className="mt-2 opacity-50">Powered by - D3V GURUs</p>
        </div>
      </footer>
    </div>
  );
}
