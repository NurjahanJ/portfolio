"use client";

import { notFound } from 'next/navigation'
import Link from "next/link";
import { ExternalLink, Users, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ProjectNavigation } from "@/components/project-navigation";
import { ContactCTA } from "@/components/contact-cta";
import { BackToProjects } from "@/components/back-to-projects";
import { CaseStudyTags } from "@/components/case-study-tags";
import { SectionHeading } from "@/components/section-heading";

// Accent styling for this case study (emerald / green)
const accentText = "text-emerald-300";
const accentBar = "bg-gradient-to-b from-green-300 to-emerald-400";
const cardClass =
  "rounded-xl border border-emerald-500/20 bg-[rgba(10,17,40,0.5)] p-6 transition-colors duration-300 hover:border-emerald-500/40";

export default function PowerUpOrPowerDownCaseStudy() {
  // Find the Power Up Or Power Down case study
  const caseStudy = caseStudies.find(study => study.slug === "power-up-or-power-down");

  if (!caseStudy) {
    notFound();
  }

  const glance = [
    { label: "Role", value: "UX Researcher, Developer, and Team Collaborator" },
    { label: "Context", value: "IT481: Prototyping in UX course project, one-month timeline" },
    { label: "Research", value: "Survey with 33+ college students on ChatGPT usage patterns" },
    { label: "Tech", value: "React, Tailwind CSS, OpenAI API, Convex database", wide: true },
    { label: "Deliverables", value: "Two functional prototypes demonstrating environmental awareness design nudges", wide: true },
  ];

  const nudgeConcepts = [
    { title: "Color-Changing Screen", body: "Background changes from green (low usage) to red (high usage) based on energy consumption", border: "border-green-500/30", bg: "bg-green-900/20", text: "text-green-300" },
    { title: "Battery Icon", body: "Visual battery that depletes with each prompt, reflecting resource consumption", border: "border-orange-500/30", bg: "bg-orange-900/20", text: "text-orange-300" },
    { title: "Reminder Messages", body: "Occasional prompts encouraging mindful usage patterns", border: "border-blue-500/30", bg: "bg-blue-900/20", text: "text-blue-300" },
    { title: "Usage Analytics", body: "Personal dashboard showing environmental impact over time", border: "border-purple-500/30", bg: "bg-purple-900/20", text: "text-purple-300" },
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-20 pb-16">
      {/* Back button */}
      <BackToProjects />

      {/* Header */}
      <header className="space-y-5">
        <div className={`uppercase tracking-widest text-xs font-semibold ${accentText}`}>
          UX RESEARCH | PROTOTYPING
        </div>

        <h1 className="text-headline md:text-5xl font-serif font-medium bg-gradient-to-r from-green-200 to-emerald-300 bg-clip-text text-transparent">
          {caseStudy.title}
        </h1>

        <p className="text-subtitle md:text-2xl font-serif text-slate-200 max-w-2xl">
          Raising awareness about the environmental impact of generative AI through interactive design nudges.
        </p>

        <CaseStudyTags tags={caseStudy.tags} colorClass="text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/30" />

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" className="rounded-full px-6 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-green-500 hover:to-emerald-400 text-white transition-all duration-300">
            <Link href="https://chatgpt-colorpage.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              View Colorpage Demo
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-transparent border-orange-500/40 text-orange-200 hover:bg-orange-900/20 hover:border-orange-400 transition-all duration-300">
            <Link href="https://chatgpt-battery-icon.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
              <Zap className="h-4 w-4" aria-hidden="true" />
              View Battery Demo
            </Link>
          </Button>
        </div>

        {caseStudy.collaborators && caseStudy.collaborators.length > 0 && (
          <p className="text-slate-300 text-base pt-1">
            <span className="font-medium text-white">Collaborators:</span> {caseStudy.collaborators.join(", ")}
          </p>
        )}
      </header>

      {/* At a glance */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>At a glance</SectionHeading>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 rounded-xl border border-emerald-500/20 bg-[rgba(10,17,40,0.4)] p-6 md:p-8">
          {glance.map((item) => (
            <div key={item.label} className={item.wide ? "sm:col-span-2" : ""}>
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
          As generative AI tools like ChatGPT become increasingly popular, users remain largely unaware of their environmental impact. Each prompt consumes significant energy, water, and computational resources, contributing to carbon emissions.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          <span className="font-medium text-white">Challenge:</span> How might we raise awareness about the environmental costs of AI usage while encouraging more mindful consumption patterns through design interventions?
        </p>
        <div className="rounded-xl border border-emerald-500/20 bg-[rgba(34,197,94,0.08)] p-6">
          <p className="text-emerald-100 text-lg leading-relaxed">
            <span className="font-medium text-white">Project Goal:</span> Design and prototype solutions that make the invisible environmental impact of AI visible and actionable for users.
          </p>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Research &amp; Insights</SectionHeading>

        <div className={cardClass}>
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-emerald-200">User Survey (33+ College Students)</h3>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">We conducted research to understand current ChatGPT usage patterns and environmental awareness levels.</p>
          <ul className="space-y-2 text-slate-300">
            {[
              "How often do you use ChatGPT?",
              "What do you primarily use it for?",
              "How many prompts do you submit per session?",
              "Are you aware of the environmental impacts?",
            ].map((q) => (
              <li key={q} className="flex gap-2"><span className="text-emerald-400 shrink-0" aria-hidden="true">→</span>{q}</li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-emerald-200">Design Nudge Concepts</h3>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">Based on research, we explored various design interventions:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nudgeConcepts.map((c) => (
              <div key={c.title} className={`${c.bg} p-4 rounded-lg border ${c.border}`}>
                <h4 className={`font-medium ${c.text} mb-2`}>{c.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Decision */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Design Decision</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          Survey results showed strong preference for the <span className="font-medium text-emerald-300">color-changing screen</span> and <span className="font-medium text-orange-300">battery icon</span> concepts. These visual feedback systems were perceived as intuitive and non-intrusive.
        </p>
        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-emerald-200 mb-4">Why We Chose to Code Prototypes</h3>
          <ul className="space-y-3 text-slate-300">
            {[
              ["Figma Limitations:", "Static mockups couldn't demonstrate the dynamic color changes and real-time feedback"],
              ["Time Constraints:", "One month timeline required rapid iteration and testing"],
              ["Interaction Fidelity:", "Functional prototypes better demonstrated the user experience"],
              ["API Integration:", "Real ChatGPT responses made the prototypes more convincing"],
            ].map(([label, text]) => (
              <li key={label} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                <span><span className="font-medium text-white">{label}</span> {text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prototypes */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>The Prototypes</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colorpage Prototype */}
          <div className="rounded-xl border border-emerald-500/30 bg-[rgba(10,17,40,0.5)] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-400 rounded-full" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-emerald-200">Colorpage Prototype</h3>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              A ChatGPT-like interface where the background color dynamically changes based on input length, creating a visual "mood ring" effect.
            </p>
            <div className="space-y-2 text-sm text-slate-300 mb-5">
              {[
                ["bg-green-500", "0-50 characters: Green (low impact)"],
                ["bg-yellow-500", "51-150 characters: Yellow (medium impact)"],
                ["bg-red-500", "151-300 characters: Red (high impact)"],
                ["bg-purple-500", "301+ characters: Purple (very high impact)"],
              ].map(([swatch, text]) => (
                <div key={text} className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded ${swatch}`} aria-hidden="true" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <Button asChild size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="https://chatgpt-colorpage.vercel.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Try Colorpage Demo
              </Link>
            </Button>
          </div>

          {/* Battery Prototype */}
          <div className="rounded-xl border border-orange-500/30 bg-[rgba(10,17,40,0.5)] p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-5 w-5 text-orange-400" />
              <h3 className="text-lg font-semibold text-orange-200">Battery Prototype</h3>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Features a visual battery icon that depletes with each prompt, gamifying the environmental awareness experience.
            </p>
            <div className="space-y-2 text-sm text-slate-300 mb-5">
              {[
                ["bg-green-500", "0-3 prompts: Full battery (green)"],
                ["bg-orange-500", "4-6 prompts: Medium battery (orange)"],
                ["bg-red-500", "7-10 prompts: Low battery (red)"],
                ["bg-gray-500", "11+ prompts: Empty with warning"],
              ].map(([swatch, text]) => (
                <div key={text} className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded ${swatch}`} aria-hidden="true" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <Button asChild size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="https://chatgpt-battery-icon.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Zap className="mr-2 h-4 w-4" />
                Try Battery Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Technical Implementation</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Shared Features</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "React with Tailwind CSS",
                "OpenAI API integration",
                "Dark/light theme support",
                "Responsive design",
                "Real-time visual feedback",
              ].map((text) => (
                <li key={text} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />{text}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-orange-500/20 bg-[rgba(10,17,40,0.5)] p-6">
            <h3 className="text-lg font-semibold text-orange-200 mb-3">Battery-Specific Features</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "Convex database integration",
                "Express.js backend",
                "Persistent session tracking",
                "Usage analytics logging",
                "Advanced state management",
              ].map((text) => (
                <li key={text} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Results &amp; Impact</SectionHeading>
        <div className="rounded-xl border border-emerald-500/20 bg-[rgba(34,197,94,0.08)] p-6">
          <h3 className="text-lg font-semibold text-emerald-200 mb-4">Project Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-3">User Experience</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {["Intuitive visual feedback systems", "Non-intrusive awareness building", "Gamified environmental consciousness"].map((t) => (
                  <li key={t} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">Technical Achievement</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {["Two fully functional prototypes", "Real-time API integration", "Deployed and accessible demos"].map((t) => (
                  <li key={t} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Reflections</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">What Worked Well</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                ["Research-driven approach:", "User survey provided clear direction for design decisions"],
                ["Rapid prototyping:", "Coding allowed us to test interactions that static mockups couldn't capture"],
                ["Dual approach:", "Two different concepts provided comprehensive exploration of design nudges"],
              ].map(([label, text]) => (
                <li key={label} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span><span className="font-medium text-white">{label}</span> {text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Lessons Learned</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                ["Environmental UX:", "Subtle visual cues can effectively raise awareness without disrupting user flow"],
                ["Prototype fidelity:", "Functional prototypes generated more meaningful feedback than static designs"],
                ["Time management:", "Balancing research depth with implementation speed in academic constraints"],
              ].map(([label, text]) => (
                <li key={label} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span><span className="font-medium text-white">{label}</span> {text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Future Opportunities</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            ["User Testing", "Conduct formal usability testing to measure the effectiveness of design nudges in changing user behavior and environmental awareness."],
            ["Integration", "Explore partnerships with AI platforms to integrate environmental awareness features into existing tools."],
            ["Analytics", "Develop comprehensive usage analytics to track long-term behavior changes and environmental impact reduction."],
            ["Expansion", "Apply similar design nudge principles to other resource-intensive digital activities and platforms."],
          ].map(([title, body]) => (
            <div key={title} className={cardClass}>
              <h3 className="text-base font-semibold text-emerald-200 mb-2">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        projectTitle="similar UX research projects"
        accentColor="#22c55e"
      />

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="power-up-or-power-down" />
    </article>
  );
}
