"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { label: "React / Next.js", category: "dev" },
  { label: "TypeScript", category: "dev" },
  { label: "Tailwind CSS", category: "dev" },
  { label: "Flutter / Dart", category: "dev" },
  { label: "Figma", category: "design" },
  { label: "UX Research", category: "design" },
  { label: "Prototyping", category: "design" },
  { label: "User Testing", category: "design" },
  { label: "AI Prompting", category: "other" },
  { label: "API Integration", category: "other" },
];

const hobbies = [
  {
    title: "Crochet",
    image: "/crochet.png",
    description: "Bringing creativity to life with yarn — cozy blankets, intricate patterns, and a sense of calm.",
  },
  {
    title: "Cross Stitch",
    image: "/cross-stitch.png",
    description: "Transforming simple threads into colorful, detailed designs one stitch at a time.",
  },
  {
    title: "Games",
    image: "/games.png",
    description: "Exploring virtual worlds and strategic challenges that sharpen problem-solving skills.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a1128] text-slate-100">
      {/* Subtle star background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#1c2e4a] to-[#0a1128]" />
        <div className="absolute inset-0">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white motion-reduce:animate-none"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `twinkle ${Math.random() * 6 + 3}s ease-in-out infinite ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <main className="relative z-10 container mx-auto px-8 md:px-16 pt-16 pb-24 max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium mb-4">About</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent leading-[1.1] mb-6">
            A little about me
          </h1>
          <div className="w-16 h-[2px] bg-[#FF7533] mx-auto" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="space-y-7 mb-24 text-slate-200 text-[24px] leading-[1.8]"
        >
          <p>
            Hi there! My name is Nurjahan Jhorna and I am a senior majoring at Web &amp; Information Systems student at New Jersey Institute of Technology.
          </p>
          <p>
            I&apos;m passionate about crafting digital experiences that are intuitive, impactful, and centered around people. My curiosity for technology started with a simple question: <em className="text-white not-italic">how can design and code work together to make life easier and more enjoyable?</em> Over time, that curiosity grew into a drive to design and build solutions that combine usability with creativity.
          </p>
          <p>
            Throughout my academic journey, I&apos;ve gained hands-on experience with front-end development such as HTML, CSS, JavaScript, and React, while also exploring UX design and research. I enjoy prototyping with Figma and translating ideas into responsive, accessible websites. For me, every project is more than just development; it&apos;s a chance to solve problems thoughtfully and bring clarity, beauty, and functionality to the web.
          </p>
          <p>
            I&apos;m a lifelong learner, always experimenting with new frameworks and exploring ways to design solutions that are practical and human-centered. Recently, I&apos;ve begun integrating AI into my workflow to keep pace with industry shifts, boost efficiency, and spark innovation. Currently, I serve as a UX research assistant, contributing to a project that examines Generative AI and its environmental impacts.
          </p>
          <p>
            Whether I&apos;m coding, sketching, or testing with users, my goal remains simple: to create experiences that resonate, empower, and make a difference.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium mb-3">Toolkit</p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-white">Skills &amp; Technologies</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-slate-700/60 bg-slate-900/50 text-slate-300 hover:border-[#FF7533]/40 hover:text-white transition-all duration-300"
              >
                {skill.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium mb-3">Beyond the Screen</p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-white">Life Outside Code</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="group text-center">
                <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-2xl border border-slate-700/50 group-hover:border-[#FF7533]/30 transition-colors duration-300">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-serif font-medium text-white mb-2">{hobby.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
