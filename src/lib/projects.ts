// Define the Project type for better type safety
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string; // Optional GitHub URL
  demo?: string;   // Optional demo URL
  image?: string;  // Optional image path
}

// Define the CaseStudy type for more detailed project showcases
export interface CaseStudy extends Project {
  category: string; // E.g., "APP DESIGN | MVP (Prototype)"
  slug: string;     // URL-friendly identifier
  imagePath: string; // Path to the main image
  isFeatured?: boolean; // Whether to feature this case study prominently
}

// Export an array of projects
export const projects: Project[] = [
  {
    title: "Data Visualization Dashboard",
    description: "An interactive analytics dashboard that visualizes complex data through intuitive charts and responsive layouts. Built with Next.js and Tailwind CSS, this project features dynamic data filtering, dark/light mode, and real-time updates that adapt seamlessly across all devices.",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "Vercel"],
    github: "https://github.com/NurjahanJ/dasboard",
    demo: "https://dasboard-wheat.vercel.app/"
  },
  {
    title: "Flutter Calculator",
    description: "A cross-platform calculator application with an elegant, intuitive interface built using Flutter. Features include a customizable theme system, advanced scientific functions, calculation history, and haptic feedback. Designed with accessibility in mind while maintaining visual appeal across iOS and Android devices.",
    tags: ["Flutter", "Dart", "Mobile UI"],
    github: "https://github.com/NurjahanJ/flutter_calculator"
  },
  {
    title: "AI Story Generator",
    description: "An innovative AI-powered storytelling platform that crafts unique narratives based on user prompts and preferences. Leveraging advanced NLP techniques, this Python application creates immersive, personalized stories with branching narratives that adapt to reader choices. Features include theme customization, character development, and exportable story formats for sharing adventures.",
    tags: ["AI", "Python", "NLP", "Interactive"],
    github: "https://github.com/NurjahanJ/story_ai"
  },
  {
    title: "StitchPal",
    description: "AI crochet companion for patterns, yarn, and project tools.",
    tags: ["AI", "Mobile App", "Crafting", "UX Design"],
    github: "https://github.com/NurjahanJ/stitchpal"
  }
];

// Export an array of case studies
export const caseStudies: CaseStudy[] = [
  {
    title: "StitchPal",
    slug: "stitchpal",
    category: "APP DESIGN | MVP (Prototype)",
    description: "AI crochet companion for patterns, yarn, and project tools.",
    tags: ["AI", "Mobile App", "Crafting", "UX Design"],
    github: "https://github.com/NurjahanJ/stitchpal",
    imagePath: "/project1-images copy/op-page.png",
    isFeatured: true
  }
];

// Helper function to get all unique tags across projects
export function getAllTags(): string[] {
  const allTags = projects.flatMap(project => project.tags);
  return [...new Set(allTags)];
}

// Helper function to filter projects by tag
export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project => project.tags.includes(tag));
}
