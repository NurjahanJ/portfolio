"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";

export default function StitchPalCaseStudy() {
  // Find the StitchPal case study
  const caseStudy = caseStudies.find(study => study.slug === "stitchpal");
  
  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Back button */}
      <div>
        <Button 
          asChild 
          variant="ghost" 
          className="group text-sky-400 hover:text-sky-300 hover:bg-sky-900/20"
        >
          <Link href="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Back to Projects
          </Link>
        </Button>
      </div>
      
      {/* Header */}
      <header className="space-y-4">
        <div className="uppercase tracking-wider text-sm font-medium text-sky-400">
          {caseStudy.category}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-sky-300">
          {caseStudy.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mt-3" aria-label="Project technologies">
          {caseStudy.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(10,17,40,0.9)] text-sky-300 border border-sky-500/30 transition-transform duration-300 hover:scale-105 hover:bg-sky-900/30"
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      {/* Main image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl border border-sky-500/30">
        <Image
          src={caseStudy.imagePath}
          alt={`${caseStudy.title} preview`}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-sky-300">Overview</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          {caseStudy.description}
        </p>
      </section>
      
      {/* Challenge */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-sky-300">The Challenge</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Many crochet enthusiasts struggle with pattern creation, stitch counting, and maintaining proper ergonomics during long crafting sessions. Existing solutions are fragmented across multiple apps, requiring crafters to switch between different tools.
        </p>
      </section>
      
      {/* Solution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-sky-300">The Solution</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          StitchPal combines AI-powered pattern generation with practical tools like stitch counters, sizing guides, and break reminders in a single, intuitive interface. The app provides visual previews of patterns and personalized yarn suggestions based on user preferences.
        </p>
      </section>
      
      {/* Key Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-sky-300">Key Features</h2>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start">
            <span className="text-sky-400 mr-2">•</span>
            <span><strong className="text-sky-200">AI Pattern Generator:</strong> Creates custom patterns based on skill level, desired item, and preferences</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2">•</span>
            <span><strong className="text-sky-200">Visual Preview:</strong> Renders realistic 3D previews of patterns before starting</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2">•</span>
            <span><strong className="text-sky-200">Stitch Counter:</strong> Multiple counters for tracking different pattern sections</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2">•</span>
            <span><strong className="text-sky-200">Ergonomic Reminders:</strong> Customizable break notifications to prevent strain</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2">•</span>
            <span><strong className="text-sky-200">Yarn Recommendations:</strong> Suggests suitable yarns based on project requirements</span>
          </li>
        </ul>
      </section>
      
      {/* Links */}
      <div className="pt-8 flex flex-wrap gap-4">
        {caseStudy.github && (
          <Button 
            asChild 
            variant="outline" 
            className="border-sky-500/50 text-sky-300 hover:bg-sky-900/30 focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Link 
              href={caseStudy.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center"
            >
              <Github className="mr-1 h-4 w-4" aria-hidden="true" />
              View on GitHub
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
