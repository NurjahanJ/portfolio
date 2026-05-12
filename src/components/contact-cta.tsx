"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  projectTitle?: string;
  accentColor?: string;
}

export function ContactCTA({ projectTitle, accentColor = "#FF7533" }: ContactCTAProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-8 border border-slate-700/50 backdrop-blur-sm">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div 
            className="p-3 rounded-full"
            style={{ backgroundColor: `${accentColor}20`, border: `1px solid ${accentColor}30` }}
          >
            <MessageCircle 
              className="h-6 w-6" 
              style={{ color: accentColor }}
            />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white">
          {projectTitle ? `Interested in ${projectTitle}?` : "Let's Work Together"}
        </h3>
        
        <p className="text-slate-300 max-w-md mx-auto">
          I'd love to discuss how we can bring your ideas to life with thoughtful design and clean code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-6 py-2 bg-transparent hover:bg-transparent relative group overflow-hidden"
          >
            <Link 
              href="https://www.linkedin.com/in/nurjahanjhorna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 text-white font-medium"
            >
              <span 
                className="absolute inset-0 w-full h-full rounded-full transition-all duration-300"
                style={{ 
                  background: `linear-gradient(to right, ${accentColor}, ${accentColor}dd)`,
                }}
              ></span>
              <span 
                className="absolute inset-0 w-full h-full rounded-full blur-md transition-all duration-500 opacity-50"
                style={{ 
                  background: `linear-gradient(to right, ${accentColor}, ${accentColor}aa)`,
                }}
              ></span>
              <span className="relative z-20 flex items-center justify-center gap-2 text-white font-serif font-medium">
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="rounded-full px-6 py-2 bg-transparent border-slate-500/50 text-slate-300 hover:bg-slate-800/30 hover:border-slate-400"
          >
            <Link href="/#projects" className="font-serif font-medium">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
