"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  category: string;
  title: string;
  description: string;
  imagePath: string;
  slug: string;
  duration?: string;
  teamSize?: string;
  status?: string;
  techStack?: string[];
  demo?: string;
  github?: string;
  highlights?: string[];
  studentResearchers?: string[];
  facultyAdvisor?: string;
  index?: number;
  reverse?: boolean;
}

export function CaseStudyCard({ category, title, description, imagePath, slug, techStack, demo, github, studentResearchers, facultyAdvisor, index = 0, reverse = false }: CaseStudyCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
      {/* Image */}
      <Link
        href={`/case-studies/${slug}`}
        className={`relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-700/40 shadow-xl shadow-black/20 ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <Image
          src={imagePath}
          alt={`${title} preview`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      {/* Content */}
      <div className={`space-y-4 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <div className="flex items-center gap-4">
          <span className="font-serif text-2xl md:text-3xl text-[#FF7533]/40 leading-none">{number}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#FF7533]/40 to-transparent" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#FF7533] font-medium">
            {category}
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white group-hover:text-blue-200 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed line-clamp-4">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(studentResearchers || facultyAdvisor) && (
          <div className="pt-1 space-y-1 text-xs text-slate-400">
            {studentResearchers && studentResearchers.length > 0 && (
              <div>
                <span className="font-medium text-slate-300">Student Researchers:</span> {studentResearchers.join(", ")}
              </div>
            )}
            {facultyAdvisor && (
              <div>
                <span className="font-medium text-slate-300">Faculty Advisor:</span> {facultyAdvisor}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-3">
          <Link
            href={`/case-studies/${slug}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-[#FF7533] to-[#E64A19] text-white font-medium hover:shadow-lg hover:shadow-[#FF7533]/25 transition-all duration-300"
          >
            Read Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-300 font-medium hover:text-[#FF7533] transition-colors duration-300"
            >
              View Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-300 font-medium hover:text-[#FF7533] transition-colors duration-300"
            >
              GitHub
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
