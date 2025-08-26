import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[rgba(4,10,30,0.65)] backdrop-blur-sm border-t border-[#C33909]/20 py-8 mt-auto">
      {/* Footer with 3 columns */}
      <div className="container mx-auto px-8 py-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left - Greeting message */}
        <div className="text-center md:text-left h-full flex items-center">
          <h3 className="text-slate-100 text-xl" style={{ fontFamily: 'var(--font-lora)', fontWeight: 400 }}>Thanks for stopping by!</h3>
        </div>
        
        {/* Center - Navigation */}
        <nav className="flex flex-col space-y-3 items-center md:items-center h-full justify-center">
          <Link 
            href="/" 
            className="text-slate-300 hover:text-[#C33909] transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-slate-300 hover:text-[#C33909] transition-colors duration-300"
          >
            About
          </Link>
          <Link 
            href="/#projects" 
            className="text-slate-300 hover:text-[#C33909] transition-colors duration-300"
          >
            Projects
          </Link>
        </nav>
        
        {/* Right - Social links */}
        <div className="flex flex-col space-y-3 items-center md:items-end">
          <a 
            href="https://linkedin.com/in/nurjahan-jhorna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#C33909] transition-colors duration-300 flex items-center"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#C33909] transition-colors duration-300 flex items-center"
            aria-label="Resume"
          >
            <span>Resume</span>
          </a>
          <a 
            href="https://github.com/NurjahanJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#C33909] transition-colors duration-300 flex items-center"
            aria-label="GitHub"
          >
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:njhorna07@gmail.com" 
            className="text-slate-300 hover:text-[#C33909] transition-colors duration-300 flex items-center"
          >
            <span>njhorna07@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
