"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  category: string;
  title: string;
  description: string;
  imagePath: string;
  slug: string;
  duration?: string;
  teamSize?: string;
  status?: string;
  techStack?: string[];
  demo?: string;
  github?: string;
  highlights?: string[];
}

export function CaseStudyCard({ category, title, description, imagePath, slug, duration, teamSize, status, techStack, demo, github, highlights }: CaseStudyCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 px-12 md:px-20 relative max-w-[1600px] mx-auto">
      {/* Subtle star background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={`star-casestudy-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col space-y-4 order-2 md:order-1 relative z-10 md:pr-8 md:pl-16 md:max-w-[90%] md:ml-6">
        <div className="text-overline font-medium" style={{color: '#FF7533', textShadow: '0 0 10px rgba(255, 117, 51, 0.6)'}}>
          {category}
        </div>
        
        <h3 className="text-title font-bold text-sky-300">
          {title}
        </h3>
        
        <p className="text-slate-300 text-body font-light leading-relaxed">
          {description}
        </p>
        
        
        {/* Tech Stack Preview */}
        {techStack && techStack.length > 0 && (
          <div className="mt-3">
            <p className="text-caption text-slate-400 mb-2 font-medium">Tech Stack</p>
            <div className="flex flex-wrap gap-1">
              {techStack.slice(0, 3).map((tech) => (
                <span 
                  key={tech}
                  className="text-caption bg-slate-800/50 text-slate-300 px-2 py-1 rounded text-xs border border-slate-600/30"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 3 && (
                <span className="text-caption text-slate-400 px-2 py-1 text-xs">
                  +{techStack.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Differentiated CTAs */}
        <div className="pt-4 flex flex-wrap gap-3">
          {demo && (
            <Button 
              asChild 
              variant="default" 
              className="group bg-transparent hover:bg-[rgba(255,117,51,0.2)] text-[#FF7533] border border-[#FF7533]/50 hover:border-[#FF7533] focus:ring-2 focus:ring-[#FF7533] focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
              style={{textShadow: '0 0 10px rgba(255, 117, 51, 0.4)'}}
            >
              <Link href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                View Live Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          )}
          
          {github && (
            <Button 
              asChild 
              variant="outline" 
              className="group bg-transparent border border-slate-500/50 text-slate-300 hover:bg-slate-800/30 hover:border-slate-400 transition-all duration-300"
            >
              <Link href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                View Code
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          )}
          
          <Button 
            asChild 
            variant="ghost" 
            className="group bg-blue-900/30 text-blue-300 hover:text-blue-200 hover:bg-blue-800/40 border border-blue-500/20 transition-all duration-300"
          >
            <Link href={`/case-studies/${slug}`} className="inline-flex items-center">
              Read Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="relative order-1 md:order-2 aspect-[4/3] w-[60%] mx-auto md:w-[70%] overflow-hidden rounded-lg shadow-xl border border-sky-500/30 hover:border-sky-400/50 transition-all duration-300">
        <Image
          src={imagePath}
          alt={`${title} preview`}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
