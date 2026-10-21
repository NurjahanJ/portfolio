"use client";

import { notFound } from 'next/navigation'
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ImageSlideshow } from "@/components/image-slideshow";
import { ProjectNavigation } from "@/components/project-navigation";
import { ContactCTA } from "@/components/contact-cta";
import { BackToProjects } from "@/components/back-to-projects";
import { CaseStudyTags } from "@/components/case-study-tags";
import { SectionHeading } from "@/components/section-heading";

// Accent styling for this case study (orange / pink)
const accentText = "text-orange-300";
const accentBar = "bg-gradient-to-b from-orange-300 to-pink-400";
const cardClass =
  "rounded-xl border border-orange-500/20 bg-[rgba(10,17,40,0.5)] p-6 transition-colors duration-300 hover:border-orange-500/40";

export default function StitchPalCaseStudy() {
  // Find the StitchPal case study
  const caseStudy = caseStudies.find(study => study.slug === "stitchpal");

  if (!caseStudy) {
    notFound();
  }

  const glance = [
    { label: "Role", value: "UX/UI design and Flutter development (solo)" },
    { label: "Context", value: "Final project for Generative AI course, 3-week sprint" },
    { label: "Platform", value: "Flutter (Android, iOS, Web)" },
    {
      label: "Tech",
      value:
        "Flutter, GPT-4 API, DALL-E for images, Material Design 3, Google Fonts (Playfair Display, Merriweather, Nunito Sans)",
    },
    { label: "Status", value: "Fully functional Flutter app with Vercel web deployment configuration" },
  ];

  const features = [
    {
      title: "AI Pattern Generator",
      body: "GPT-4 powered pattern creation with structured JSON parsing. Generates title, skill level, materials list, step-by-step instructions, and stitch abbreviations from natural language descriptions.",
    },
    {
      title: "Smart Yarn Suggestions",
      body: "AI-powered yarn recommendations with brand names, specific yarn types, color options, and direct purchase links. Includes fallback suggestions when API is unavailable.",
    },
    {
      title: "Project Management Hub",
      body: "Save and organize projects with progress tracking, tag-based filtering, and persistent local storage. Features project cards with skill level badges and completion status.",
    },
    {
      title: "Comprehensive Tool Suite",
      body: "Multi-counter stitch tracker, gauge calculator, hook/yarn conversion charts, project timer with break notifications, and guided hand stretches for ergonomic health.",
    },
    {
      title: "AI Image Generation",
      body: "DALL-E integration for pattern visualization, helping users see their projects before starting. Enhances pattern understanding and inspiration.",
    },
    {
      title: "Global Assistant",
      body: "Floating StitchPal assistant with contextual help, pattern guidance, and chat-based support throughout the crafting process.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-20 pb-16">
      {/* Back button */}
      <BackToProjects />

      {/* Header */}
      <header className="space-y-5">
        <div className={`uppercase tracking-widest text-xs font-semibold ${accentText}`}>
          APP DESIGN | MVP (Class Project)
        </div>

        <h1 className="text-headline md:text-5xl font-serif font-medium bg-gradient-to-r from-orange-200 to-pink-300 bg-clip-text text-transparent">
          {caseStudy.title}
        </h1>

        <p className="text-subtitle md:text-2xl font-serif text-slate-200 max-w-2xl">
          AI-powered product that generates structured crochet patterns and supports an end-to-end creative workflow.
        </p>

        <CaseStudyTags tags={caseStudy.tags} colorClass="text-orange-300 border-orange-500/30 hover:bg-orange-900/30" />

        <div className="flex flex-wrap gap-3 pt-2">
          {caseStudy.demo && (
            <Button asChild size="lg" className="rounded-full px-6 bg-gradient-to-r from-orange-400 to-pink-400 hover:from-pink-400 hover:to-orange-400 text-white transition-all duration-300">
              <Link href={caseStudy.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View Demo
              </Link>
            </Button>
          )}
          {caseStudy.github && (
            <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-transparent border-orange-500/40 text-orange-200 hover:bg-orange-900/20 hover:border-orange-400 transition-all duration-300">
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
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 rounded-xl border border-orange-500/20 bg-[rgba(10,17,40,0.4)] p-6 md:p-8">
          {glance.map((item) => (
            <div key={item.label} className={item.label === "Tech" || item.label === "Status" ? "sm:col-span-2" : ""}>
              <dt className={`text-xs uppercase tracking-widest mb-1.5 ${accentText}`}>{item.label}</dt>
              <dd className="text-slate-200 leading-relaxed">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Problem */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Problem</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          As a beginner crocheter, I found myself constantly switching between YouTube tutorials, blogs, Pinterest, stitch counters, and sizing charts. This fragmented process made it hard to stay focused and enjoy the craft.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          <span className="font-medium text-white">Goal:</span> Create a comprehensive crochet companion that combines AI-powered pattern generation with essential tools, project management, and wellness features to support crafters throughout their entire creative journey.
        </p>
      </section>

      {/* Product Thinking */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Product Thinking</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          I approached StitchPal as a product, not just a class project. The goal was to reduce context switching and cognitive load by consolidating multiple tools into a single AI-powered workflow. Instead of users switching between tutorials, counters, and pattern generators, StitchPal integrates these into one cohesive system.
        </p>
      </section>

      {/* Context and Constraints */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Context and Constraints</SectionHeading>
        <ul className="space-y-3">
          {[
            ["Requirement:", "Final project had to use a generative AI element."],
            ["Timeframe:", "Three weeks, so I prioritized coding an MVP over detailed wireframes."],
            ["Pivot:", "I initially explored using the Pinterest API to pull existing crochet patterns, but after access issues I pivoted to generating original patterns with GPT-4."],
            ["Design Vision:", "A calming pink and beige color palette to reflect crochet's soothing nature and reduce visual fatigue."],
          ].map(([label, text]) => (
            <li key={label} className="flex gap-3 text-slate-300">
              <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400`} aria-hidden="true" />
              <span className="text-lg leading-relaxed"><span className="font-medium text-white">{label}</span> {text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Design Process */}
      <section className="space-y-8">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Design Process</SectionHeading>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-200">Brainstorming</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            I started by listing what would make crocheting easier: a pattern generator, a place to save projects, and a set of built-in tools (stitch counter, charts, timer).
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-200">Early Exploration</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Instead of spending time on polished wireframes, I made quick sketches of flows:<br/>
            Create Project → Generate Pattern → Save to Hub<br/>
            Tools → Counter, Gauge, Charts, Timer, Stretch Guide
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-200">Visual Language &amp; Design System</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="font-medium text-white">Color Palette:</span> Coral peach (#E8A598) primary, sage green (#9ECEC3) secondary, warm amber (#F6C9A0) accent - carefully chosen for warmth and calmness.<br/>
            <span className="font-medium text-white">Typography:</span> Mixed serif/sans-serif system - Playfair Display for elegant headings, Merriweather for warm readable text, Nunito Sans for UI elements.<br/>
            <span className="font-medium text-white">Layout:</span> Bottom navigation with Create, My Projects, Tools tabs plus floating StitchPal assistant.<br/>
            <span className="font-medium text-white">Components:</span> Material Design 3 with custom theming, rounded corners (16px cards, 12px buttons), subtle shadows and elevations.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-200">Building &amp; Iteration</h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Jumped directly into Flutter coding with GPT-4 integration.<br/>
            Tuned prompts to generate structured patterns (materials → steps → yarn suggestions).<br/>
            Added UI polish as I coded: tags for filtering, progress bars, and ergonomic reminders.
          </p>
        </div>
      </section>

      {/* What I built */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>What I built</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-orange-200 mb-2">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Technical Architecture</SectionHeading>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-orange-200 mb-4">Flutter App Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-3">Core Architecture</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {[
                  ["Models:", "CrochetPattern, Material, Instruction, YarnSuggestion"],
                  ["Services:", "OpenAI API integration, Project management, Notifications"],
                  ["Screens:", "Project Input, Pattern Results, Saved Projects, Tools"],
                  ["Widgets:", "35+ custom components for specialized crochet functionality"],
                ].map(([label, text]) => (
                  <li key={label} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                    <span><strong className="text-white">{label}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">Key Technologies</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {[
                  ["Flutter SDK:", "Cross-platform development with Material Design 3"],
                  ["OpenAI API:", "GPT-4 for patterns, DALL-E for images"],
                  ["Google Fonts:", "Typography system with 3 font families"],
                  ["Local Storage:", "Project persistence and user preferences"],
                ].map(([label, text]) => (
                  <li key={label} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                    <span><strong className="text-white">{label}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-orange-200 mb-4">AI Integration Strategy</h3>
          <div className="space-y-5">
            <div>
              <h4 className="font-medium text-white mb-2">Pattern Generation Pipeline</h4>
              <p className="text-slate-300 text-sm mb-3">Sophisticated prompt engineering with structured AI output using JSON parsing and error handling:</p>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <code className="text-xs text-slate-300">
                  User Input → GPT-4 Prompt → JSON Response → Parse &amp; Validate → CrochetPattern Object → UI Display
                </code>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Robust Error Handling for API Failures</h4>
              <ul className="space-y-1.5 text-slate-300 text-sm">
                {[
                  "Fallback logic for degraded AI performance with sample patterns",
                  "Structured JSON parsing with error recovery",
                  "Rate limiting and authentication error handling",
                  "Graceful degradation for offline use",
                ].map((text) => (
                  <li key={text} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Screenshots */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Project Screenshots</SectionHeading>
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
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Reflections</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          Since this was a fast-paced class project, there was no time for formal user testing. Instead, I reflected on my own use of the app, gathered feedback from fellow crafters, and analyzed the design decisions made along the way.
        </p>
        <ul className="space-y-3">
          {[
            "The integrated approach was a huge improvement compared to juggling separate apps.",
            "Progress bars added a clear sense of tracking and motivation.",
            "Break reminders and the hand stretch guide introduced a health-focused dimension that made the app feel more supportive.",
            "Navigation needed to remain extremely simple so beginners wouldn't feel overwhelmed.",
          ].map((text) => (
            <li key={text} className="flex gap-3 text-slate-300">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
              <span className="text-lg leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Challenges */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Challenges</SectionHeading>
        <ul className="space-y-3">
          {[
            ["Pinterest API:", "Could not get access, so I pivoted to GPT-4 for generating new patterns."],
            ["Prompt design:", "Took trial and error to structure GPT-4 responses consistently."],
            ["Scope:", "With only three weeks, I focused on core features and left polish for later."],
          ].map(([label, text]) => (
            <li key={label} className="flex gap-3 text-slate-300">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
              <span className="text-lg leading-relaxed"><span className="font-medium text-white">{label}</span> {text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Conclusion */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Conclusion</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          StitchPal demonstrates my ability to create comprehensive, user-centered solutions that combine emerging technologies with thoughtful design:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={cardClass}>
            <h3 className="text-base font-semibold text-orange-200 mb-3">Design &amp; Research Skills</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "Identify and validate user pain points through personal experience",
                "Create cohesive design systems with intentional color, typography, and component choices",
                "Design for accessibility and wellness (ergonomic features, break reminders)",
              ].map((text) => (
                <li key={text} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={cardClass}>
            <h3 className="text-base font-semibold text-orange-200 mb-3">Technical &amp; AI Integration</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "Implement complex AI workflows with robust error handling",
                "Build cross-platform applications with Flutter and Material Design 3",
                "Create scalable architecture with 35+ custom components",
              ].map((text) => (
                <li key={text} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-orange-500/20 bg-[rgba(232,165,152,0.08)] p-6">
          <p className="text-orange-100 text-lg leading-relaxed">
            <span className="font-medium text-white">Key Achievement:</span> Successfully integrated multiple AI APIs (GPT-4, DALL-E) into a cohesive user experience while maintaining app functionality even when APIs are unavailable - demonstrating both technical proficiency and user-centered thinking.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        projectTitle="mobile app development"
        accentColor="#f97316"
      />

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="stitchpal" />
    </article>
  );
}
