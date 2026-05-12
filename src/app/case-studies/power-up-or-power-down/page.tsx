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

export default function PowerUpOrPowerDownCaseStudy() {
  // Find the Power Up Or Power Down case study
  const caseStudy = caseStudies.find(study => study.slug === "power-up-or-power-down");
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
      {/* Back button */}
      <BackToProjects />
      
      {/* Header */}
      <header className="space-y-4">
        <div className="uppercase tracking-wider text-sm font-medium text-sky-400 mb-2">
          UX RESEARCH | PROTOTYPING
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-200 to-emerald-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3)', fontFamily: 'var(--font-lora)', fontWeight: 500, lineHeight: '1.2' }}>
          {caseStudy.title}
        </h1>

        <p className="text-xl md:text-2xl mt-4" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500, color: 'white', textShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>
          Raising awareness about the environmental impact of generative AI through interactive design nudges.
        </p>
        
        <CaseStudyTags tags={caseStudy.tags} colorClass="text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/30" />
        
        <div className="mt-6 flex gap-4">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-6 py-2 text-base bg-transparent hover:bg-transparent relative group overflow-hidden"
          >
            <Link 
              href="https://chatgpt-colorpage.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative z-10 text-white font-medium"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-emerald-300 transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-emerald-300 group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
              <span className="relative z-20 flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>
                <ExternalLink className="mr-1 h-4 w-4" aria-hidden="true" />
                View Colorpage Demo
              </span>
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-6 py-2 text-base bg-transparent hover:bg-transparent relative group overflow-hidden"
          >
            <Link 
              href="https://chatgpt-battery-icon.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative z-10 text-white font-medium"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-300 to-orange-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-300 transition-all duration-300"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-300 to-orange-500 rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-300 group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
              <span className="relative z-20 flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>
                <Zap className="mr-1 h-4 w-4" aria-hidden="true" />
                View Battery Demo
              </span>
            </Link>
          </Button>
        </div>

        {caseStudy.collaborators && caseStudy.collaborators.length > 0 && (
          <div className="mt-4">
            <p className="text-slate-300 text-base">
              <span className="font-medium text-white">Collaborators:</span> {caseStudy.collaborators.join(", ")}
            </p>
          </div>
        )}
      </header>
      
      {/* At a glance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>At a glance</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Role:</span> UX Researcher, Developer, and Team Collaborator</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Context:</span> IT481: Prototyping in UX course project, one-month timeline</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Research:</span> Survey with 33+ college students on ChatGPT usage patterns</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Tech:</span> React, Tailwind CSS, OpenAI API, Convex database</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Deliverables:</span> Two functional prototypes demonstrating environmental awareness design nudges</span>
          </li>
        </ul>
      </section>

      {/* Problem */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Problem</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          As generative AI tools like ChatGPT become increasingly popular, users remain largely unaware of their environmental impact. Each prompt consumes significant energy, water, and computational resources, contributing to carbon emissions.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          <span className="font-medium text-white">Challenge:</span> How might we raise awareness about the environmental costs of AI usage while encouraging more mindful consumption patterns through design interventions?
        </p>
        <div className="bg-[rgba(34,197,94,0.1)] p-6 rounded-lg border border-emerald-500/20">
          <p className="text-emerald-200 text-lg">
            <span className="font-medium">Project Goal:</span> Design and prototype solutions that make the invisible environmental impact of AI visible and actionable for users.
          </p>
        </div>
      </section>
      
      {/* Research Process */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Research & Insights</h2>
        
        <div className="space-y-6">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-emerald-200">User Survey (33+ College Students)</h3>
            </div>
            <p className="text-slate-300 mb-4">We conducted research to understand current ChatGPT usage patterns and environmental awareness levels.</p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">→</span>
                <span>How often do you use ChatGPT?</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">→</span>
                <span>What do you primarily use it for?</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">→</span>
                <span>How many prompts do you submit per session?</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">→</span>
                <span>Are you aware of the environmental impacts?</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-emerald-200">Design Nudge Concepts</h3>
            </div>
            <p className="text-slate-300 mb-4">Based on research, we explored various design interventions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-900/20 p-4 rounded border border-green-500/30">
                <h4 className="font-medium text-green-300 mb-2">Color-Changing Screen</h4>
                <p className="text-sm text-slate-300">Background changes from green (low usage) to red (high usage) based on energy consumption</p>
              </div>
              <div className="bg-orange-900/20 p-4 rounded border border-orange-500/30">
                <h4 className="font-medium text-orange-300 mb-2">Battery Icon</h4>
                <p className="text-sm text-slate-300">Visual battery that depletes with each prompt, reflecting resource consumption</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded border border-blue-500/30">
                <h4 className="font-medium text-blue-300 mb-2">Reminder Messages</h4>
                <p className="text-sm text-slate-300">Occasional prompts encouraging mindful usage patterns</p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded border border-purple-500/30">
                <h4 className="font-medium text-purple-300 mb-2">Usage Analytics</h4>
                <p className="text-sm text-slate-300">Personal dashboard showing environmental impact over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Decision */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Design Decision</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Survey results showed strong preference for the <span className="font-medium text-emerald-300">color-changing screen</span> and <span className="font-medium text-orange-300">battery icon</span> concepts. These visual feedback systems were perceived as intuitive and non-intrusive.
        </p>
        
        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
          <h3 className="text-xl font-semibold text-emerald-200 mb-4">Why We Chose to Code Prototypes</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span><span className="font-medium text-white">Figma Limitations:</span> Static mockups couldn't demonstrate the dynamic color changes and real-time feedback</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span><span className="font-medium text-white">Time Constraints:</span> One month timeline required rapid iteration and testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span><span className="font-medium text-white">Interaction Fidelity:</span> Functional prototypes better demonstrated the user experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span><span className="font-medium text-white">API Integration:</span> Real ChatGPT responses made the prototypes more convincing</span>
            </li>
          </ul>
        </div>
      </section>
      
      {/* Prototypes */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>The Prototypes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colorpage Prototype */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 rounded-lg border border-emerald-500/30">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-emerald-200">Colorpage Prototype</h3>
            </div>
            <p className="text-slate-300 mb-4">
              A ChatGPT-like interface where the background color dynamically changes based on input length, creating a visual "mood ring" effect.
            </p>
            <div className="space-y-2 text-sm text-slate-300 mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span>0-50 characters: Green (low impact)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                <span>51-150 characters: Yellow (medium impact)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span>151-300 characters: Red (high impact)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span>301+ characters: Purple (very high impact)</span>
              </div>
            </div>
            <Button asChild size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="https://chatgpt-colorpage.vercel.app/" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Try Colorpage Demo
              </Link>
            </Button>
          </div>

          {/* Battery Prototype */}
          <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 p-6 rounded-lg border border-orange-500/30">
            <div className="flex items-center mb-4">
              <Zap className="h-5 w-5 text-orange-400 mr-3" />
              <h3 className="text-xl font-semibold text-orange-200">Battery Prototype</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Features a visual battery icon that depletes with each prompt, gamifying the environmental awareness experience.
            </p>
            <div className="space-y-2 text-sm text-slate-300 mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span>0-3 prompts: Full battery (green)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                <span>4-6 prompts: Medium battery (orange)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span>7-10 prompts: Low battery (red)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                <span>11+ prompts: Empty with warning</span>
              </div>
            </div>
            <Button asChild size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
              <Link href="https://chatgpt-battery-icon.vercel.app/" target="_blank">
                <Zap className="mr-2 h-4 w-4" />
                Try Battery Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Technical Implementation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">Shared Features</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>React with Tailwind CSS</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>OpenAI API integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Dark/light theme support</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Responsive design</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Real-time visual feedback</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">Battery-Specific Features</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Convex database integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Express.js backend</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Persistent session tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Usage analytics logging</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Advanced state management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Results & Impact</h2>
        
        <div className="bg-[rgba(34,197,94,0.1)] p-6 rounded-lg border border-emerald-500/20">
          <h3 className="text-xl font-semibold text-emerald-200 mb-4">Project Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">User Experience</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Intuitive visual feedback systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Non-intrusive awareness building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Gamified environmental consciousness</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Technical Achievement</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Two fully functional prototypes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Real-time API integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Deployed and accessible demos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Reflections</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">What Worked Well</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Research-driven approach:</span> User survey provided clear direction for design decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Rapid prototyping:</span> Coding allowed us to test interactions that static mockups couldn't capture</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Dual approach:</span> Two different concepts provided comprehensive exploration of design nudges</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">Lessons Learned</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Environmental UX:</span> Subtle visual cues can effectively raise awareness without disrupting user flow</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Prototype fidelity:</span> Functional prototypes generated more meaningful feedback than static designs</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Time management:</span> Balancing research depth with implementation speed in academic constraints</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Future Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">User Testing</h3>
            <p className="text-slate-300 text-sm">
              Conduct formal usability testing to measure the effectiveness of design nudges in changing user behavior and environmental awareness.
            </p>
          </div>
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Integration</h3>
            <p className="text-slate-300 text-sm">
              Explore partnerships with AI platforms to integrate environmental awareness features into existing tools.
            </p>
          </div>
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Analytics</h3>
            <p className="text-slate-300 text-sm">
              Develop comprehensive usage analytics to track long-term behavior changes and environmental impact reduction.
            </p>
          </div>
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Expansion</h3>
            <p className="text-slate-300 text-sm">
              Apply similar design nudge principles to other resource-intensive digital activities and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        projectTitle="similar UX research projects"
        accentColor="#22c55e"
      />

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="power-up-or-power-down" />
      
    </div>
  );
}
