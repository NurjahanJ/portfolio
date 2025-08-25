"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu, X, Compass, Mountain } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll event to add shadow and background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only apply to hash links on the same page
    if (href.startsWith('/#')) {
      e.preventDefault();
      
      // If we're not on the home page, navigate first
      if (pathname !== '/') {
        window.location.href = href;
        return;
      }
      
      // Extract the id from the href
      const id = href.substring(2);
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ]
  
  // Function to check if the route is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav 
      className={`flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 backdrop-blur-[10px] bg-[rgba(10,17,40,0.7)] border-b border-cyan-700/20' 
          : 'py-5 backdrop-blur-[10px] bg-[rgba(10,17,40,0.6)]'
      }`} 
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(34, 211, 238, 0.05)' : 'none',
        borderBottom: '1px solid rgb(14, 116, 144, 0.2)'
      }}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-semibold text-white hover:text-cyan-400 transition-colors duration-300" 
          aria-label="Nurjahan Jhorna home page"
        >
          <Mountain className="h-5 w-5 text-cyan-400" aria-hidden="true" />
          <span className="font-serif">Nurjahan Jhorna</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {routes.map((route, index) => (
            <Link 
              key={route.href} 
              href={route.href}
              onClick={(e) => handleAnchorClick(e, route.href)}
              aria-current={isActive(route.href) ? 'page' : undefined}
              className="group relative overflow-hidden"
            >
              <span className={`text-base font-medium transition-colors capitalize py-1 ${isActive(route.href) 
                ? 'text-cyan-400 font-semibold' 
                : 'text-slate-300 hover:text-cyan-400'}`}
              >
                {route.label}
              </span>
              {/* Animated underline */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-[2px] ${isActive(route.href) 
                  ? 'bg-cyan-400 shadow-cyan-400/40' 
                  : 'bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-cyan-400/40'}`}
              />
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation - NavDrawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button 
                aria-label="Open menu" 
                aria-expanded="false"
                aria-haspopup="true"
                className="p-2 rounded-lg bg-slate-800 border border-cyan-700/20 text-cyan-400 hover:bg-slate-700 hover:border-cyan-700/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-[#0a1128]"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="p-0 w-full max-w-[100vw] border-l-0 bg-[#0a1128]/95 backdrop-blur-md"
            >
              <div className="flex justify-end p-4">
                <SheetTrigger asChild>
                  <button 
                    aria-label="Close menu" 
                    className="p-2 rounded-full bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors duration-300 border border-cyan-700/20 hover:border-cyan-700/40"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </SheetTrigger>
              </div>
              
              <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
                <div className="flex items-center gap-2 mb-8">
                  <Compass className="h-8 w-8 text-cyan-400" aria-hidden="true" />
                  <span className="text-2xl font-serif font-semibold text-white">Nurjahan Jhorna</span>
                </div>
                
                <nav className="flex flex-col items-center gap-8 w-full">
                  {routes.map((route) => {
                    const active = isActive(route.href)
                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={(e) => handleAnchorClick(e, route.href)}
                        aria-current={active ? 'page' : undefined}
                        className="group relative overflow-hidden"
                      >
                        <span 
                          className={`text-2xl font-medium capitalize py-1 transition-colors duration-300 ${active 
                            ? 'text-cyan-400 font-semibold' 
                            : 'text-slate-300 hover:text-cyan-400'}`}
                        >
                          {route.label}
                        </span>
                        {/* Animated underline */}
                        <span 
                          className={`absolute bottom-0 left-0 w-full h-[2px] ${active 
                            ? 'bg-cyan-400 shadow-cyan-400/40' 
                            : 'bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-cyan-400/40'}`}
                        />
                      </Link>
                    )
                  })}
                </nav>
                
                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/NurjahanJ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors duration-300 border border-cyan-700/20 hover:border-cyan-700/40"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/nurjahan-jhorna" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors duration-300 border border-cyan-700/20 hover:border-cyan-700/40"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}