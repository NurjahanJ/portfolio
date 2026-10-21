"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, Linkedin, PenTool, Code, Search, Sparkles, Download } from "lucide-react";
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
      <section className="relative min-h-[92vh] flex flex-col items-start justify-center px-8 z-10 pt-24 pb-16">
        <div className="w-full max-w-4xl ml-4 md:ml-16">
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.05}
            className="text-display font-serif font-medium mb-5 text-left bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)' }}
          >
            Nurjahan Jhorna
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.12}
            className="text-title font-serif font-medium mb-2 text-left text-[#FF7533]"
            style={{ textShadow: '0 0 10px rgba(255, 117, 51, 0.6)' }}
          >
            UX/UI Designer &amp; Frontend Developer
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.18}
            className="text-body text-blue-300 mb-6 font-light"
          >
            B.S. Web &amp; Information Systems · NJIT &nbsp;|&nbsp; Former Research Assistant
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.24}
            className="text-lg md:text-xl font-light text-white/80 max-w-2xl mb-7 text-left leading-relaxed"
          >
            I design and build AI-powered experiences that blend UX research, human-centered design, and modern frontend engineering, turning intelligent systems into interactive applications that feel thoughtful, immersive, and genuinely useful.
          </motion.p>

          {/* Skill chips */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
            className="flex flex-wrap gap-2 mb-8 max-w-2xl"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Figma", "OpenAI API"].map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/60 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.38}
            className="flex flex-wrap gap-4 justify-start"
          >
            <Link
              href="/#projects"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7533] to-[#E64A19] text-white font-medium hover:shadow-lg hover:shadow-[#FF7533]/25 transition-all duration-300 hover:scale-[1.03]"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#FF7533]/50 text-[#FF7533] font-medium hover:bg-[#FF7533]/10 hover:border-[#FF7533] transition-all duration-300"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Resume
            </a>
            <Link
              href="https://www.linkedin.com/in/nurjahanjhorna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-blue-400/50 text-blue-300 font-medium hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
              Get In Touch
            </Link>
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
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium mb-3">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
              Research, design, and build end-to-end
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mt-4">
              I work across the full product lifecycle, from user research and interface design to shipping production frontend and AI-powered features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "AI Product Development",
                detail: "Building LLM-powered applications with prompt engineering, API integration, and automated AI workflows.",
                skills: ["Prompt Engineering", "LLM Apps", "OpenAI API"],
              },
              {
                icon: <Search className="h-5 w-5" />,
                title: "UX Research & Insights",
                detail: "User interviews, literature reviews, and competitive analysis synthesized into actionable design decisions.",
                skills: ["User Research", "Personas", "Synthesis"],
              },
              {
                icon: <PenTool className="h-5 w-5" />,
                title: "Design & Prototyping",
                detail: "Wireframes, user flows, and interactive Figma prototypes grounded in solid information architecture.",
                skills: ["Figma", "Wireframing", "User Flows"],
              },
              {
                icon: <Code className="h-5 w-5" />,
                title: "Frontend Development",
                detail: "Responsive, accessible interfaces built with React, Next.js, Node.js, and REST APIs.",
                skills: ["React", "Next.js", "Node.js"],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="group flex flex-col rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-[#FF7533]/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FF7533]/10 border border-[#FF7533]/30 flex items-center justify-center text-[#FF7533] mb-5 group-hover:bg-[#FF7533]/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-serif font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">{item.detail}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
