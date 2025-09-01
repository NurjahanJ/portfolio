"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ImageSlideshow } from "@/components/ImageSlideshow";

export default function StitchPalCaseStudy() {
  // Find the StitchPal case study
  const caseStudy = caseStudies.find(study => study.slug === "stitchpal");
  
  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
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
        <div className="uppercase tracking-wider text-sm font-medium text-sky-400 mb-2">
          APP DESIGN | MVP (Class Project)
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)', fontFamily: 'var(--font-lora)', fontWeight: 500, lineHeight: '1.2' }}>
          {caseStudy.title}
        </h1>

        <p className="text-xl md:text-2xl mt-4" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500, color: '#C33909', textShadow: '0 0 10px rgba(195, 57, 9, 0.5)' }}>
          Your AI-powered crochet companion at your fingertips.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-5" aria-label="Project technologies">
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
        
        <div className="mt-6">
          {caseStudy.github && (
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-6 py-2 text-base bg-transparent hover:bg-transparent relative group overflow-hidden"
            >
              <Link 
                href={caseStudy.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 text-white font-medium"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C33909] to-[#A62F07] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#A62F07] group-hover:to-[#C33909] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C33909] to-[#8B2703] rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-[#8B2703] group-hover:to-[#C33909] group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
                <span className="relative z-20 flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>
                  <Github className="mr-1 h-4 w-4" aria-hidden="true" />
                  View On Github
                </span>
              </Link>
            </Button>
          )}
        </div>
      </header>
      
      {/* At a glance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>At a glance</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Role:</span> UX/UI design and Flutter development (solo)</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Context:</span> Final project for Generative AI course, 3-week sprint</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Platform:</span> Flutter (Android, iOS, Web)</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Tech:</span> GPT-4 for pattern generation and yarn suggestions, Material Design 3 components</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Status:</span> Working prototype in GitHub, not yet deployed</span>
          </li>
        </ul>
      </section>

      {/* Problem */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Problem</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          As a beginner crocheter, I found myself constantly switching between YouTube tutorials, blogs, Pinterest, stitch counters, and sizing charts. This fragmented process made it hard to stay focused and enjoy the craft.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          <span className="font-medium">Goal:</span> Create an app that combines AI-driven pattern generation with essential crochet tools and project tracking so crafters can stay organized, inspired, and healthy while working.
        </p>
      </section>
      
      {/* Context and Constraints */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Context and Constraints</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Requirement:</span> Final project had to use a generative AI element.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Timeframe:</span> Three weeks, so I prioritized coding an MVP over detailed wireframes.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Pivot:</span> I initially explored using the Pinterest API to pull existing crochet patterns, but after access issues I pivoted to generating original patterns with GPT-4.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Design Vision:</span> A calming pink and beige color palette to reflect crochet's soothing nature and reduce visual fatigue.</span>
          </li>
        </ul>
      </section>

      {/* Design Process */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Design Process</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sky-200">Brainstorming</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            I started by listing what would make crocheting easier: a pattern generator, a place to save projects, and a set of built-in tools (stitch counter, charts, timer).
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sky-200">Early Exploration</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Instead of spending time on polished wireframes, I made quick sketches of flows:<br/>
            Create Project → Generate Pattern → Save to Hub<br/>
            Tools → Counter, Gauge, Charts, Timer, Stretch Guide
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sky-200">Visual Language</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="font-medium">Color Palette:</span> Pink and beige tones for calmness and warmth.<br/>
            <span className="font-medium">Layout:</span> Bottom navigation with three tabs: Create, My Projects, Tools.<br/>
            <span className="font-medium">Components:</span> Material Design 3 for consistency, accessibility, and responsive UI.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sky-200">Building & Iteration</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Jumped directly into Flutter coding with GPT-4 integration.<br/>
            Tuned prompts to generate structured patterns (materials → steps → yarn suggestions).<br/>
            Added UI polish as I coded: tags for filtering, progress bars, and ergonomic reminders.
          </p>
        </div>
      </section>
      
      {/* Project Screenshots */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Project Screenshots</h2>
        <ImageSlideshow 
          images={[
            "/project1-images copy/1.png",
            "/project1-images copy/2.png",
            "/project1-images copy/3.png",
            "/project1-images copy/4.png"
          ]}
        />
      </section>
      
      {/* What I built */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>What I built</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">AI Pattern Generator</h3>
            <p className="text-slate-300">Enter a description and tags (like "beginner scarf") to generate a step by step pattern.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">Yarn Suggestions</h3>
            <p className="text-slate-300">Pattern results include yarn recommendations to save with the project.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">Project Hub</h3>
            <p className="text-slate-300">Save multiple projects, track completion with progress bars, and filter by tags.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">Crochet Tools</h3>
            <p className="text-slate-300">A suite of built-in helpers: Stitch Counter, Gauge Calculator, Hook & Yarn Conversion Charts, Project Timer with customizable break reminders, Hand Stretch Guide with ergonomic exercises.</p>
          </div>
        </div>
      </section>
      
      {/* Reflections */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Reflections</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed">
          Since this was a fast paced class project, there was no time for formal user testing. Instead, I reflected on my own use of the app and the design decisions made along the way.
        </p>
        
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">The integrated approach was a huge improvement compared to juggling separate apps.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">Progress bars added a clear sense of tracking and motivation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">Break reminders and the hand stretch guide introduced a health-focused dimension that made the app feel more supportive.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">Navigation needed to remain extremely simple so beginners wouldn't feel overwhelmed.</span>
          </li>
        </ul>
      </section>
      
      {/* Challenges */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Challenges</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Pinterest API:</span> Could not get access, so I pivoted to GPT-4 for generating new patterns.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Prompt design:</span> Took trial and error to structure GPT-4 responses consistently.</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium">Scope:</span> With only three weeks, I focused on core features and left polish for later.</span>
          </li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Conclusion</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          StitchPal reflects my ability to:
        </p>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">Identify a personal pain point</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">Translate it into a design problem</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">Make intentional design decisions</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg">Build and iterate quickly with real AI integration</span>
          </li>
        </ul>
        <p className="text-slate-300 text-lg leading-relaxed mt-6 border-l-4 border-[#C33909] pl-4 py-2 bg-[rgba(195,57,9,0.05)]">
          Whether I am coding or designing, my focus is the same: creating experiences that feel intuitive, supportive, and meaningful.
        </p>
      </section>
      
    </div>
  );
}
