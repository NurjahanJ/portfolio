"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = caseStudies.findIndex(study => study.slug === currentSlug);
  const previousProject = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextProject = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="border-t border-slate-700/50 pt-12 mt-16">
      {/* Back to Projects */}
      <div className="flex justify-center mb-8">
        <Button asChild variant="outline" className="bg-slate-800/30 border-slate-600/50 text-slate-300 hover:bg-slate-700/50">
          <Link href="/#projects" className="inline-flex items-center gap-2">
            <Grid3X3 className="h-4 w-4" />
            All Projects
          </Link>
        </Button>
      </div>

      {/* Previous/Next Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Project */}
        <div className="flex justify-start">
          {previousProject ? (
            <Button 
              asChild 
              variant="ghost" 
              className="h-auto p-4 bg-slate-800/20 hover:bg-slate-700/30 border border-slate-600/30 rounded-lg group transition-all duration-300"
            >
              <Link href={`/case-studies/${previousProject.slug}`} className="flex items-center gap-3 text-left">
                <ArrowLeft className="h-5 w-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                <div>
                  <div className="text-xs text-slate-400 mb-1">Previous</div>
                  <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {previousProject.title}
                  </div>
                </div>
              </Link>
            </Button>
          ) : (
            <div></div>
          )}
        </div>

        {/* Next Project */}
        <div className="flex justify-end">
          {nextProject ? (
            <Button 
              asChild 
              variant="ghost" 
              className="h-auto p-4 bg-slate-800/20 hover:bg-slate-700/30 border border-slate-600/30 rounded-lg group transition-all duration-300"
            >
              <Link href={`/case-studies/${nextProject.slug}`} className="flex items-center gap-3 text-right">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Next</div>
                  <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {nextProject.title}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              </Link>
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
