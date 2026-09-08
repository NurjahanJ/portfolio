"use client";

import { notFound } from 'next/navigation'
import Link from "next/link";
import { ExternalLink, Zap, Droplet, Leaf, BarChart3, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ProjectNavigation } from "@/components/project-navigation";
import { ContactCTA } from "@/components/contact-cta";
import { BackToProjects } from "@/components/back-to-projects";
import { CaseStudyTags } from "@/components/case-study-tags";

export default function GreenerAICaseStudy() {
  const caseStudy = caseStudies.find(study => study.slug === "greener-ai");
  
  if (!caseStudy) {
    notFound();
  }

  const applications = [
    {
      name: "Default (Control)",
      url: "https://chat-gpt-interface-mu.vercel.app/",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "blue",
      description: "Faithful ChatGPT replica with silent data collection to establish behavioral baseline."
    },
    {
      name: "EcoMode",
      url: "https://eco-mode.vercel.app/",
      icon: <Clock className="h-5 w-5" />,
      color: "green",
      description: "Introduces ~15s delays on every 3rd, 6th, and 9th message with 'energy-efficient servers' notification."
    },
    {
      name: "Save Earth Tool",
      url: "https://icon-messages.vercel.app/",
      icon: <Leaf className="h-5 w-5" />,
      color: "emerald",
      description: "Pauses conversation to show environmental impact data and offer prompt rewording options."
    },
    {
      name: "Usage Tracker",
      url: "https://tracker-nu-six.vercel.app/",
      icon: <Droplet className="h-5 w-5" />,
      color: "cyan",
      description: "Animated water glass SVG that depletes with usage, showing real-time environmental stats."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
      <BackToProjects />
      
      {/* Header */}
      <header className="space-y-4">
        <div className="uppercase tracking-wider text-sm font-medium text-emerald-400 mb-2">
          FULL-STACK | UX RESEARCH
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-200 to-green-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)', fontFamily: 'var(--font-lora)', fontWeight: 500, lineHeight: '1.2' }}>
          {caseStudy.title}
        </h1>

        <p className="text-xl md:text-2xl mt-4" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500, color: 'white', textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}>
          Sustainable AI interaction research platform with 4 full-stack applications investigating behavioral nudges.
        </p>
        
        <CaseStudyTags tags={caseStudy.tags} colorClass="text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/30" />
        
        {/* Application Links */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {applications.map((app) => (
            <Button 
              key={app.name}
              asChild 
              size="lg" 
              className={`rounded-full px-6 py-2 text-base bg-transparent hover:bg-transparent relative group overflow-hidden`}
            >
              <Link 
                href={app.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 text-white font-medium"
              >
                <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-${app.color}-300 to-${app.color}-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-${app.color}-400 group-hover:to-${app.color}-300 transition-all duration-300`} style={{ background: `linear-gradient(to right, rgb(110, 231, 183), rgb(52, 211, 153))` }}></span>
                <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-${app.color}-300 to-${app.color}-500 rounded-full blur-md group-hover:blur-lg transition-all duration-500 animate-pulse`} style={{ background: `linear-gradient(to right, rgb(110, 231, 183), rgb(16, 185, 129))` }}></span>
                <span className="relative z-20 flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>
                  {app.icon}
                  {app.name}
                </span>
              </Link>
            </Button>
          ))}
        </div>

        {(caseStudy.studentResearchers || caseStudy.facultyAdvisor) && (
          <div className="mt-4 space-y-1 text-sm text-slate-300">
            {caseStudy.studentResearchers && caseStudy.studentResearchers.length > 0 && (
              <div>
                <span className="font-medium text-white">Student Researchers:</span> {caseStudy.studentResearchers.join(", ")}
              </div>
            )}
            {caseStudy.facultyAdvisor && (
              <div>
                <span className="font-medium text-white">Faculty Advisor:</span> {caseStudy.facultyAdvisor}
              </div>
            )}
          </div>
        )}
      </header>
      
      {/* At a glance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>At a glance</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Role:</span> Full-Stack Developer</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Scope:</span> 4 production-ready React applications with Express.js backends</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Research Goal:</span> Measure behavioral impact of UI-based sustainability nudges on AI usage</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Tech:</span> React.js, Express.js, Node.js, OpenAI API (GPT-4o), Convex, Vercel</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Key Features:</span> Real-time data collection, anonymous user tracking, A/B/C/D testing framework</span>
          </li>
          {caseStudy.studentResearchers && caseStudy.studentResearchers.length > 0 && (
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2 text-xl">•</span>
              <span className="text-lg"><span className="font-medium text-white">Student Researchers:</span> {caseStudy.studentResearchers.join(", ")}</span>
            </li>
          )}
          {caseStudy.facultyAdvisor && (
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2 text-xl">•</span>
              <span className="text-lg"><span className="font-medium text-white">Faculty Advisor:</span> {caseStudy.facultyAdvisor}</span>
            </li>
          )}
        </ul>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Overview</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Greener AI is a comprehensive research platform investigating whether UI-based nudges can encourage more sustainable AI usage patterns. The project consists of four fully functional ChatGPT clones, each implementing a different intervention strategy.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          All applications connect to OpenAI's GPT-4o model and silently collect anonymous usage data via a Convex cloud database, enabling researchers to measure the behavioral impact of each intervention through A/B/C/D testing.
        </p>
        <div className="bg-[rgba(16,185,129,0.1)] p-6 rounded-lg border border-emerald-500/20">
          <p className="text-emerald-200 text-lg">
            <span className="font-medium">Project Impact:</span> Enables data-driven insights into which sustainability nudges are most effective at reducing unnecessary AI usage and raising environmental awareness.
          </p>
        </div>
      </section>

      {/* The Four Applications */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>The Four Applications</h2>
        
        <div className="space-y-6">
          {/* Default */}
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-6 rounded-lg border border-blue-500/30">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-blue-200">1. Default (Control Group)</h3>
            </div>
            <p className="text-slate-300 mb-4">
              A faithful replica of the ChatGPT interface with no modifications. Users chat freely with the AI while the system silently tracks anonymous usage data (message count, prompts, and responses) to establish a behavioral baseline.
            </p>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link href="https://chat-gpt-interface-mu.vercel.app/" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Try Default App
              </Link>
            </Button>
          </div>

          {/* EcoMode */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 p-6 rounded-lg border border-green-500/30">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-green-200">2. EcoMode (Delay-Based Nudge)</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Introduces an "EcoMode" toggle (enabled by default) that adds a ~15-second simulated processing delay on every 3rd, 6th, and 9th message, displaying a "rerouting to energy-efficient servers" notification. Turning EcoMode off triggers a confirmation modal to add friction.
            </p>
            <div className="bg-green-900/30 p-4 rounded mb-4">
              <p className="text-sm text-green-200"><span className="font-medium">Data Tracked:</span> Whether EcoMode was active for each message to measure its effect on usage patterns.</p>
            </div>
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
              <Link href="https://eco-mode.vercel.app/" target="_blank">
                <Clock className="mr-2 h-4 w-4" />
                Try EcoMode App
              </Link>
            </Button>
          </div>

          {/* Save Earth Tool */}
          <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 p-6 rounded-lg border border-emerald-500/30">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-emerald-200">3. Save Earth Tool (Information & Action Nudge)</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Integrates a sustainability intervention system that pauses the conversation at key points. After the 3rd message, users see real environmental impact data (CO2, water usage) and are offered the option to reword their prompt into a more efficient query. After the 6th message, users are encouraged to take a break.
            </p>
            <div className="bg-emerald-900/30 p-4 rounded mb-4">
              <p className="text-sm text-emerald-200"><span className="font-medium">Data Tracked:</span> All user choices (Yes/No, Reword/Continue, Break/Continue) in a dedicated database table.</p>
            </div>
            <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="https://icon-messages.vercel.app/" target="_blank">
                <Leaf className="mr-2 h-4 w-4" />
                Try Save Earth App
              </Link>
            </Button>
          </div>

          {/* Usage Tracker */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 p-6 rounded-lg border border-cyan-500/30">
            <div className="flex items-center mb-4">
              <Droplet className="h-6 w-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-semibold text-cyan-200">4. Usage Tracker (Visual Energy Tracker)</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Features an animated "water glass" SVG visualization in the header that depletes as the user sends messages, with real-time stats on hover (water: ~50 mL, electricity: ~0.42 Wh, CO2: ~0.19 g per prompt). The glass turns from blue to red after exceeding 7 prompts, and slowly regenerates after 30 minutes of inactivity.
            </p>
            <div className="bg-cyan-900/30 p-4 rounded mb-4">
              <p className="text-sm text-cyan-200"><span className="font-medium">Additional Feature:</span> Researcher-facing admin dashboard for one-click data export to CSV.</p>
            </div>
            <Button asChild size="sm" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="https://tracker-nu-six.vercel.app/" target="_blank">
                <Droplet className="mr-2 h-4 w-4" />
                Try Tracker App
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
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">Frontend Architecture</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>React.js with Vite for fast development</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Tailwind CSS for responsive design</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Custom Context providers for state management</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Markdown rendering with syntax highlighting</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>SVG animations with CSS transitions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">Backend & Data</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Express.js API proxy for OpenAI</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Convex real-time cloud database</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Anonymous user tracking with nanoid</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Retry logic with exponential backoff</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>CSV export tooling with PapaParse</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-emerald-500/20">
          <h3 className="text-xl font-semibold text-emerald-200 mb-3">Key Technical Achievements</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span><span className="font-medium text-white">Secure API Architecture:</span> Express.js proxy keeps OpenAI API keys server-side and hidden from clients</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span><span className="font-medium text-white">Silent Data Collection:</span> Real-time pipeline using Convex operates without disrupting user experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span><span className="font-medium text-white">Anonymous Tracking:</span> nanoid + localStorage enables cross-session tracking without personal data</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">✓</span>
              <span><span className="font-medium text-white">Serverless Deployment:</span> All 4 apps deployed independently on Vercel for scalability</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Research Impact */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Research Impact</h2>
        
        <div className="bg-[rgba(16,185,129,0.1)] p-6 rounded-lg border border-emerald-500/20">
          <h3 className="text-xl font-semibold text-emerald-200 mb-4">Enabling Data-Driven Insights</h3>
          <p className="text-slate-300 mb-4">
            The platform enables researchers to run A/B/C/D experiments comparing how different UI interventions affect real user behavior when interacting with AI. Data collected across the four versions provides measurable insights into which sustainability nudges are most effective.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-900/20 p-4 rounded">
              <h4 className="font-medium text-emerald-200 mb-2">Behavioral Metrics</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Message frequency patterns</li>
                <li>• Prompt length analysis</li>
                <li>• Session duration tracking</li>
                <li>• Intervention response rates</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 p-4 rounded">
              <h4 className="font-medium text-emerald-200 mb-2">Research Questions</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Do delays reduce usage?</li>
                <li>• Does information change behavior?</li>
                <li>• Are visual cues effective?</li>
                <li>• Which nudge works best?</li>
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
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">Technical Challenges</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">API Rate Limiting:</span> Implemented retry logic with exponential backoff to handle OpenAI rate limits gracefully</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Data Reliability:</span> Ensured silent data collection never disrupts user experience, even during network issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">State Management:</span> Built custom Context providers to manage complex state across interventions</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">Key Learnings</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Full-Stack Development:</span> Gained hands-on experience building production-ready applications from scratch</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Research-Driven Design:</span> Learned to design interventions that are measurable and non-intrusive</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><span className="font-medium text-white">Serverless Architecture:</span> Deployed 4 independent apps on Vercel with proper API security</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        projectTitle="similar full-stack research projects"
        accentColor="#10b981"
      />

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="greener-ai" />
      
    </div>
  );
}
