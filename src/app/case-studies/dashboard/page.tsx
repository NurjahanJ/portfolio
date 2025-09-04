"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";

export default function DashboardCaseStudy() {
  // Find the Dashboard case study
  const caseStudy = caseStudies.find(study => study.slug === "dashboard");
  
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
        <div className="uppercase tracking-wider text-sm font-medium text-sky-400 mb-2">
          WEB APP | DATA VISUALIZATION
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)', fontFamily: 'var(--font-lora)', fontWeight: 500, lineHeight: '1.2' }}>
          {caseStudy.title}
        </h1>

        <p className="text-xl md:text-2xl mt-4" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500, color: 'white', textShadow: '0 0 10px rgba(195, 57, 9, 0.5)' }}>
          Interactive data visualization with intuitive charts and responsive design.
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
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-300 to-sky-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-sky-300 transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-300 to-sky-500 rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-sky-300 group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
                <span className="relative z-20 flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>
                  <Github className="mr-1 h-4 w-4" aria-hidden="true" />
                  View On Github
                </span>
              </Link>
            </Button>
          )}
          {caseStudy.demo && (
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-6 py-2 text-base bg-transparent hover:bg-transparent relative group overflow-hidden ml-4"
            >
              <Link 
                href={caseStudy.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 text-white font-medium"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0A4D68] to-[#088395] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#088395] group-hover:to-[#0A4D68] transition-all duration-300"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0A4D68] to-[#05BFDB] rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-[#05BFDB] group-hover:to-[#0A4D68] group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
                <span className="relative z-20 flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>
                  <ExternalLink className="mr-1 h-4 w-4" aria-hidden="true" />
                  Live Demo
                </span>
              </Link>
            </Button>
          )}
        </div>
      </header>

      {/* Main Image */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg shadow-sky-500/5 bg-[#0a0f1e]">
        <Image 
          src="/project2-images/image.png" 
          alt="Inflation & Housing Dashboard" 
          fill
          className="object-contain"
          quality={100}
          priority
        />
      </div>

      {/* Project Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Project Overview</h2>
        <p className="text-slate-300 mb-4">
          The Inflation & Housing Dashboard is an interactive web application designed to transform complex data into intuitive, 
          visually appealing charts and graphs. Built with Next.js and Tailwind CSS, this dashboard provides users with a 
          seamless experience for analyzing and interpreting data across various devices.
        </p>
        <p className="text-slate-300">
          The dashboard features dynamic data filtering, customizable views, and a responsive design that adapts to any screen size. 
          Users can toggle between dark and light modes, interact with real-time data updates, and export visualizations for reporting purposes.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Problem</h2>
        <p className="text-slate-300 mb-4">
          Data analysis often involves working with large, complex datasets that can be difficult to interpret in their raw form. 
          Traditional spreadsheets and static reports fail to provide the interactive experience needed for effective data exploration 
          and decision-making.
        </p>
        <p className="text-slate-300">
          Organizations need a way to visualize their data in a format that is both accessible and actionable, allowing stakeholders 
          at all levels to derive meaningful insights without requiring specialized technical knowledge.
        </p>
      </section>

      {/* Solution */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Solution</h2>
        <p className="text-slate-300 mb-6">
          The Inflation & Housing Dashboard addresses these challenges by providing:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">Interactive Visualizations</h3>
            <p className="text-slate-300">
              Dynamic charts and graphs that respond to user interactions, allowing for deeper exploration of data relationships.
            </p>
          </div>
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">Responsive Design</h3>
            <p className="text-slate-300">
              A layout that automatically adjusts to provide optimal viewing experiences across desktop, tablet, and mobile devices.
            </p>
          </div>
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">Customizable Filters</h3>
            <p className="text-slate-300">
              Tools that allow users to focus on specific data points, time periods, or categories relevant to their analysis.
            </p>
          </div>
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">Dark/Light Mode</h3>
            <p className="text-slate-300">
              Theme options that enhance readability and reduce eye strain in different lighting conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm">Next.js</span>
          <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm">Tailwind CSS</span>
          <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm">Chart.js</span>
          <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm">React</span>
          <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm">Vercel</span>
          <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm">TypeScript</span>
        </div>
      </section>

      {/* Challenges and Learnings */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Challenges & Learnings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Performance Optimization</h3>
            <p className="text-slate-300">
              Rendering complex visualizations with large datasets presented performance challenges. I implemented data chunking, 
              lazy loading, and memoization techniques to ensure smooth interactions even with substantial amounts of data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Cross-Browser Compatibility</h3>
            <p className="text-slate-300">
              Ensuring consistent rendering across different browsers required careful testing and CSS adjustments. 
              I developed a comprehensive testing strategy to identify and address compatibility issues early in the development process.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Accessibility Considerations</h3>
            <p className="text-slate-300">
              Making data visualizations accessible to all users, including those with visual impairments, required thoughtful 
              implementation of ARIA attributes, keyboard navigation, and alternative text descriptions for charts.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Conclusion</h2>
        <p className="text-slate-300 mb-4">
          The Inflation & Housing Dashboard demonstrates how modern web technologies can transform raw data into actionable insights. 
          By prioritizing user experience, performance, and accessibility, this project delivers a powerful tool for data analysis 
          that can be adapted to various business contexts and user needs.
        </p>
        <p className="text-slate-300">
          Future enhancements could include additional chart types, advanced filtering options, and integration with real-time 
          data sources to further expand the dashboard's capabilities.
        </p>
      </section>

    </div>
  );
}
