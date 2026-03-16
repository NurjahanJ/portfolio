"use client";

import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/projects";

export function CaseStudySection() {
  // Filter for featured case studies or show all if none are featured
  const featuredStudies = caseStudies.filter(study => study.isFeatured);
  const studiesToShow = featuredStudies.length > 0 ? featuredStudies : caseStudies;
  
  return (
    <section className="pt-12 pb-6 relative">
      {/* Case studies list */}
      <div className="space-y-8">
        {studiesToShow.map((study) => (
          <CaseStudyCard
            key={study.slug}
            category={study.category}
            title={study.title}
            description={study.description}
            imagePath={study.imagePath}
            slug={study.slug}
            duration={study.duration}
            teamSize={study.teamSize}
            status={study.status}
            techStack={study.techStack}
            demo={study.demo}
            github={study.github}
            highlights={study.highlights}
          />
        ))}
      </div>
    </section>
  );
}
