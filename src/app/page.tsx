"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, Linkedin, PenTool, Code, Search, Sparkles } from "lucide-react";
import { CaseStudySection } from "@/components/case-study-section";
import { StarFieldCanvas } from "@/components/star-field-canvas";

export default function Home() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.8, delay: prefersReducedMotion ? 0 : delay, ease: "easeOut" as const },
    }),
  };

  return (
    <div className="relative">
      <StarFieldCanvas prefersReducedMotion={prefersReducedMotion} isMobile={isMobile} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-start justify-center px-8 z-10 pt-16">
        <div className="max-w-[95%] ml-0 mr-auto space-y-12">
          <div className="max-w-[100%] ml-4 md:ml-16 mr-auto -mt-48">
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-display font-serif font-medium mb-6 text-left bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)' }}
            >
              Nurjahan Jhorna
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
              className="text-title font-serif font-medium mb-2 text-left text-[#FF7533]"
              style={{ textShadow: '0 0 10px rgba(255, 117, 51, 0.6)' }}
            >
              UX Designer &amp; Frontend Developer
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
              className="text-body text-blue-300 mb-6 font-light"
            >
              Currently: UX Research Assistant | NJIT
            </motion.p>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="text-title font-serif font-normal text-white/90 max-w-[80%] mb-6 text-left"
            >
              Where design meets code: I craft user-centered experiences that bring clarity, beauty, and accessibility to the web.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.45}
              className="flex flex-wrap gap-4 justify-start"
            >
              <Link
                href="/#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7533] to-[#E64A19] text-white font-medium hover:shadow-lg hover:shadow-[#FF7533]/25 transition-all duration-300 hover:scale-[1.03]"
              >
                View Projects
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nurjahanjhorna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-blue-400/50 text-blue-300 font-medium hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-slate-500/40 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#FF7533]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="relative z-10 pt-8 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium mb-3">What I Do</p>
          </motion.div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block max-w-6xl mx-auto">
            {/* Timeline connector line */}
            <div className="relative">
              <div className="absolute top-6 left-[calc(12.5%)] right-[calc(12.5%)] h-[2px] bg-gradient-to-r from-[#FF7533]/60 via-blue-400/40 to-[#FF7533]/60" />

              <div className="grid grid-cols-4 gap-4">
                {[
                  {
                    icon: <Search className="h-5 w-5" />,
                    title: "UX Research & Insights",
                    summary: "User interviews, usability testing, and research-driven insights.",
                    detail: "I synthesize qualitative and quantitative findings to uncover key insights and translate them into actionable recommendations that guide user-centered design decisions.",
                  },
                  {
                    icon: <PenTool className="h-5 w-5" />,
                    title: "Design & Prototyping",
                    summary: "Wireframes, mockups, and interactive prototypes in Figma.",
                    detail: "I focus on translating complex ideas into clear, usable interfaces that improve usability, accessibility, and overall interaction quality.",
                  },
                  {
                    icon: <Code className="h-5 w-5" />,
                    title: "Frontend Development",
                    summary: "Responsive, accessible websites with React, Next.js, and Tailwind.",
                    detail: "I bring designs to life with clean, maintainable code and a focus on performance, accessibility, and responsive design across all devices.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "AI-Assisted Workflows",
                    summary: "Prompt engineering, AI-assisted research, and code generation.",
                    detail: "I explore how AI can enhance the creative and technical process, boosting efficiency and innovation across design and development workflows.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                    className="group flex flex-col items-center text-center"
                  >
                    {/* Node dot */}
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-[#FF7533]/60 flex items-center justify-center text-[#FF7533] mb-6 group-hover:bg-[#FF7533]/20 group-hover:border-[#FF7533] transition-all duration-300 relative z-10">
                      {item.icon}
                    </div>
                    {/* Content */}
                    <h3 className="text-base font-serif font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed px-2">{item.summary}</p>
                    {/* Full detail on hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                      <p className="text-sm text-slate-400 leading-relaxed px-2 pt-2">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden max-w-md mx-auto">
            <div className="relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF7533]/60 via-blue-400/40 to-[#FF7533]/60" />

              <div className="space-y-12">
                {[
                  {
                    icon: <Search className="h-5 w-5" />,
                    title: "UX Research & Insights",
                    description: "I identify user needs and behavioral patterns through user interviews and usability testing, supported by structured research analysis. I synthesize qualitative and quantitative findings to uncover key insights and translate them into actionable recommendations that guide user-centered design decisions.",
                  },
                  {
                    icon: <PenTool className="h-5 w-5" />,
                    title: "Design & Prototyping",
                    description: "I develop wireframes, mockups, and interactive prototypes in Figma that transform research insights into intuitive product experiences. I focus on translating complex ideas into clear, usable interfaces that improve usability, accessibility, and overall interaction quality.",
                  },
                  {
                    icon: <Code className="h-5 w-5" />,
                    title: "Frontend Development",
                    description: "I build responsive, accessible web experiences using React, Next.js, TypeScript, and Tailwind CSS. I bring designs to life with clean, maintainable code and a focus on performance, accessibility, and responsive design across all devices.",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "AI-Assisted Workflows",
                    description: "I integrate AI tools into design and development workflows to boost efficiency and innovation. From prompt engineering and AI-assisted UX research to code generation, I explore how AI can enhance the creative and technical process.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    className="relative"
                  >
                    {/* Node dot */}
                    <div className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-[#FF7533]/60 flex items-center justify-center text-[#FF7533]">
                      {item.icon}
                    </div>
                    {/* Content */}
                    <div className="pl-4">
                      <h3 className="text-base font-serif font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <main className="relative z-10">
        <div id="projects" className="container mx-auto px-4 pt-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <CaseStudySection />
          </motion.div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="relative z-10 pb-24 pt-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
              Let&apos;s work together
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:njhorna07@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7533] to-[#E64A19] text-white font-medium hover:shadow-lg hover:shadow-[#FF7533]/25 transition-all duration-300 hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/nurjahanjhorna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-slate-500/40 text-slate-300 font-medium hover:border-[#FF7533]/50 hover:text-white transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
