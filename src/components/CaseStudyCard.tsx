"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  category: string;
  title: string;
  description: string;
  imagePath: string;
  slug: string;
}

export function CaseStudyCard({ category, title, description, imagePath, slug }: CaseStudyCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 px-8 md:px-12 relative">
      {/* Subtle star background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={`star-casestudy-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col space-y-4 order-2 md:order-1 relative z-10">
        <div className="uppercase tracking-wider text-sm font-medium text-sky-400">
          {category}
        </div>
        
        <h3 className="text-3xl font-bold text-sky-300">
          {title}
        </h3>
        
        <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
          {description}
        </p>
        
        <div className="pt-4">
          <Button 
            asChild 
            variant="default" 
            className="group bg-transparent hover:bg-sky-900/30 text-sky-300 border border-sky-500/50 hover:border-sky-400 focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Link href={`/case-studies/${slug}`} className="inline-flex items-center">
              See Case Study 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="relative order-1 md:order-2 aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl border border-sky-500/30 hover:border-sky-400/50 transition-all duration-300">
        <Image
          src={imagePath}
          alt={`${title} preview`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(4,10,30,0.4)] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
