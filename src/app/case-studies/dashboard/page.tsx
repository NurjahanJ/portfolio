"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectMetrics } from "@/components/ProjectMetrics";

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
          href="/#projects" 
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

        <p className="text-xl md:text-2xl mt-4" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500, color: 'white', textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>
          Comprehensive data analysis dashboard exploring the relationship between inflation and housing prices across U.S. states from 2014-2024.
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
          src={caseStudy.imagePath}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* At a glance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>At a glance</h2>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Role:</span> Data Analyst, Frontend Developer, UX Designer (solo)</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Context:</span> Academic research project analyzing economic relationships</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Platform:</span> Web application with responsive design</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Tech Stack:</span> React, Material-UI, Plotly.js, D3.js, Papa Parse, Node.js</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Data Sources:</span> Federal Housing Finance Agency (FHFA), U.S. Bureau of Labor Statistics (BLS), Freddie Mac</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-400 mr-2 text-xl">•</span>
            <span className="text-lg"><span className="font-medium text-white">Status:</span> Live dashboard deployed on Vercel with interactive visualizations</span>
          </li>
        </ul>
      </section>

      {/* Research Question */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Research Question</h2>
        <div className="bg-[rgba(59,130,246,0.1)] p-6 rounded-lg border border-sky-500/20">
          <p className="text-sky-200 text-lg mb-4">
            <span className="font-medium">Essential Question:</span> How has inflation impacted housing prices in different U.S. States over the past decade?
          </p>
          <p className="text-slate-300">
            <span className="font-medium text-white">Hypothesis:</span> If the inflation rate increases, then housing prices would also increase proportionately, as rising costs for construction materials, labor, and increased demand in dynamic markets drive up prices.
          </p>
        </div>
      </section>

      {/* Data Sources & Methodology */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Data Sources & Methodology</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          To analyze the relationship between inflation and housing prices, I integrated multiple authoritative datasets spanning 2014-2024:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">📊 FHFA House Price Index</h3>
            <p className="text-slate-300 text-sm mb-3">Federal Housing Finance Agency data measuring changes in housing prices across the U.S.</p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• State-level HPI values</li>
              <li>• Quarterly measurements</li>
              <li>• Standardized baseline</li>
            </ul>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">📈 BLS Consumer Price Index</h3>
            <p className="text-slate-300 text-sm mb-3">U.S. Bureau of Labor Statistics inflation rate data by state and region.</p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Annual inflation rates</li>
              <li>• Regional breakdowns</li>
              <li>• CPI-U measurements</li>
            </ul>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">🏠 Freddie Mac HPI</h3>
            <p className="text-slate-300 text-sm mb-3">Complementary housing price index data for validation and cross-reference.</p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Alternative HPI methodology</li>
              <li>• Population data integration</li>
              <li>• Market validation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Key Findings</h2>
        
        <div className="bg-[rgba(59,130,246,0.1)] p-6 rounded-lg border border-sky-500/20">
          <h3 className="text-xl font-semibold text-sky-200 mb-4">Research Conclusions</h3>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            Analysis indicates that inflation has impacted housing prices in different U.S. states over the past decade, though <strong>not uniformly across all regions</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-medium text-white mb-2">✅ Hypothesis Supported</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <strong>California & Texas:</strong> Clear upward correlation between inflation and housing prices</li>
                <li>• <strong>Strong local economies:</strong> Direct relationship confirmed in dynamic markets</li>
                <li>• <strong>Construction costs:</strong> Material and labor inflation directly impacted housing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">⚠️ Regional Variations</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <strong>Less robust economies:</strong> Weaker inflation-housing correlation</li>
                <li>• <strong>Ample housing supply:</strong> Reduced impact of inflation on prices</li>
                <li>• <strong>Multiple factors:</strong> Regional growth, demand, and supply constraints matter</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20">
          <h3 className="text-xl font-semibold text-sky-200 mb-3">Dashboard Impact</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span>Successfully visualized complex economic relationships in an accessible format</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span>Enabled pattern recognition through interactive multi-chart analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span>Provided evidence for regional economic policy considerations</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-2">•</span>
              <span>Demonstrated the need for additional economic variables in future studies</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Interactive Visualizations */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Interactive Visualizations</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The dashboard features four distinct visualization types, each designed to reveal different aspects of the inflation-housing price relationship:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">📈 Inflation Rate Timeline</h3>
            <p className="text-slate-300 mb-3">Multi-line chart displaying inflation trends over time for selected states. Each line represents a state with interactive hover details.</p>
            <div className="text-xs text-slate-400">
              <strong>Features:</strong> Time series analysis, state comparison, trend identification
            </div>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">🔍 Correlation Scatter Plot</h3>
            <p className="text-slate-300 mb-3">Scatter plot revealing the relationship between housing prices (HPI) and inflation rates, with each point representing a year-state data point.</p>
            <div className="text-xs text-slate-400">
              <strong>Features:</strong> Correlation analysis, outlier identification, pattern recognition
            </div>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">🌡️ HPI Heat Map</h3>
            <p className="text-slate-300 mb-3">Color-coded matrix showing housing price indices across states (x-axis) and years (y-axis), with darker colors indicating higher prices.</p>
            <div className="text-xs text-slate-400">
              <strong>Features:</strong> Pattern visualization, comparative analysis, temporal trends
            </div>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-sky-200 mb-3">📊 State Ranking Bar Chart</h3>
            <p className="text-slate-300 mb-3">Horizontal bar chart ranking states by their housing price increases from 2014-2024, integrated with population data for context.</p>
            <div className="text-xs text-slate-400">
              <strong>Features:</strong> Comparative ranking, population correlation, percentage changes
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Technical Architecture</h2>
        
        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20">
          <h3 className="text-xl font-semibold text-sky-200 mb-4">Frontend Implementation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">Core Technologies</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>React 19.0:</strong> Modern component architecture with hooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Material-UI v6:</strong> Comprehensive component library with theming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Plotly.js:</strong> Advanced interactive charting with zoom, pan, hover</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>D3.js:</strong> Data manipulation and custom visualizations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Data Processing</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Papa Parse:</strong> CSV parsing and data transformation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Promise.all:</strong> Concurrent data loading for performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>State Management:</strong> React hooks for complex data flows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Error Handling:</strong> Graceful fallbacks and user feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-[rgba(10,17,40,0.6)] p-6 rounded-lg border border-sky-500/20">
          <h3 className="text-xl font-semibold text-sky-200 mb-4">Data Processing Pipeline</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-white mb-2">CSV Data Loading & Parsing</h4>
              <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                <code className="text-xs text-slate-300">
                  CSV Files → Papa Parse → Data Filtering → State Extraction → React State → Chart Components
                </code>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Interactive Features</h4>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>• Dynamic state selection with multi-select dropdown</li>
                <li>• Real-time chart updates with smooth transitions</li>
                <li>• Responsive design with Material-UI Grid system</li>
                <li>• Hover tooltips with detailed data points</li>
                <li>• Loading states and error boundaries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-sky-300" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>Skills Demonstrated</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-sky-200 mb-3">Data Analysis & Research</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Integrated multiple authoritative datasets (FHFA, BLS, Freddie Mac)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Formulated and tested economic hypotheses with statistical evidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Identified regional variations and economic patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Drew meaningful conclusions from complex multi-dimensional data</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-sky-200 mb-3">Technical Development</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Built responsive React application with modern hooks architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Implemented advanced data visualizations with Plotly.js and D3.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Created intuitive UI/UX with Material-UI design system</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2">•</span>
                <span>Optimized performance with concurrent data loading and state management</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[rgba(59,130,246,0.1)] p-6 rounded-lg border border-sky-500/20 mt-6">
          <p className="text-sky-200 text-lg">
            <span className="font-medium">Key Achievement:</span> Successfully transformed complex economic research into an accessible, interactive web application that provides actionable insights for policy makers, researchers, and the general public - demonstrating both analytical rigor and technical execution.
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

    </div>
  );
}
