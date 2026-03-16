"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { CaseStudySection } from "@/components/case-study-section";
import { StarFieldCanvas } from "@/components/star-field-canvas";

export default function Home() {
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [compassBounce, setCompassBounce] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for motion preferences and device type
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    
    setPrefersReducedMotion(mediaQuery.matches);
    setIsMobile(mobileQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    
    mediaQuery.addEventListener('change', handleMotionChange);
    mobileQuery.addEventListener('change', handleMobileChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  // Animation timing effects
  useEffect(() => {
    // Respect motion preferences - faster animations or immediate display
    const headlineDelay = prefersReducedMotion ? 100 : 300;
    const buttonDelay = prefersReducedMotion ? 200 : 800;
    const compassDelay = prefersReducedMotion ? 300 : 1500;
    
    const headlineTimer = setTimeout(() => setHeadlineVisible(true), headlineDelay);
    const buttonTimer = setTimeout(() => setButtonVisible(true), buttonDelay);
    const compassTimer = setTimeout(() => setCompassBounce(true), compassDelay);
    
    return () => {
      clearTimeout(headlineTimer);
      clearTimeout(buttonTimer);
      clearTimeout(compassTimer);
    };
  }, []);

  return (
    <div className="relative">
      {/* Animated Star Background Canvas */}
      <StarFieldCanvas prefersReducedMotion={prefersReducedMotion} isMobile={isMobile} />

      {/* Fullscreen Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-start justify-center px-8 z-10 pt-16">
        <div className="max-w-[95%] ml-0 mr-auto space-y-12">
          {/* Explorer Badge removed */}
          
          {/* Main Headline */}
          <div className={`max-w-[100%] ml-4 md:ml-16 mr-auto -mt-48 transition-all duration-700 delay-100 transform ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 
              className={`text-display font-serif font-medium mb-6 text-left bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000 ease-out`} 
              style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)' }}
            >
              Nurjahan Jhorna
            </h1>
            <p 
              className="text-title font-serif font-medium mb-2 text-left text-[#FF7533]"
              style={{ textShadow: '0 0 10px rgba(255, 117, 51, 0.6)' }}
            >
              UX Designer & Frontend Developer
            </p>
            
            {/* Social Proof */}
            <p className="text-body text-blue-300 mb-6 font-light">
              Currently: UX Research Assistant | NJIT
            </p>
            <p className="text-title font-serif font-normal text-white/90 max-w-[80%] mb-6 text-left">
              Where design meets code: I craft user-centered experiences that bring clarity, beauty, and accessibility to the web.
            </p>
            
            {/* Skills Preview */}
            <div className="mb-8">
              <p className="text-body text-blue-300 mb-3 font-medium">Core Skills</p>
              <div className="flex flex-wrap gap-2 max-w-[80%]">
                {['React', 'TypeScript', 'Figma', 'User Research', 'Next.js', 'UX Design', 'API Integration', 'AI Prompting'].map((skill) => (
                  <span 
                    key={skill}
                    className="text-body bg-blue-900/30 text-blue-200 px-4 py-2 rounded-full border border-blue-500/20 backdrop-blur-sm hover:bg-blue-800/40 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Multiple CTAs */}
            <div className={`flex flex-wrap gap-4 justify-start transition-all duration-700 delay-300 transform ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Primary CTA - View Portfolio */}
              <Button asChild size="lg" className="rounded-full px-8 py-6 bg-transparent hover:bg-transparent relative group overflow-hidden">
                <Link href="/#projects" className="relative z-10 text-white font-medium">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7533] to-[#FF5722] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#FF5722] group-hover:to-[#FF7533] transition-all duration-300"></span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7533] to-[#FF5722] rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-[#FF5722] group-hover:to-[#FF7533] group-hover:blur-lg transition-all duration-500"></span>
                  <span className="relative z-20 flex items-center justify-center gap-2 text-white font-serif font-medium">
                    View Projects
                  </span>
                </Link>
              </Button>
              
              {/* Secondary CTA - LinkedIn */}
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 bg-transparent border-2 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
                <Link href="https://www.linkedin.com/in/nurjahanjhorna" target="_blank" rel="noopener noreferrer" className="font-serif font-medium">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className={`absolute bottom-30 left-1/2 transform -translate-x-1/2 ${compassBounce ? (prefersReducedMotion ? 'opacity-100' : 'animate-bounce') : 'opacity-0'} transition-opacity duration-500`}>
            <div className="bg-slate-800/70 p-3 rounded-full border border-slate-600/50 backdrop-blur-sm">
              <ChevronDown className="h-6 w-6 text-[#FF7533]" />
              <span className="sr-only">Scroll down</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 relative z-10 mb-0 -mt-28 pt-20">
        <div id="projects">
          <CaseStudySection />
        </div>
      </main>
    </div>
  );
}
