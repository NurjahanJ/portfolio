import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  /** Text color class for the heading, e.g. "text-orange-300" */
  accentClass?: string;
  /** Background class for the accent bar, e.g. "bg-gradient-to-b from-orange-300 to-pink-400" */
  barClass?: string;
}

export function SectionHeading({
  children,
  accentClass = "text-sky-300",
  barClass = "bg-sky-400",
}: SectionHeadingProps) {
  return (
    <h2
      className={`flex items-center gap-3 mb-0 text-2xl md:text-3xl font-serif font-medium tracking-tight ${accentClass}`}
    >
      <span
        className={`inline-block h-7 w-1.5 shrink-0 rounded-full ${barClass}`}
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}
