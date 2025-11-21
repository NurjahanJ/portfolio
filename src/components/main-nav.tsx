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
import { Menu, X, Compass, Mountain, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { projects, caseStudies } from "@/lib/projects"

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
    { href: "/#projects", label: "Projects" },
  ]
  
  // Resume link (separate from main navigation routes)
  const resumeLink = { href: "/Resume.pdf", label: "Resume", external: true }
  
  // Function to check if the route is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Determine if we're on the About page
  const isAboutPage = pathname === "/about";

  return (
    <nav 
      className={`flex items-center justify-between w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 backdrop-blur-[10px] bg-[rgba(4,10,30,0.65)] border-b border-[#FF7533]/50' 
          : 'py-5 backdrop-blur-[10px] bg-[rgba(4,10,30,0.55)]'
      } ${isAboutPage ? 'py-1' : ''}`} 
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(195, 57, 9, 0.05)' : 'none',
        borderBottom: '1px solid rgba(195, 57, 9, 0.2)',
        ...(isAboutPage && { height: '70px' })
      }}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center" style={{ paddingLeft: '6rem' }}>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-semibold text-white hover:text-[#FF7533] transition-colors duration-300" 
            aria-label="Nurjahan Jhorna home page"
          >
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Digital Map Logo" 
                width={isAboutPage ? "50" : "70"} 
                height={isAboutPage ? "50" : "70"} 
                className="md:ml-4 ml-0 rounded-full" 
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center" style={{ paddingRight: '10rem' }}>
          {routes.map((route, index) => {
            // Special handling for Projects link
            if (route.label === "Projects") {
              return (
                <DropdownMenu key={route.href}>
                  <DropdownMenuTrigger className="group relative overflow-hidden focus:outline-none">
                    <div className="flex items-center gap-1">
                      <span className="text-base font-medium transition-colors capitalize py-1 text-slate-300 hover:text-[#FF7533]"
                      >
                        {route.label}
                      </span>
                      <ChevronDown className="h-4 w-4 text-slate-300 group-hover:text-[#FF7533] transition-colors" />
                    </div>
                    {/* Animated underline */}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[2px] 
                        bg-[#FF7533] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[#FF7533]/40`}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="center" 
                    className="bg-[rgba(4,10,30,0.85)] backdrop-blur-md border border-[#FF7533]/50 text-slate-200 p-2 rounded-lg shadow-lg w-56"
                  >
                    <DropdownMenuLabel className="text-[#FF7533] border-b border-[#FF7533]/50 mb-1 pb-1">Case Studies</DropdownMenuLabel>
                    {caseStudies.map((study) => (
                      <DropdownMenuItem key={study.slug} className="focus:bg-[#FF7533]/10 focus:text-white rounded-md">
                        <Link 
                          href={`/case-studies/${study.slug}`} 
                          className="flex items-center w-full py-1 px-1 hover:text-[#FF7533] transition-colors"
                        >
                          {study.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            
            // Regular links
            return (
              <Link 
                key={route.href} 
                href={route.href}
                onClick={(e) => handleAnchorClick(e, route.href)}
                aria-current={isActive(route.href) ? 'page' : undefined}
                className="group relative overflow-hidden"
              >
                <span className={`text-base font-medium transition-colors capitalize py-1 ${isActive(route.href) 
                  ? 'text-[#FF7533] font-semibold' 
                  : 'text-slate-300 hover:text-[#FF7533]'}`}
                >
                  {route.label}
                </span>
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${isActive(route.href) 
                    ? 'bg-[#FF7533] shadow-[#FF7533]/40' 
                    : 'bg-[#FF7533] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[#FF7533]/40'}`}
                />
              </Link>
            );
          })}
          
          {/* Resume Button with gradient background */}
          <a 
            href={resumeLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-6 py-2 rounded-full"
          >
            {/* Gradient background with animation */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7533] to-[#E64A19] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#E64A19] group-hover:to-[#FF7533] transition-all duration-500"></span>
            
            {/* Button content */}
            <span className="text-base relative z-10 font-medium text-white"
            >
              {resumeLink.label}
            </span>
          </a>
        </div>
        
        {/* Mobile Navigation - NavDrawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button 
                aria-label="Open menu" 
                aria-expanded="false"
                aria-haspopup="true"
                className="p-2 rounded-lg bg-slate-800 border border-[#FF7533]/50 text-[#FF7533] hover:bg-slate-700 hover:border-[#FF7533]/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF7533]/50 focus:ring-offset-2 focus:ring-offset-[#0a1128]"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="p-0 w-full max-w-[100vw] border-l-0 bg-[rgba(4,10,30,0.75)] backdrop-blur-md"
            >
              <div className="flex justify-end p-4">
                <SheetTrigger asChild>
                  <button 
                    aria-label="Close menu" 
                    className="p-2 rounded-full bg-slate-800 text-[#FF7533] hover:bg-slate-700 transition-colors duration-300 border border-[#FF7533]/50 hover:border-[#FF7533]/40"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </SheetTrigger>
              </div>
              
              <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/logo.png" 
                      alt="Digital Map Logo" 
                      width={isAboutPage ? "70" : "120"} 
                      height={isAboutPage ? "70" : "120"} 
                      className="rounded-full" 
                    />
                  </div>
                </div>
                
                <nav className="flex flex-col items-center gap-8 w-full">
                  {routes.map((route) => {
                    const active = isActive(route.href)
                    
                    // Special handling for Projects in mobile menu
                    if (route.label === "Projects") {
                      return (
                        <div key={route.href} className="flex flex-col items-center w-full">
                          <Link
                            href={route.href}
                            onClick={(e) => handleAnchorClick(e, route.href)}
                            aria-current={active ? 'page' : undefined}
                            className="group relative overflow-hidden mb-2"
                          >
                            <span 
                              className={`text-xl font-medium capitalize py-1 transition-colors duration-300 ${active 
                                ? 'text-[#FF7533] font-semibold' 
                                : 'text-slate-300 hover:text-[#FF7533]'}`}
                            >
                              {route.label}
                            </span>
                            {/* Animated underline */}
                            <span 
                              className={`absolute bottom-0 left-0 w-full h-[2px] ${active 
                                ? 'bg-[#FF7533] shadow-[#FF7533]/40' 
                                : 'bg-[#FF7533] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[#FF7533]/40'}`}
                            />
                          </Link>
                          
                          {/* Project links in mobile menu */}
                          <div className="flex flex-col items-center gap-3 mt-2 mb-4 w-full">
                            {caseStudies.map((study) => (
                              <Link 
                                key={study.slug}
                                href={`/case-studies/${study.slug}`} 
                                className="text-sm text-slate-400 hover:text-[#FF7533] transition-colors"
                              >
                                {study.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    
                    // Regular links
                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={(e) => handleAnchorClick(e, route.href)}
                        aria-current={active ? 'page' : undefined}
                        className="group relative overflow-hidden"
                      >
                        <span 
                          className={`text-xl font-medium capitalize py-1 transition-colors duration-300 ${active 
                            ? 'text-[#FF7533] font-semibold' 
                            : 'text-slate-300 hover:text-[#FF7533]'}`}
                        >
                          {route.label}
                        </span>
                        {/* Animated underline */}
                        <span 
                          className={`absolute bottom-0 left-0 w-full h-[2px] ${active 
                            ? 'bg-[#FF7533] shadow-[#FF7533]/40' 
                            : 'bg-[#FF7533] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[#FF7533]/40'}`}
                        />
                      </Link>
                    )
                  })}
                  
                  {/* Resume Button in Mobile Menu with gradient background */}
                  <a
                    href={resumeLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden px-8 py-3 rounded-full mt-2"
                  >
                    {/* Gradient background with animation */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7533] to-[#E64A19] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#E64A19] group-hover:to-[#FF7533] transition-all duration-500"></span>
                    
                    {/* Button content */}
                    <span 
                      className="text-xl relative z-10 font-medium text-white"
                    >
                      {resumeLink.label}
                    </span>
                  </a>
                </nav>
                
                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/NurjahanJ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800 text-[#FF7533] hover:bg-slate-700 transition-colors duration-300 border border-[#FF7533]/50 hover:border-[#FF7533]/40"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/nurjahan-jhorna" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800 text-[#FF7533] hover:bg-slate-700 transition-colors duration-300 border border-[#FF7533]/50 hover:border-[#FF7533]/40"
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