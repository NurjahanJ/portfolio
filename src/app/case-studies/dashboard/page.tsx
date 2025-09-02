import Link from 'next/link'
import Image from 'next/image'

export default function DashboardCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Inflation & Housing <span className="text-[#C33909]">Dashboard</span>
        </h1>
        <p className="text-xl text-slate-300 mb-6">
          WEB APP | DATA VISUALIZATION
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="https://github.com/NurjahanJ/dasboard" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#C33909] text-white hover:bg-[#C33909]/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub Repository
          </Link>
          <Link 
            href="https://dasboard-wheat.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-[#C33909] text-[#C33909] hover:bg-[#C33909]/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </Link>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg shadow-[#C33909]/10 bg-white/5">
        <Image 
          src="/project2-images/image.png" 
          alt="Inflation & Housing Dashboard" 
          fill
          className="object-contain p-4"
          quality={100}
          priority
        />
      </div>

      {/* Project Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#C33909]/30 pb-2">
          Project <span className="text-[#C33909]">Overview</span>
        </h2>
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
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#C33909]/30 pb-2">
          The <span className="text-[#C33909]">Problem</span>
        </h2>
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
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#C33909]/30 pb-2">
          The <span className="text-[#C33909]">Solution</span>
        </h2>
        <p className="text-slate-300 mb-6">
          The Inflation & Housing Dashboard addresses these challenges by providing:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 p-6 rounded-lg border border-[#C33909]/20 hover:shadow-md hover:shadow-[#C33909]/5 transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#C33909]">Interactive Visualizations</h3>
            <p className="text-slate-300">
              Dynamic charts and graphs that respond to user interactions, allowing for deeper exploration of data relationships.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-[#C33909]/20 hover:shadow-md hover:shadow-[#C33909]/5 transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#C33909]">Responsive Design</h3>
            <p className="text-slate-300">
              A layout that automatically adjusts to provide optimal viewing experiences across desktop, tablet, and mobile devices.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-[#C33909]/20 hover:shadow-md hover:shadow-[#C33909]/5 transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#C33909]">Customizable Filters</h3>
            <p className="text-slate-300">
              Tools that allow users to focus on specific data points, time periods, or categories relevant to their analysis.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-[#C33909]/20 hover:shadow-md hover:shadow-[#C33909]/5 transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#C33909]">Dark/Light Mode</h3>
            <p className="text-slate-300">
              Theme options that enhance readability and reduce eye strain in different lighting conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#C33909]/30 pb-2">
          <span className="text-[#C33909]">Technologies</span> Used
        </h2>
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
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#C33909]/30 pb-2">
          <span className="text-[#C33909]">Challenges</span> & Learnings
        </h2>
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
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#C33909]/30 pb-2">
          <span className="text-[#C33909]">Conclusion</span>
        </h2>
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

      {/* Call to Action */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <Link 
          href="https://github.com/NurjahanJ/dasboard" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C33909] text-white hover:bg-[#C33909]/90 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View Source Code
        </Link>
        <Link 
          href="https://dasboard-wheat.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#C33909] text-[#C33909] hover:bg-[#C33909]/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Explore Live Demo
        </Link>
        <Link 
          href="/#projects" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>
      </div>
    </div>
  )
}
