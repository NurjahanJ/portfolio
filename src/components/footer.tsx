import Link from "next/link";
import { Github, Linkedin, Mail, Compass, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-cyan-700/20 py-8 mt-auto relative overflow-hidden">
      {/* Subtle stars in footer */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`star-footer-${i}`}
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-bold text-lg mb-4 flex items-center">
              <Compass className="w-5 h-5 mr-2" />
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                About
              </Link>
              <Link 
                href="/#projects" 
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                Projects
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h2 className="text-cyan-400 font-bold text-lg mb-4">Connect</h2>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:nurjahan.jhorna@example.com" 
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
              >
                <div className="p-2 bg-slate-800 rounded-full mr-3 group-hover:bg-slate-700 transition-colors duration-300 border border-cyan-700/20 group-hover:border-cyan-700/40">
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-400" />
                </div>
                <span>Email</span>
              </a>
              <a 
                href="https://github.com/NurjahanJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
              >
                <div className="p-2 bg-slate-800 rounded-full mr-3 group-hover:bg-slate-700 transition-colors duration-300 border border-cyan-700/20 group-hover:border-cyan-700/40">
                  <Github className="w-4 h-4 text-cyan-400 group-hover:text-cyan-400" />
                </div>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/nurjahan-jhorna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
              >
                <div className="p-2 bg-slate-800 rounded-full mr-3 group-hover:bg-slate-700 transition-colors duration-300 border border-cyan-700/20 group-hover:border-cyan-700/40">
                  <Linkedin className="w-4 h-4 text-cyan-400 group-hover:text-cyan-400" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* About Site */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-bold text-lg mb-4">About This Map</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              My Digital Map is a portfolio designed to guide you through my journey as a developer and designer.
              Built with Next.js, TypeScript, and Tailwind CSS, it showcases my projects and skills.
            </p>
            <p className="text-slate-300 text-sm mt-4">
              &copy; {new Date().getFullYear()} Nurjahan Jhorna. Charting digital frontiers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
