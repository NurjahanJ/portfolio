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
}

export function CaseStudyCard({ category, title, description, imagePath, slug, techStack, demo, github }: CaseStudyCardProps) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 md:gap-10 items-center p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-[#FF7533]/40 transition-all duration-500 bg-slate-900/40 backdrop-blur-sm">
      {/* Content */}
      <div className="space-y-3 order-2 md:order-1">
        <p className="text-xs uppercase tracking-[0.2em] text-[#FF7533] font-medium">
          {category}
        </p>

        <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-blue-200 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#FF7533] to-[#E64A19] text-white font-medium hover:shadow-lg hover:shadow-[#FF7533]/25 transition-all duration-300"
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
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-full border border-slate-500/40 text-slate-300 font-medium hover:border-[#FF7533]/50 hover:text-white transition-all duration-300"
            >
              GitHub
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
          <Link
            href={`/case-studies/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-[#FF7533] font-medium hover:text-[#FF7533]/80 transition-colors duration-300"
          >
            Read Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-700/40 order-1 md:order-2">
        <Image
          src={imagePath}
          alt={`${title} preview`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
    </div>
  );
}
