import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackToProjects() {
  return (
    <div>
      <Link 
        href="/#projects" 
        className="inline-flex items-center px-6 py-3 rounded-lg bg-[#0a0f1e] text-white hover:bg-[#0a0f1e]/90 transition-colors border border-slate-800"
      >
        <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
        <span className="text-lg font-medium">Back to Projects</span>
      </Link>
    </div>
  );
}
