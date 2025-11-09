"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <main className="relative container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-4 mb-12">
              <h1 className="text-headline md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent text-center" style={{
                textShadow: '0 0 20px rgba(147, 197, 253, 0.3), 0 0 40px rgba(147, 197, 253, 0.1)'
              }}>
                A little about me
              </h1>
              
              {/* Thin line separator */}
              <div className="w-[500px] h-[2px] bg-[#C33909] mx-auto mt-6 mb-8"></div>
            </div>
            
            <div className="space-y-6 mb-12">
              <p className="text-body leading-relaxed text-white">
                Hi there! My name is Nurjahan Jhorna and I am a senior majoring at Web & Information Systems student at New Jersey Institute of Technology.
              </p>
              
              <p className="text-body leading-relaxed text-white">
                I'm passionate about crafting digital experiences that are intuitive, impactful, and centered around people. My curiosity for technology started with a simple question: <i>how can design and code work together to make life easier and more enjoyable?</i> Over time, that curiosity grew into a drive to design and build solutions that combine usability with creativity.
              </p>
              
              <p className="text-body leading-relaxed text-white">
                Throughout my academic journey, I've gained hands-on experience with front-end development such as HTML, CSS, JavaScript, and React, while also exploring UX design and research. I enjoy prototyping with Figma and translating ideas into responsive, accessible websites. For me, every project is more than just development; it's a chance to solve problems thoughtfully and bring clarity, beauty, and functionality to the web.
              </p>
              
              <p className="text-body leading-relaxed text-white">
                I'm a lifelong learner, always experimenting with new frameworks and exploring ways to design solutions that are practical and human-centered. Recently, I've begun integrating AI into my workflow to keep pace with industry shifts, boost efficiency, and spark innovation. Currently, I serve as a UX research assistant, contributing to a project that examines Generative AI and its environmental impacts.
              </p>
              
              <p className="text-body leading-relaxed text-white">
                Whether I'm coding, sketching, or testing with users, my goal remains simple: to create experiences that resonate, empower, and make a difference.
              </p>
            </div>
            
            {/* Personal Hobbies Section */}
            <div className="mt-24 mb-8">
              <h2 className="text-title md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent text-center mb-4" style={{
                textShadow: '0 0 15px rgba(147, 197, 253, 0.3), 0 0 30px rgba(147, 197, 253, 0.1)'
              }}>
                Life Outside Design & Code
              </h2>
              
              {/* Thin line separator */}
              <div className="w-[500px] h-[2px] bg-[#C33909] mx-auto mt-2 mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full mx-auto px-4">
                {/* Crochet */}
                <div className="rounded-xl py-6 px-4 transition-all duration-300">
                  <div className="flex flex-col items-start">
                    <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-lg mx-auto">
                      <Image 
                        src="/corchet.png" 
                        alt="Crochet hobby" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-subtitle font-semibold text-blue-300 mb-2 w-full text-center">Crochet</h3>
                    <p className="text-white text-left">I love bringing creativity to life with yarn, whether it's making cozy blankets or experimenting with intricate patterns and decorations. Crochet gives me a sense of calm while letting me design something tangible and meaningful.</p>
                  </div>
                </div>
                
                {/* Cross Stitch */}
                <div className="rounded-xl py-6 px-4 transition-all duration-300">
                  <div className="flex flex-col items-start">
                    <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-lg mx-auto">
                      <Image 
                        src="/cross-stitch.png" 
                        alt="Cross stitch hobby" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-subtitle font-semibold text-blue-300 mb-2 w-full text-center">Cross Stitch</h3>
                    <p className="text-white text-left">Cross stitch is one of my favorite creative outlets. It allows me to focus on the details and transform simple threads into colorful, patterned designs. It's both relaxing and rewarding to see each piece come together.</p>
                  </div>
                </div>
                
                {/* Games */}
                <div className="rounded-xl py-6 px-4 transition-all duration-300">
                  <div className="flex flex-col items-start">
                    <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-lg mx-auto">
                      <Image 
                        src="/games.png" 
                        alt="Gaming hobby" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-subtitle font-semibold text-blue-300 mb-2 w-full text-center">Games</h3>
                    <p className="text-white text-left">I enjoy exploring virtual worlds and taking on strategic challenges through video and board games. Gaming fuels my curiosity, sharpens my problem-solving skills, and inspires me to think creatively in new ways.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

