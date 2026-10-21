"use client";

import { notFound } from 'next/navigation'
import Link from "next/link";
import { ExternalLink, Droplet, Leaf, BarChart3, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ProjectNavigation } from "@/components/project-navigation";
import { ContactCTA } from "@/components/contact-cta";
import { BackToProjects } from "@/components/back-to-projects";
import { CaseStudyTags } from "@/components/case-study-tags";
import { SectionHeading } from "@/components/section-heading";

// Accent styling for this case study (emerald / green)
const accentText = "text-emerald-300";
const accentBar = "bg-gradient-to-b from-emerald-300 to-green-400";
const cardClass =
  "rounded-xl border border-emerald-500/20 bg-[rgba(10,17,40,0.5)] p-6 transition-colors duration-300 hover:border-emerald-500/40";

// Per-application color styling (static classes so Tailwind keeps them)
const appStyles: Record<string, { icon: string; border: string; title: string; noteBg: string; noteText: string; button: string }> = {
  blue: { icon: "text-blue-400", border: "border-blue-500/30", title: "text-blue-200", noteBg: "bg-blue-900/30", noteText: "text-blue-200", button: "bg-blue-600 hover:bg-blue-700" },
  green: { icon: "text-green-400", border: "border-green-500/30", title: "text-green-200", noteBg: "bg-green-900/30", noteText: "text-green-200", button: "bg-green-600 hover:bg-green-700" },
  emerald: { icon: "text-emerald-400", border: "border-emerald-500/30", title: "text-emerald-200", noteBg: "bg-emerald-900/30", noteText: "text-emerald-200", button: "bg-emerald-600 hover:bg-emerald-700" },
  cyan: { icon: "text-cyan-400", border: "border-cyan-500/30", title: "text-cyan-200", noteBg: "bg-cyan-900/30", noteText: "text-cyan-200", button: "bg-cyan-600 hover:bg-cyan-700" },
};

export default function GreenerAICaseStudy() {
  const caseStudy = caseStudies.find(study => study.slug === "greener-ai");

  if (!caseStudy) {
    notFound();
  }

  const applications = [
    { name: "Default (Control)", url: "https://chat-gpt-interface-mu.vercel.app/", icon: <BarChart3 className="h-4 w-4" />, color: "blue" },
    { name: "EcoMode", url: "https://eco-mode.vercel.app/", icon: <Clock className="h-4 w-4" />, color: "green" },
    { name: "Save Earth Tool", url: "https://icon-messages.vercel.app/", icon: <Leaf className="h-4 w-4" />, color: "emerald" },
    { name: "Usage Tracker", url: "https://tracker-nu-six.vercel.app/", icon: <Droplet className="h-4 w-4" />, color: "cyan" },
  ];

  const glance = [
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Scope", value: "4 production-ready React applications with Express.js backends" },
    { label: "Research Goal", value: "Measure behavioral impact of UI-based sustainability nudges on AI usage" },
    { label: "Tech", value: "React.js, Express.js, Node.js, OpenAI API (GPT-4o), Convex, Vercel", wide: true },
    { label: "Key Features", value: "Real-time data collection, anonymous user tracking, A/B/C/D testing framework", wide: true },
    ...(caseStudy.studentResearchers?.length ? [{ label: "Student Researchers", value: caseStudy.studentResearchers.join(", "), wide: true }] : []),
    ...(caseStudy.facultyAdvisor ? [{ label: "Faculty Advisor", value: caseStudy.facultyAdvisor, wide: true }] : []),
  ];

  const detailedApps = [
    {
      color: "blue",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "1. Default (Control Group)",
      body: "A faithful replica of the ChatGPT interface with no modifications. Users chat freely with the AI while the system silently tracks anonymous usage data (message count, prompts, and responses) to establish a behavioral baseline.",
      note: null as null | { label: string; text: string },
      cta: { label: "Try Default App", url: "https://chat-gpt-interface-mu.vercel.app/", icon: <ExternalLink className="mr-2 h-4 w-4" /> },
    },
    {
      color: "green",
      icon: <Clock className="h-5 w-5" />,
      title: "2. EcoMode (Delay-Based Nudge)",
      body: "Introduces an \"EcoMode\" toggle (enabled by default) that adds a ~15-second simulated processing delay on every 3rd, 6th, and 9th message, displaying a \"rerouting to energy-efficient servers\" notification. Turning EcoMode off triggers a confirmation modal to add friction.",
      note: { label: "Data Tracked:", text: "Whether EcoMode was active for each message to measure its effect on usage patterns." },
      cta: { label: "Try EcoMode App", url: "https://eco-mode.vercel.app/", icon: <Clock className="mr-2 h-4 w-4" /> },
    },
    {
      color: "emerald",
      icon: <Leaf className="h-5 w-5" />,
      title: "3. Save Earth Tool (Information & Action Nudge)",
      body: "Integrates a sustainability intervention system that pauses the conversation at key points. After the 3rd message, users see real environmental impact data (CO2, water usage) and are offered the option to reword their prompt into a more efficient query. After the 6th message, users are encouraged to take a break.",
      note: { label: "Data Tracked:", text: "All user choices (Yes/No, Reword/Continue, Break/Continue) in a dedicated database table." },
      cta: { label: "Try Save Earth App", url: "https://icon-messages.vercel.app/", icon: <Leaf className="mr-2 h-4 w-4" /> },
    },
    {
      color: "cyan",
      icon: <Droplet className="h-5 w-5" />,
      title: "4. Usage Tracker (Visual Energy Tracker)",
      body: "Features an animated \"water glass\" SVG visualization in the header that depletes as the user sends messages, with real-time stats on hover (water: ~50 mL, electricity: ~0.42 Wh, CO2: ~0.19 g per prompt). The glass turns from blue to red after exceeding 7 prompts, and slowly regenerates after 30 minutes of inactivity.",
      note: { label: "Additional Feature:", text: "Researcher-facing admin dashboard for one-click data export to CSV." },
      cta: { label: "Try Tracker App", url: "https://tracker-nu-six.vercel.app/", icon: <Droplet className="mr-2 h-4 w-4" /> },
    },
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-20 pb-16">
      <BackToProjects />

      {/* Header */}
      <header className="space-y-5">
        <div className={`uppercase tracking-widest text-xs font-semibold ${accentText}`}>
          FULL-STACK | UX RESEARCH
        </div>

        <h1 className="text-headline md:text-5xl font-serif font-medium bg-gradient-to-r from-emerald-200 to-green-300 bg-clip-text text-transparent">
          {caseStudy.title}
        </h1>

        <p className="text-subtitle md:text-2xl font-serif text-slate-200 max-w-2xl">
          Sustainable AI interaction research platform with 4 full-stack applications investigating behavioral nudges.
        </p>

        <CaseStudyTags tags={caseStudy.tags} colorClass="text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/30" />

        {/* Application Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {applications.map((app) => (
            <Button key={app.name} asChild size="lg" variant="outline" className={`rounded-full px-6 bg-transparent ${appStyles[app.color].border} text-slate-200 hover:bg-emerald-900/20 hover:border-emerald-400 transition-all duration-300`}>
              <Link href={app.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
                <span className={appStyles[app.color].icon}>{app.icon}</span>
                {app.name}
              </Link>
            </Button>
          ))}
        </div>
      </header>

      {/* Origin note */}
      <div className="rounded-xl border border-emerald-500/20 bg-[rgba(16,185,129,0.08)] p-5">
        <p className="text-slate-300 leading-relaxed">
          <span className="font-medium text-white">Where this started:</span> Greener AI grew out of{" "}
          <Link
            href="/case-studies/power-up-or-power-down"
            className="inline-flex items-center gap-1 font-medium text-emerald-300 underline underline-offset-4 decoration-emerald-500/40 hover:text-emerald-200 transition-colors"
          >
            Power Up Or Power Down
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          , the initial UX research project where I explored environmental awareness nudges through two interactive prototypes. Those early experiments laid the foundation for this full-stack research platform.
        </p>
      </div>

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

      {/* Overview */}
      <section className="space-y-5">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Overview</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          Greener AI is a comprehensive research platform investigating whether UI-based nudges can encourage more sustainable AI usage patterns. The project consists of four fully functional ChatGPT clones, each implementing a different intervention strategy.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          All applications connect to OpenAI's GPT-4o model and silently collect anonymous usage data via a Convex cloud database, enabling researchers to measure the behavioral impact of each intervention through A/B/C/D testing.
        </p>
        <div className="rounded-xl border border-emerald-500/20 bg-[rgba(16,185,129,0.08)] p-6">
          <p className="text-emerald-100 text-lg leading-relaxed">
            <span className="font-medium text-white">Project Impact:</span> Enables data-driven insights into which sustainability nudges are most effective at reducing unnecessary AI usage and raising environmental awareness.
          </p>
        </div>
      </section>

      {/* The Four Applications */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>The Four Applications</SectionHeading>
        <div className="space-y-5">
          {detailedApps.map((app) => {
            const s = appStyles[app.color];
            return (
              <div key={app.title} className={`rounded-xl border ${s.border} bg-[rgba(10,17,40,0.5)] p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={s.icon}>{app.icon}</span>
                  <h3 className={`text-lg font-semibold ${s.title}`}>{app.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">{app.body}</p>
                {app.note && (
                  <div className={`${s.noteBg} p-4 rounded-lg mb-4`}>
                    <p className={`text-sm ${s.noteText}`}><span className="font-medium">{app.note.label}</span> {app.note.text}</p>
                  </div>
                )}
                <Button asChild size="sm" className={`${s.button} text-white`}>
                  <Link href={app.cta.url} target="_blank" rel="noopener noreferrer">
                    {app.cta.icon}
                    {app.cta.label}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Technical Implementation</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Frontend Architecture</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "React.js with Vite for fast development",
                "Tailwind CSS for responsive design",
                "Custom Context providers for state management",
                "Markdown rendering with syntax highlighting",
                "SVG animations with CSS transitions",
              ].map((text) => (
                <li key={text} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Backend &amp; Data</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "Express.js API proxy for OpenAI",
                "Convex real-time cloud database",
                "Anonymous user tracking with nanoid",
                "Retry logic with exponential backoff",
                "CSV export tooling with PapaParse",
              ].map((text) => (
                <li key={text} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-emerald-200 mb-3">Key Technical Achievements</h3>
          <ul className="space-y-3 text-slate-300">
            {[
              ["Secure API Architecture:", "Express.js proxy keeps OpenAI API keys server-side and hidden from clients"],
              ["Silent Data Collection:", "Real-time pipeline using Convex operates without disrupting user experience"],
              ["Anonymous Tracking:", "nanoid + localStorage enables cross-session tracking without personal data"],
              ["Serverless Deployment:", "All 4 apps deployed independently on Vercel for scalability"],
            ].map(([label, text]) => (
              <li key={label} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                <span><span className="font-medium text-white">{label}</span> {text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research Impact */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Research Impact</SectionHeading>

        <div className="rounded-xl border border-emerald-500/20 bg-[rgba(16,185,129,0.08)] p-6">
          <h3 className="text-lg font-semibold text-emerald-200 mb-4">Enabling Data-Driven Insights</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            The platform enables researchers to run A/B/C/D experiments comparing how different UI interventions affect real user behavior when interacting with AI. Data collected across the four versions provides measurable insights into which sustainability nudges are most effective.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-200 mb-2">Behavioral Metrics</h4>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {["Message frequency patterns", "Prompt length analysis", "Session duration tracking", "Intervention response rates"].map((t) => (
                  <li key={t} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-200 mb-2">Research Questions</h4>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {["Do delays reduce usage?", "Does information change behavior?", "Are visual cues effective?", "Which nudge works best?"].map((t) => (
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
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Technical Challenges</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                ["API Rate Limiting:", "Implemented retry logic with exponential backoff to handle OpenAI rate limits gracefully"],
                ["Data Reliability:", "Ensured silent data collection never disrupts user experience, even during network issues"],
                ["State Management:", "Built custom Context providers to manage complex state across interventions"],
              ].map(([label, text]) => (
                <li key={label} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span><span className="font-medium text-white">{label}</span> {text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Key Learnings</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                ["Full-Stack Development:", "Gained hands-on experience building production-ready applications from scratch"],
                ["Research-Driven Design:", "Learned to design interventions that are measurable and non-intrusive"],
                ["Serverless Architecture:", "Deployed 4 independent apps on Vercel with proper API security"],
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

      {/* Contact CTA */}
      <ContactCTA
        projectTitle="similar full-stack research projects"
        accentColor="#10b981"
      />

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="greener-ai" />
    </article>
  );
}
