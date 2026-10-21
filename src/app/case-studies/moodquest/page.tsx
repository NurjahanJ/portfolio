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
import { SectionHeading } from "@/components/section-heading";

// Accent styling for this case study (amber / orange)
const accentText = "text-amber-300";
const accentBar = "bg-gradient-to-b from-amber-300 to-orange-400";
const cardClass =
  "rounded-xl border border-amber-500/20 bg-[rgba(10,17,40,0.5)] p-6 transition-colors duration-300 hover:border-amber-500/40";

export default function MoodQuestCaseStudy() {
  const caseStudy = caseStudies.find(study => study.slug === "moodquest");

  if (!caseStudy) {
    notFound();
  }

  const glance = [
    { label: "Role", value: "Full-stack AI product engineering (design, frontend, AI integration)" },
    { label: "Type", value: "Portfolio project exploring modern AI Product Engineering" },
    { label: "Platform", value: "Web (Next.js, React, TypeScript)" },
    { label: "Tech", value: "Next.js 14, React, TypeScript, Tailwind CSS, OpenAI GPT-4o-mini, gpt-image-2, Vitest", wide: true },
    { label: "Status", value: "Live demo on Netlify", wide: true },
  ];

  const features = [
    {
      title: "AI Mood Board Generator",
      body: "Generate immersive mood boards for any game or movie title with atmospheric descriptions, emotional themes, aesthetic tags, curated playlists, color palettes, sensory textures, similar media recommendations, and AI-generated abstract texture imagery using OpenAI gpt-image-2 with progressive rendering.",
    },
    {
      title: "Recommendation Engine",
      body: "Personalized recommendations based on mood, available time, platform, genre preferences, and play/watch style. Features Quick Match, Deep Match, and Surprise Me modes with confidence scoring, taste profile generation, and recommendation refinement.",
    },
    {
      title: "Dual-Mode Experience",
      body: "Seamlessly switch between Mood Board and Recommendation modes with conversational UI patterns, immersive transitions, cinematic visual design, and Lumi AI assistant interactions.",
    },
    {
      title: "Intelligent Fallback Systems",
      body: "Reliability-focused fallback systems maintain functionality even when AI APIs fail, including local recommendation scoring, curated fallback mood boards, structured fallback outputs, and graceful degradation handling.",
    },
  ];

  const workflow = [
    "User Input",
    "Validation Layer",
    "GPT-4o-mini",
    "Structured JSON Output",
    "Mood Board / Recommendation Renderer",
    "gpt-image-2 Texture Generation",
    "Progressive UI Rendering",
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-20 pb-16">
      <BackToProjects />

      {/* Header */}
      <header className="space-y-5">
        <div className={`uppercase tracking-widest text-xs font-semibold ${accentText}`}>
          APP DESIGN | AI PRODUCT ENGINEERING
        </div>

        <h1 className="text-headline md:text-5xl font-serif font-medium bg-gradient-to-r from-amber-100 to-orange-300 bg-clip-text text-transparent">
          {caseStudy.title}
        </h1>

        <p className="text-subtitle md:text-2xl font-serif text-slate-200 max-w-2xl">
          Discover your next vibe. AI-powered emotional discovery platform combining immersive mood boards with intelligent recommendations.
        </p>

        <CaseStudyTags tags={caseStudy.tags} colorClass="text-amber-300 border-amber-500/30 hover:bg-amber-900/30" />

        <div className="flex flex-wrap gap-3 pt-2">
          {caseStudy.demo && (
            <Button asChild size="lg" className="rounded-full px-6 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-orange-400 hover:to-amber-400 text-white transition-all duration-300">
              <Link href={caseStudy.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View Demo
              </Link>
            </Button>
          )}
          {caseStudy.github && (
            <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-transparent border-amber-500/40 text-amber-200 hover:bg-amber-900/20 hover:border-amber-400 transition-all duration-300">
              <Link href={caseStudy.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
                <Github className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </Link>
            </Button>
          )}
        </div>
      </header>

      {/* At a glance */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>At a glance</SectionHeading>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 rounded-xl border border-amber-500/20 bg-[rgba(10,17,40,0.4)] p-6 md:p-8">
          {glance.map((item) => (
            <div key={item.label} className={item.wide ? "sm:col-span-2" : ""}>
              <dt className={`text-xs uppercase tracking-widest mb-1.5 ${accentText}`}>{item.label}</dt>
              <dd className="text-slate-200 leading-relaxed">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Overview */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Overview</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          MoodQuest is a dual-mode AI application designed to transform entertainment discovery into a more emotional and immersive experience. The platform combines AI-powered recommendation systems, multimodal AI generation, cinematic visual design, structured AI workflows, progressive rendering, and reliability-focused fallback systems.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          Users can either generate immersive AI mood boards for games and movies, or receive personalized recommendations based on mood, platform, available time, and preferences. Built as an AI Product Engineering portfolio project, MoodQuest explores how AI systems can feel more experiential, aesthetic, and emotionally driven rather than purely utility-focused.
        </p>
      </section>

      {/* The Problem */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>The Problem</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          Most recommendation systems focus only on functionality: "What should I watch?" or "What should I play?" But people often search for entertainment emotionally rather than logically. Users usually know the atmosphere they want, the emotional energy they want, and the aesthetic experience they want—but traditional recommendation systems rarely capture mood, emotional tone, cinematic atmosphere, or sensory identity.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          MoodQuest was designed to bridge that gap through AI-powered emotional personalization and immersive visual exploration.
        </p>
      </section>

      {/* Product Goals */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Product Goals</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          The primary goal was to create a product that felt like a complete AI-powered experience rather than a simple chatbot or recommendation demo. The system was intentionally designed around emotional discovery, immersive interaction, explainable AI recommendations, cinematic UI design, and reliability-focused engineering. The project also served as a way to explore the expectations of modern AI Product Engineering and AI Frontend Engineering roles.
        </p>
      </section>

      {/* Core Features */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Core Features</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-amber-200 mb-2">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Integration */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>AI Integration</SectionHeading>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">GPT-4o-mini</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Used for mood board generation, recommendation generation, emotional analysis, structured JSON outputs, and taste profile generation. Sophisticated prompt engineering ensures consistent, valid structured responses.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">gpt-image-2</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Used for abstract texture imagery, aesthetic visualization, and sensory visual generation. Images load progressively to improve perceived performance and immersion.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Technical Architecture</SectionHeading>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-amber-200 mb-4">System Workflow</h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {workflow.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <code className="text-xs text-slate-200 bg-slate-800/60 border border-slate-700 rounded-md px-3 py-1.5">{step}</code>
                {index < workflow.length - 1 && <span className="text-amber-400/70" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-amber-200 mb-4">Frontend Stack</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            {[
              ["Next.js 14:", "App router, server components, API routes"],
              ["React:", "Component architecture, hooks, state management"],
              ["TypeScript:", "Type-safe development"],
              ["Tailwind CSS:", "Cinematic dark interface design"],
              ["Vitest:", "Unit and integration testing"],
            ].map(([label, text]) => (
              <li key={label} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                <span><strong className="text-white">{label}</strong> {text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Engineering Challenges */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Key Engineering Challenges</SectionHeading>
        <div className="space-y-6">
          {[
            ["Structured AI Outputs", "Ensuring AI responses consistently returned valid structured JSON required schema validation, prompt iteration, parsing recovery systems, and fallback handling. This was critical for reliable system operation."],
            ["Multimodal Coordination", "Coordinating recommendation generation, mood board generation, image synthesis, and progressive rendering required careful asynchronous workflow management to maintain responsiveness and immersion."],
            ["Reliability & Graceful Degradation", "AI products must remain functional even when APIs fail. Fallback systems were implemented to ensure stable user experience, consistent outputs, and resilient workflows."],
            ["Progressive Rendering", "Mood board content renders first while texture imagery loads asynchronously afterward, improving perceived performance, responsiveness, and immersion."],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-amber-200 mb-2">{title}</h3>
              <p className="text-slate-300 text-lg leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Decisions */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Design Decisions</SectionHeading>
        <div className="space-y-6">
          {[
            ["Cinematic Dark Interface", "The visual direction focused on immersion, atmosphere, emotional tone, and low visual clutter. Dark gradients and cinematic layouts were used to make the experience feel more like an interactive entertainment platform than a utility dashboard."],
            ["Multi-Step User Flows", "The structured interaction flow reduces cognitive load and creates a more guided and intentional experience."],
            ["Emotional Personalization", "Rather than recommending content only through genre matching, MoodQuest focuses heavily on emotional tone, aesthetic identity, sensory atmosphere, and experiential alignment."],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-amber-200 mb-2">{title}</h3>
              <p className="text-slate-300 text-lg leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>What I Learned</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          Building MoodQuest taught me that AI product development requires significantly more than simply integrating APIs. Key lessons included designing structured AI workflows, balancing creativity with reliability, building graceful fallback systems, managing asynchronous AI interactions, improving UX around AI-generated content, and safely validating structured AI outputs.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          The project deepened my understanding of how frontend engineering, product thinking, AI integration, and user experience design work together within modern AI-powered applications.
        </p>
      </section>

      {/* Outcome */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Outcome</SectionHeading>
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
    </article>
  );
}
