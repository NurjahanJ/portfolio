"use client";

import { notFound } from 'next/navigation'
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ProjectNavigation } from "@/components/project-navigation";
import { ContactCTA } from "@/components/contact-cta";
import { BackToProjects } from "@/components/back-to-projects";
import { CaseStudyTags } from "@/components/case-study-tags";

export default function MoodQuestCaseStudy() {
  const caseStudy = caseStudies.find(study => study.slug === "moodquest");
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
      <BackToProjects />
      
      <header className="space-y-4">
        <div className="uppercase tracking-wider text-sm font-medium text-amber-400 mb-2">
          APP DESIGN | AI PRODUCT ENGINEERING
        </div>
        
        <h1 className="text-headline md:text-5xl font-serif font-medium bg-gradient-to-r from-amber-100 to-orange-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)' }}>
          {caseStudy.title}
        </h1>

        <p className="text-subtitle md:text-2xl font-serif font-medium mt-4" style={{ color: 'white', textShadow: '0 0 10px rgba(251, 146, 60, 0.5)' }}>
          Discover your next vibe. AI-powered emotional discovery platform combining immersive mood boards with intelligent recommendations.
        </p>
        
        <CaseStudyTags tags={caseStudy.tags} colorClass="text-amber-300 border-amber-500/30 hover:bg-amber-900/30" />
        
        <div className="mt-6 flex flex-wrap gap-3">
          {caseStudy.demo && (
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-6 py-2 text-base bg-transparent hover:bg-transparent relative group overflow-hidden"
            >
              <Link 
                href={caseStudy.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 text-white font-medium"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-400 group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
                <span className="relative z-20 flex items-center justify-center gap-2 text-white font-serif font-medium">
                  <ExternalLink className="mr-1 h-4 w-4" aria-hidden="true" />
                  View Demo
                </span>
              </Link>
            </Button>
          )}
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
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-400 group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
                <span className="relative z-20 flex items-center justify-center gap-2 text-white font-serif font-medium">
                  <Github className="mr-1 h-4 w-4" aria-hidden="true" />
                  View On Github
                </span>
              </Link>
            </Button>
          )}
        </div>
      </header>
      
      <section className="space-y-6">
        <h2 className="text-title font-serif font-medium text-amber-300">At a glance</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-amber-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Role:</span> Full-stack AI product engineering (design, frontend, AI integration)</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Type:</span> Portfolio project exploring modern AI Product Engineering</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Platform:</span> Web (Next.js, React, TypeScript)</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Tech:</span> Next.js 14, React, TypeScript, Tailwind CSS, OpenAI GPT-4o-mini, gpt-image-2, Vitest</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Status:</span> Live demo on Netlify</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Overview</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          MoodQuest is a dual-mode AI application designed to transform entertainment discovery into a more emotional and immersive experience. The platform combines AI-powered recommendation systems, multimodal AI generation, cinematic visual design, structured AI workflows, progressive rendering, and reliability-focused fallback systems.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          Users can either generate immersive AI mood boards for games and movies, or receive personalized recommendations based on mood, platform, available time, and preferences. Built as an AI Product Engineering portfolio project, MoodQuest explores how AI systems can feel more experiential, aesthetic, and emotionally driven rather than purely utility-focused.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>The Problem</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Most recommendation systems focus only on functionality: "What should I watch?" or "What should I play?" But people often search for entertainment emotionally rather than logically. Users usually know the atmosphere they want, the emotional energy they want, and the aesthetic experience they want—but traditional recommendation systems rarely capture mood, emotional tone, cinematic atmosphere, or sensory identity.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          MoodQuest was designed to bridge that gap through AI-powered emotional personalization and immersive visual exploration.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Product Goals</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          The primary goal was to create a product that felt like a complete AI-powered experience rather than a simple chatbot or recommendation demo. The system was intentionally designed around emotional discovery, immersive interaction, explainable AI recommendations, cinematic UI design, and reliability-focused engineering. The project also served as a way to explore the expectations of modern AI Product Engineering and AI Frontend Engineering roles.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Core Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">🎨 AI Mood Board Generator</h3>
            <p className="text-slate-300">Generate immersive mood boards for any game or movie title with atmospheric descriptions, emotional themes, aesthetic tags, curated playlists, color palettes, sensory textures, similar media recommendations, and AI-generated abstract texture imagery using OpenAI gpt-image-2 with progressive rendering.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">🎮 Recommendation Engine</h3>
            <p className="text-slate-300">Personalized recommendations based on mood, available time, platform, genre preferences, and play/watch style. Features Quick Match, Deep Match, and Surprise Me modes with confidence scoring, taste profile generation, and recommendation refinement.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">🤖 Dual-Mode Experience</h3>
            <p className="text-slate-300">Seamlessly switch between Mood Board and Recommendation modes with conversational UI patterns, immersive transitions, cinematic visual design, and Lumi AI assistant interactions.</p>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">⚙️ Intelligent Fallback Systems</h3>
            <p className="text-slate-300">Reliability-focused fallback systems maintain functionality even when AI APIs fail, including local recommendation scoring, curated fallback mood boards, structured fallback outputs, and graceful degradation handling.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>AI Integration</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">GPT-4o-mini</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Used for mood board generation, recommendation generation, emotional analysis, structured JSON outputs, and taste profile generation. Sophisticated prompt engineering ensures consistent, valid structured responses.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">gpt-image-2</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Used for abstract texture imagery, aesthetic visualization, and sensory visual generation. Images load progressively to improve perceived performance and immersion.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Technical Architecture</h2>
        
        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-amber-500/20">
          <h3 className="text-xl font-semibold text-amber-200 mb-4">System Workflow</h3>
          <div className="bg-slate-800/50 p-4 rounded border border-slate-700 space-y-2">
            <code className="text-xs text-slate-300 block">User Input</code>
            <code className="text-xs text-slate-300 block">↓</code>
            <code className="text-xs text-slate-300 block">Validation Layer</code>
            <code className="text-xs text-slate-300 block">↓</code>
            <code className="text-xs text-slate-300 block">GPT-4o-mini</code>
            <code className="text-xs text-slate-300 block">↓</code>
            <code className="text-xs text-slate-300 block">Structured JSON Output</code>
            <code className="text-xs text-slate-300 block">↓</code>
            <code className="text-xs text-slate-300 block">Mood Board / Recommendation Renderer</code>
            <code className="text-xs text-slate-300 block">↓</code>
            <code className="text-xs text-slate-300 block">gpt-image-2 Texture Generation</code>
            <code className="text-xs text-slate-300 block">↓</code>
            <code className="text-xs text-slate-300 block">Progressive UI Rendering</code>
          </div>
        </div>

        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-amber-500/20">
          <h3 className="text-xl font-semibold text-amber-200 mb-4">Frontend Stack</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span><strong>Next.js 14:</strong> App router, server components, API routes</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span><strong>React:</strong> Component architecture, hooks, state management</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span><strong>TypeScript:</strong> Type-safe development</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span><strong>Tailwind CSS:</strong> Cinematic dark interface design</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span><strong>Vitest:</strong> Unit and integration testing</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Key Engineering Challenges</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Structured AI Outputs</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Ensuring AI responses consistently returned valid structured JSON required schema validation, prompt iteration, parsing recovery systems, and fallback handling. This was critical for reliable system operation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Multimodal Coordination</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Coordinating recommendation generation, mood board generation, image synthesis, and progressive rendering required careful asynchronous workflow management to maintain responsiveness and immersion.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Reliability & Graceful Degradation</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              AI products must remain functional even when APIs fail. Fallback systems were implemented to ensure stable user experience, consistent outputs, and resilient workflows.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Progressive Rendering</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Mood board content renders first while texture imagery loads asynchronously afterward, improving perceived performance, responsiveness, and immersion.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Design Decisions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Cinematic Dark Interface</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              The visual direction focused on immersion, atmosphere, emotional tone, and low visual clutter. Dark gradients and cinematic layouts were used to make the experience feel more like an interactive entertainment platform than a utility dashboard.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Multi-Step User Flows</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              The structured interaction flow reduces cognitive load and creates a more guided and intentional experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Emotional Personalization</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Rather than recommending content only through genre matching, MoodQuest focuses heavily on emotional tone, aesthetic identity, sensory atmosphere, and experiential alignment.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>What I Learned</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Building MoodQuest taught me that AI product development requires significantly more than simply integrating APIs. Key lessons included designing structured AI workflows, balancing creativity with reliability, building graceful fallback systems, managing asynchronous AI interactions, improving UX around AI-generated content, and safely validating structured AI outputs.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          The project deepened my understanding of how frontend engineering, product thinking, AI integration, and user experience design work together within modern AI-powered applications.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-amber-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Outcome</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          MoodQuest evolved from a simple recommendation concept into a fully interactive multimodal AI product experience. The final system demonstrates AI Product Engineering, recommendation system design, multimodal AI workflows, frontend architecture, UX-focused system thinking, structured AI outputs, reliability engineering, progressive rendering, and testing and validation.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          The project was intentionally designed to feel like a real AI-powered product rather than a traditional student AI demo, showcasing the depth of modern AI Product Engineering.
        </p>
      </section>

      <ContactCTA 
        projectTitle="AI product engineering"
        accentColor="#f59e0b"
      />

      <ProjectNavigation currentSlug="moodquest" />
      
    </div>
  );
}
