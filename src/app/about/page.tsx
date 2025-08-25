"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Palette, Compass } from "lucide-react";

export default function About() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Handle card flip
  const handleCardFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a1128] text-slate-100">
      {/* Starry night sky background */}
      <div className="absolute inset-0 z-0">
        {/* Deep blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#1c2e4a] to-[#0a1128]"></div>
        
        {/* Stars - small */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={`star-sm-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Stars - medium */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={`star-md-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 7 + 4}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Shooting stars animation removed */}
        
        {/* Distant nebula/galaxy effect */}
        <div 
          className="absolute rounded-full opacity-10 blur-2xl"
          style={{
            width: '300px',
            height: '300px',
            top: '30%',
            right: '15%',
            background: 'radial-gradient(circle, rgba(147,112,219,0.5) 0%, rgba(76,104,186,0.3) 50%, rgba(49,46,129,0) 100%)',
          }}
        ></div>
      </div>
      <main className="relative container mx-auto px-4 py-16 md:py-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-4 mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent text-center" style={{
                textShadow: '0 0 20px rgba(147, 197, 253, 0.3), 0 0 40px rgba(147, 197, 253, 0.1)'
              }}>
                A little about me
              </h1>
            </div>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl leading-relaxed text-slate-300">
                As a Web & Information Systems student at New Jersey Institute of Technology, I'm at a pivotal point in my academic journey where theory transforms into wisdom. My journey began with a curiosity about how technology can create meaningful experiences, and I'm particularly drawn to the intersection of design and functionality.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-300">
                Through my academic projects, I've developed a thoughtful approach to front-end technologies like HTML, CSS, JavaScript, and React. I value the analytical process of translating complex concepts into responsive, accessible websites that provide meaningful learning experiences. Each project is an expedition into new possibilities, where I apply my growing toolkit to craft digital experiences that resonate and inspire.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-300">
                I'm proficient with design tools like Figma, which I use to prototype and refine my ideas before implementation. This methodical approach helps me create cohesive experiences that balance clarity with functionality. I'm dedicated to continuous learning and growth, always seeking deeper understanding and opportunities to share insights through my work.
              </p>
            </div>
            
          </div>
        </div>

      </main>
    </div>
  );
}

