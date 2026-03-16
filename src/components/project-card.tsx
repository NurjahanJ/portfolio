"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarBackground } from "@/components/star-background";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({ title, description, tags, github, demo }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border group bg-[rgba(10,17,40,0.8)] backdrop-blur-sm border-sky-500/30 hover:border-sky-400/50 shadow-lg">
      <CardHeader className="pb-3 relative">
        {/* Subtle star background for cards */}
        <StarBackground count={8} />
        
        <div className="flex items-start justify-between relative z-10">
          <CardTitle className="text-xl md:text-2xl text-sky-300 group-hover:text-sky-200 transition-colors font-sans">
            {title}
          </CardTitle>
          <div className="p-2 rounded-full bg-sky-900/40 text-sky-400 group-hover:bg-sky-800/60 transition-colors">
            <Folder className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3" aria-label="Project technologies">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(10,17,40,0.9)] text-sky-300 border border-sky-500/30 transition-transform duration-300 hover:scale-105 hover:bg-sky-900/30"
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 pt-4 border-t border-sky-500/20">
        {demo && (
          <Button 
            asChild 
            variant="default" 
            size="sm" 
            className="bg-sky-600 hover:bg-sky-500 text-white focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Link 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center"
              aria-label={`View ${title} demo`}
            >
              <ExternalLink className="mr-1 h-4 w-4" aria-hidden="true" />
              View Demo
            </Link>
          </Button>
        )}
        {github && (
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="border-sky-500/50 text-sky-300 hover:bg-sky-900/30 focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Link 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center"
              aria-label={`View ${title} GitHub repository`}
            >
              <Github className="mr-1 h-4 w-4" aria-hidden="true" />
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
