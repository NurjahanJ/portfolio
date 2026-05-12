interface CaseStudyTagsProps {
  tags: string[];
  colorClass?: string;
}

export function CaseStudyTags({ tags, colorClass = "text-sky-300 border-sky-500/30 hover:bg-sky-900/30" }: CaseStudyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-5" aria-label="Project technologies">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(10,17,40,0.9)] transition-transform duration-300 hover:scale-105 ${colorClass}`}
          role="listitem"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
