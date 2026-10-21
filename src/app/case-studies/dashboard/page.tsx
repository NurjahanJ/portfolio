"use client";

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ProjectNavigation } from "@/components/project-navigation";
import { ContactCTA } from "@/components/contact-cta";
import { BackToProjects } from "@/components/back-to-projects";
import { CaseStudyTags } from "@/components/case-study-tags";
import { SectionHeading } from "@/components/section-heading";

// Accent styling for this case study (sky / blue)
const accentText = "text-sky-300";
const accentBar = "bg-gradient-to-b from-sky-300 to-blue-400";
const cardClass =
  "rounded-xl border border-sky-500/20 bg-[rgba(10,17,40,0.5)] p-6 transition-colors duration-300 hover:border-sky-500/40";

export default function DashboardCaseStudy() {
  // Find the Dashboard case study
  const caseStudy = caseStudies.find(study => study.slug === "dashboard");

  if (!caseStudy) {
    notFound();
  }

  const glance = [
    { label: "Role", value: "Data Analyst, Frontend Developer, UX Designer (solo)" },
    { label: "Context", value: "Academic research project analyzing economic relationships" },
    { label: "Platform", value: "Web application with responsive design" },
    { label: "Tech Stack", value: "React, Material-UI, Plotly.js, D3.js, Papa Parse, Node.js", wide: true },
    { label: "Data Sources", value: "Federal Housing Finance Agency (FHFA), U.S. Bureau of Labor Statistics (BLS), Freddie Mac", wide: true },
    { label: "Status", value: "Live dashboard deployed on Vercel with interactive visualizations", wide: true },
  ];

  const dataSources = [
    {
      title: "FHFA House Price Index",
      body: "Federal Housing Finance Agency data measuring changes in housing prices across the U.S.",
      items: ["State-level HPI values", "Quarterly measurements", "Standardized baseline"],
    },
    {
      title: "BLS Consumer Price Index",
      body: "U.S. Bureau of Labor Statistics inflation rate data by state and region.",
      items: ["Annual inflation rates", "Regional breakdowns", "CPI-U measurements"],
    },
    {
      title: "Freddie Mac HPI",
      body: "Complementary housing price index data for validation and cross-reference.",
      items: ["Alternative HPI methodology", "Population data integration", "Market validation"],
    },
  ];

  const visualizations = [
    { title: "Inflation Rate Timeline", body: "Multi-line chart displaying inflation trends over time for selected states. Each line represents a state with interactive hover details.", features: "Time series analysis, state comparison, trend identification" },
    { title: "Correlation Scatter Plot", body: "Scatter plot revealing the relationship between housing prices (HPI) and inflation rates, with each point representing a year-state data point.", features: "Correlation analysis, outlier identification, pattern recognition" },
    { title: "HPI Heat Map", body: "Color-coded matrix showing housing price indices across states (x-axis) and years (y-axis), with darker colors indicating higher prices.", features: "Pattern visualization, comparative analysis, temporal trends" },
    { title: "State Ranking Bar Chart", body: "Horizontal bar chart ranking states by their housing price increases from 2014-2024, integrated with population data for context.", features: "Comparative ranking, population correlation, percentage changes" },
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-20 pb-16">
      {/* Back button */}
      <BackToProjects />

      {/* Header */}
      <header className="space-y-5">
        <div className={`uppercase tracking-widest text-xs font-semibold ${accentText}`}>
          WEB APP | DATA VISUALIZATION
        </div>

        <h1 className="text-headline md:text-5xl font-serif font-medium bg-gradient-to-r from-blue-200 to-sky-300 bg-clip-text text-transparent">
          {caseStudy.title}
        </h1>

        <p className="text-subtitle md:text-2xl font-serif text-slate-200 max-w-2xl">
          Comprehensive data analysis dashboard exploring the relationship between inflation and housing prices across U.S. states from 2014-2024.
        </p>

        <CaseStudyTags tags={caseStudy.tags} />

        <div className="flex flex-wrap gap-3 pt-2">
          {caseStudy.demo && (
            <Button asChild size="lg" className="rounded-full px-6 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white transition-all duration-300">
              <Link href={caseStudy.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </Link>
            </Button>
          )}
          {caseStudy.github && (
            <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-transparent border-sky-500/40 text-sky-200 hover:bg-sky-900/20 hover:border-sky-400 transition-all duration-300">
              <Link href={caseStudy.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif font-medium">
                <Github className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </Link>
            </Button>
          )}
        </div>
      </header>

      {/* Main Image */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-sky-500/20 shadow-lg shadow-sky-500/5 bg-[#0a0f1e]">
        <Image
          src={caseStudy.imagePath}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* At a glance */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>At a glance</SectionHeading>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 rounded-xl border border-sky-500/20 bg-[rgba(10,17,40,0.4)] p-6 md:p-8">
          {glance.map((item) => (
            <div key={item.label} className={item.wide ? "sm:col-span-2" : ""}>
              <dt className={`text-xs uppercase tracking-widest mb-1.5 ${accentText}`}>{item.label}</dt>
              <dd className="text-slate-200 leading-relaxed">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Research Question */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Research Question</SectionHeading>
        <div className="rounded-xl border border-sky-500/20 bg-[rgba(59,130,246,0.08)] p-6">
          <p className="text-sky-100 text-lg mb-4 leading-relaxed">
            <span className="font-medium text-white">Essential Question:</span> How has inflation impacted housing prices in different U.S. States over the past decade?
          </p>
          <p className="text-slate-300 leading-relaxed">
            <span className="font-medium text-white">Hypothesis:</span> If the inflation rate increases, then housing prices would also increase proportionately, as rising costs for construction materials, labor, and increased demand in dynamic markets drive up prices.
          </p>
        </div>
      </section>

      {/* Data Sources & Methodology */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Data Sources &amp; Methodology</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          To analyze the relationship between inflation and housing prices, I integrated multiple authoritative datasets spanning 2014-2024:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dataSources.map((src) => (
            <div key={src.title} className={cardClass}>
              <h3 className="text-base font-semibold text-sky-200 mb-2">{src.title}</h3>
              <p className="text-slate-300 text-sm mb-3 leading-relaxed">{src.body}</p>
              <ul className="text-xs text-slate-400 space-y-1.5">
                {src.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Findings */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Key Findings</SectionHeading>

        <div className="rounded-xl border border-sky-500/20 bg-[rgba(59,130,246,0.08)] p-6">
          <h3 className="text-lg font-semibold text-sky-200 mb-4">Research Conclusions</h3>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Analysis indicates that inflation has impacted housing prices in different U.S. states over the past decade, though <strong className="text-white">not uniformly across all regions</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-emerald-300 mb-3">Hypothesis Supported</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {[
                  ["California & Texas:", "Clear upward correlation between inflation and housing prices"],
                  ["Strong local economies:", "Direct relationship confirmed in dynamic markets"],
                  ["Construction costs:", "Material and labor inflation directly impacted housing"],
                ].map(([label, text]) => (
                  <li key={label} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" /><span><strong className="text-white">{label}</strong> {text}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-amber-300 mb-3">Regional Variations</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {[
                  ["Less robust economies:", "Weaker inflation-housing correlation"],
                  ["Ample housing supply:", "Reduced impact of inflation on prices"],
                  ["Multiple factors:", "Regional growth, demand, and supply constraints matter"],
                ].map(([label, text]) => (
                  <li key={label} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden="true" /><span><strong className="text-white">{label}</strong> {text}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-sky-200 mb-3">Dashboard Impact</h3>
          <ul className="space-y-2 text-slate-300">
            {[
              "Successfully visualized complex economic relationships in an accessible format",
              "Enabled pattern recognition through interactive multi-chart analysis",
              "Provided evidence for regional economic policy considerations",
              "Demonstrated the need for additional economic variables in future studies",
            ].map((text) => (
              <li key={text} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />{text}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Interactive Visualizations */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Interactive Visualizations</SectionHeading>
        <p className="text-slate-300 text-lg leading-relaxed">
          The dashboard features four distinct visualization types, each designed to reveal different aspects of the inflation-housing price relationship:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visualizations.map((viz) => (
            <div key={viz.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-sky-200 mb-2">{viz.title}</h3>
              <p className="text-slate-300 mb-3 leading-relaxed">{viz.body}</p>
              <div className="text-xs text-slate-400"><strong className="text-slate-300">Features:</strong> {viz.features}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Technical Architecture</SectionHeading>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-sky-200 mb-4">Frontend Implementation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-3">Core Technologies</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {[
                  ["React 19.0:", "Modern component architecture with hooks"],
                  ["Material-UI v6:", "Comprehensive component library with theming"],
                  ["Plotly.js:", "Advanced interactive charting with zoom, pan, hover"],
                  ["D3.js:", "Data manipulation and custom visualizations"],
                ].map(([label, text]) => (
                  <li key={label} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" aria-hidden="true" /><span><strong className="text-white">{label}</strong> {text}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">Data Processing</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                {[
                  ["Papa Parse:", "CSV parsing and data transformation"],
                  ["Promise.all:", "Concurrent data loading for performance"],
                  ["State Management:", "React hooks for complex data flows"],
                  ["Error Handling:", "Graceful fallbacks and user feedback"],
                ].map(([label, text]) => (
                  <li key={label} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" aria-hidden="true" /><span><strong className="text-white">{label}</strong> {text}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-sky-200 mb-4">Data Processing Pipeline</h3>
          <div className="space-y-5">
            <div>
              <h4 className="font-medium text-white mb-2">CSV Data Loading &amp; Parsing</h4>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <code className="text-xs text-slate-300">
                  CSV Files → Papa Parse → Data Filtering → State Extraction → React State → Chart Components
                </code>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Interactive Features</h4>
              <ul className="space-y-1.5 text-slate-300 text-sm">
                {[
                  "Dynamic state selection with multi-select dropdown",
                  "Real-time chart updates with smooth transitions",
                  "Responsive design with Material-UI Grid system",
                  "Hover tooltips with detailed data points",
                  "Loading states and error boundaries",
                ].map((text) => (
                  <li key={text} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="space-y-6">
        <SectionHeading accentClass={accentText} barClass={accentBar}>Skills Demonstrated</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-sky-200 mb-3">Data Analysis &amp; Research</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "Integrated multiple authoritative datasets (FHFA, BLS, Freddie Mac)",
                "Formulated and tested economic hypotheses with statistical evidence",
                "Identified regional variations and economic patterns",
                "Drew meaningful conclusions from complex multi-dimensional data",
              ].map((text) => (
                <li key={text} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />{text}</li>
              ))}
            </ul>
          </div>
          <div className={cardClass}>
            <h3 className="text-lg font-semibold text-sky-200 mb-3">Technical Development</h3>
            <ul className="space-y-2 text-slate-300">
              {[
                "Built responsive React application with modern hooks architecture",
                "Implemented advanced data visualizations with Plotly.js and D3.js",
                "Created intuitive UI/UX with Material-UI design system",
                "Optimized performance with concurrent data loading and state management",
              ].map((text) => (
                <li key={text} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />{text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-sky-500/20 bg-[rgba(59,130,246,0.08)] p-6">
          <p className="text-sky-100 text-lg leading-relaxed">
            <span className="font-medium text-white">Key Achievement:</span> Successfully transformed complex economic research into an accessible, interactive web application that provides actionable insights for policy makers, researchers, and the general public - demonstrating both analytical rigor and technical execution.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        projectTitle="data visualization projects"
        accentColor="#0ea5e9"
      />

      {/* Project Navigation */}
      <ProjectNavigation currentSlug="dashboard" />
    </article>
  );
}
