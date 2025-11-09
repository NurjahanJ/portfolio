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
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-[#0a0f1e] text-white hover:bg-[#0a0f1e]/90 transition-colors border border-slate-800"
        >
          <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
          <span className="text-lg font-medium">Back to Projects</span>
        </Link>
      </div>
      
      {/* Header */}
      <header className="space-y-4">
        <div className="uppercase tracking-wider text-sm font-medium text-orange-400 mb-2">
          APP DESIGN | MVP (Class Project)
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-200 to-pink-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(232, 165, 152, 0.5), 0 0 40px rgba(232, 165, 152, 0.3)', fontFamily: 'var(--font-lora)', fontWeight: 500, lineHeight: '1.2' }}>
          {caseStudy.title}
        </h1>

        <p className="text-xl md:text-2xl mt-4" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500, color: 'white', textShadow: '0 0 10px rgba(232, 165, 152, 0.5)' }}>
          A comprehensive Flutter app combining AI pattern generation with essential crochet tools and wellness features.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-5" aria-label="Project technologies">
          {caseStudy.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(10,17,40,0.9)] text-orange-300 border border-orange-500/30 transition-transform duration-300 hover:scale-105 hover:bg-orange-900/30"
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
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-300 to-pink-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-orange-300 transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-300 to-pink-500 rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-300 group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
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
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>At a glance</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Role:</span> UX/UI design and Flutter development (solo)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Context:</span> Final project for Generative AI course, 3-week sprint</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Platform:</span> Flutter (Android, iOS, Web)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Tech:</span> Flutter, GPT-4 API, DALL-E for images, Material Design 3, Google Fonts (Playfair Display, Merriweather, Nunito Sans)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Status:</span> Fully functional Flutter app with Vercel web deployment configuration</span>
          </li>
        </ul>
      </section>

      {/* Problem */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Problem</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          As a beginner crocheter, I found myself constantly switching between YouTube tutorials, blogs, Pinterest, stitch counters, and sizing charts. This fragmented process made it hard to stay focused and enjoy the craft.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          <span className="font-medium text-white">Goal:</span> Create a comprehensive crochet companion that combines AI-powered pattern generation with essential tools, project management, and wellness features to support crafters throughout their entire creative journey.
        </p>
      </section>
      
      {/* Context and Constraints */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Context and Constraints</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Requirement:</span> Final project had to use a generative AI element.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Timeframe:</span> Three weeks, so I prioritized coding an MVP over detailed wireframes.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Pivot:</span> I initially explored using the Pinterest API to pull existing crochet patterns, but after access issues I pivoted to generating original patterns with GPT-4.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Design Vision:</span> A calming pink and beige color palette to reflect crochet's soothing nature and reduce visual fatigue.</span>
          </li>
        </ul>
      </section>

      {/* Design Process */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Design Process</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-200">Brainstorming</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            I started by listing what would make crocheting easier: a pattern generator, a place to save projects, and a set of built-in tools (stitch counter, charts, timer).
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-200">Early Exploration</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Instead of spending time on polished wireframes, I made quick sketches of flows:<br/>
            Create Project → Generate Pattern → Save to Hub<br/>
            Tools → Counter, Gauge, Charts, Timer, Stretch Guide
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-200">Visual Language & Design System</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="font-medium text-white">Color Palette:</span> Coral peach (#E8A598) primary, sage green (#9ECEC3) secondary, warm amber (#F6C9A0) accent - carefully chosen for warmth and calmness.<br/>
            <span className="font-medium text-white">Typography:</span> Mixed serif/sans-serif system - Playfair Display for elegant headings, Merriweather for warm readable text, Nunito Sans for UI elements.<br/>
            <span className="font-medium text-white">Layout:</span> Bottom navigation with Create, My Projects, Tools tabs plus floating StitchPal assistant.<br/>
            <span className="font-medium text-white">Components:</span> Material Design 3 with custom theming, rounded corners (16px cards, 12px buttons), subtle shadows and elevations.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-200">Building & Iteration</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Jumped directly into Flutter coding with GPT-4 integration.<br/>
            Tuned prompts to generate structured patterns (materials → steps → yarn suggestions).<br/>
            Added UI polish as I coded: tags for filtering, progress bars, and ergonomic reminders.
          </p>
        </div>
      </section>
      
      {/* What I built */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>What I built</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">🤖 AI Pattern Generator</h3>
            <p className="text-slate-300">GPT-4 powered pattern creation with structured JSON parsing. Generates title, skill level, materials list, step-by-step instructions, and stitch abbreviations from natural language descriptions.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">🧶 Smart Yarn Suggestions</h3>
            <p className="text-slate-300">AI-powered yarn recommendations with brand names, specific yarn types, color options, and direct purchase links. Includes fallback suggestions when API is unavailable.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">📱 Project Management Hub</h3>
            <p className="text-slate-300">Save and organize projects with progress tracking, tag-based filtering, and persistent local storage. Features project cards with skill level badges and completion status.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">🛠️ Comprehensive Tool Suite</h3>
            <p className="text-slate-300">Multi-counter stitch tracker, gauge calculator, hook/yarn conversion charts, project timer with break notifications, and guided hand stretches for ergonomic health.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">🎨 AI Image Generation</h3>
            <p className="text-slate-300">DALL-E integration for pattern visualization, helping users see their projects before starting. Enhances pattern understanding and inspiration.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">💬 Global Assistant</h3>
            <p className="text-slate-300">Floating StitchPal assistant with contextual help, pattern guidance, and chat-based support throughout the crafting process.</p>
          </div>
        </div>
      </section>
      
      {/* Technical Architecture */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Technical Architecture</h2>
        
        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-200 mb-4">Flutter App Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">Core Architecture</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>Models:</strong> CrochetPattern, Material, Instruction, YarnSuggestion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>Services:</strong> OpenAI API integration, Project management, Notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>Screens:</strong> Project Input, Pattern Results, Saved Projects, Tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>Widgets:</strong> 35+ custom components for specialized crochet functionality</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Key Technologies</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>Flutter SDK:</strong> Cross-platform development with Material Design 3</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>OpenAI API:</strong> GPT-4 for patterns, DALL-E for images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>Google Fonts:</strong> Typography system with 3 font families</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span><strong>Local Storage:</strong> Project persistence and user preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-200 mb-4">AI Integration Strategy</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-white mb-2">Pattern Generation Pipeline</h4>
              <p className="text-slate-300 text-sm mb-3">Sophisticated prompt engineering with structured JSON parsing and error handling:</p>
              <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                <code className="text-xs text-slate-300">
                  User Input → GPT-4 Prompt → JSON Response → Parse & Validate → CrochetPattern Object → UI Display
                </code>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Robust Error Handling</h4>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>• Fallback to sample patterns when API unavailable</li>
                <li>• JSON parsing with error recovery</li>
                <li>• Rate limiting and authentication error handling</li>
                <li>• Graceful degradation for offline use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Screenshots */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Project Screenshots</h2>
        <ImageSlideshow 
          images={[
            "/project1-images copy/1.png",
            "/project1-images copy/2.png",
            "/project1-images copy/3.png",
            "/project1-images copy/4.png"
          ]}
        />
      </section>
      
      {/* Reflections */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Reflections</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed">
          Since this was a fast-paced class project, there was no time for formal user testing. Instead, I reflected on my own use of the app, gathered feedback from fellow crafters, and analyzed the design decisions made along the way.
        </p>
        
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg">The integrated approach was a huge improvement compared to juggling separate apps.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg">Progress bars added a clear sense of tracking and motivation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg">Break reminders and the hand stretch guide introduced a health-focused dimension that made the app feel more supportive.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg">Navigation needed to remain extremely simple so beginners wouldn't feel overwhelmed.</span>
          </li>
        </ul>
      </section>
      
      {/* Challenges */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Challenges</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Pinterest API:</span> Could not get access, so I pivoted to GPT-4 for generating new patterns.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Prompt design:</span> Took trial and error to structure GPT-4 responses consistently.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Scope:</span> With only three weeks, I focused on core features and left polish for later.</span>
          </li>
        </ul>
      </section>
      
      {/* Conclusion */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Conclusion</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          StitchPal demonstrates my ability to create comprehensive, user-centered solutions that combine emerging technologies with thoughtful design:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-orange-200 mb-3">Design & Research Skills</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Identify and validate user pain points through personal experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Create cohesive design systems with intentional color, typography, and component choices</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Design for accessibility and wellness (ergonomic features, break reminders)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-orange-200 mb-3">Technical & AI Integration</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Implement complex AI workflows with robust error handling</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Build cross-platform applications with Flutter and Material Design 3</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Create scalable architecture with 35+ custom components</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[rgba(232,165,152,0.1)] p-6 rounded-lg border border-orange-500/20 mt-6">
          <p className="text-orange-200 text-lg">
            <span className="font-medium">Key Achievement:</span> Successfully integrated multiple AI APIs (GPT-4, DALL-E) into a cohesive user experience while maintaining app functionality even when APIs are unavailable - demonstrating both technical proficiency and user-centered thinking.
          </p>
        </div>
      </section>
      
    </div>
  );
}
