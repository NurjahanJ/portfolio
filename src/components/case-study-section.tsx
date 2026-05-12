"use client";

import { motion } from "framer-motion";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/projects";

export function CaseStudySection() {
  const featuredStudies = caseStudies.filter(study => study.isFeatured);
  const studiesToShow = featuredStudies.length > 0 ? featuredStudies : caseStudies;
  
  return (
    <section className="pt-8 pb-6 relative">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-[#FF7533] font-medium mb-3">Selected Work</p>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">Case Studies</h2>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        {studiesToShow.map((study, index) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <CaseStudyCard
              category={study.category}
              title={study.title}
              description={study.description}
              imagePath={study.imagePath}
              slug={study.slug}
              techStack={study.techStack}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
