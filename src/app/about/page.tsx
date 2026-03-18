"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiDart, SiFigma, SiCanva, SiGithub, SiVercel, SiHtml5, SiCss, SiJavascript, SiGit } from "react-icons/si";
import { HiOutlineBeaker, HiOutlineCursorArrowRays, HiOutlineUserGroup, HiOutlineCpuChip, HiOutlineCodeBracket, HiOutlinePaintBrush } from "react-icons/hi2";
import type { IconType } from "react-icons";

interface Skill {
  label: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Development",
    icon: HiOutlineCodeBracket,
    skills: [
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { label: "CSS3", icon: SiCss, color: "#1572B6" },
      { label: "Flutter", icon: SiFlutter, color: "#02569B" },
      { label: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    title: "Design & Research",
    icon: HiOutlinePaintBrush,
    skills: [
      { label: "Figma", icon: SiFigma, color: "#F24E1E" },
      { label: "Canva", icon: SiCanva, color: "#00C4CC" },
      { label: "UX Research", icon: HiOutlineBeaker, color: "#A78BFA" },
      { label: "Prototyping", icon: HiOutlineCursorArrowRays, color: "#F472B6" },
      { label: "User Testing", icon: HiOutlineUserGroup, color: "#34D399" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: HiOutlineCpuChip,
    skills: [
      { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { label: "AI Prompting", icon: HiOutlineCpuChip, color: "#FF7533" },
    ],
  },
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
          className="space-y-8 mb-24 text-white text-[28px] leading-[1.9]"
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
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium mb-3">Toolkit</p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-white">Skills &amp; Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-[#FF7533]/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-5 h-5 text-[#FF7533]" />
                  <h3 className="text-lg font-serif font-medium text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.label}
                      className="group flex flex-col items-center gap-2 py-3 rounded-xl hover:bg-slate-800/50 transition-colors duration-200"
                    >
                      <skill.icon
                        className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs text-slate-400 group-hover:text-white text-center leading-tight transition-colors duration-200">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                <div className="relative w-48 h-48 mx-auto mb-5 overflow-hidden rounded-2xl border border-slate-700/50 group-hover:border-[#FF7533]/30 transition-colors duration-300">
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
