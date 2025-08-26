"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Send, BookOpen, MessageSquare, Compass, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      // Log form data to console (for now)
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a1128] text-slate-100">
      {/* Deep blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#1c2e4a] to-[#0a1128]"></div>
      
      {/* Stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Nebula effects */}
      <div 
        className="absolute rounded-full opacity-10 blur-2xl"
        style={{
          width: '300px',
          height: '300px',
          top: '30%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.3) 50%, rgba(29, 78, 216, 0) 100%)',
        }}
      ></div>
      
      <main className="container mx-auto max-w-5xl relative z-10 px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-900/30 backdrop-blur-sm rounded-full mb-4 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <MessageSquare className="h-6 w-6 text-blue-400" aria-hidden="true" />
          </div>
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 20px rgba(147, 197, 253, 0.3), 0 0 40px rgba(147, 197, 253, 0.1)'
            }}
          >
            Let's Connect
          </h1>
          <p className="text-xl text-blue-300 font-light max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            I'm available for collaboration on innovative web development and design projects. 
            Let's discuss how my expertise in frontend development and UX design can help transform your digital vision into an exceptional user experience.
          </p>
        </div>

        {/* Main Content - 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Methods Column */}
          <div className="order-2 lg:order-1">
            <Card className="bg-[rgba(10,17,40,0.7)] border-blue-500/20 backdrop-blur-sm shadow-lg hover:shadow-blue-500/5 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-blue-300 text-2xl">Connect With Me</CardTitle>
                <CardDescription className="text-slate-300">Choose your preferred method of contact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Link 
                    href="mailto:njahan@stevens.edu" 
                    className="flex items-center gap-3 p-3 bg-[rgba(10,17,40,0.5)] rounded-lg hover:bg-[rgba(10,17,40,0.6)] transition-all duration-300 group border border-blue-500/10 hover:border-blue-500/20"
                  >
                    <div className="p-2 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-300">Email</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="https://github.com/NurjahanJ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[rgba(10,17,40,0.5)] rounded-lg hover:bg-[rgba(10,17,40,0.6)] transition-all duration-300 group border border-blue-500/10 hover:border-blue-500/20"
                  >
                    <div className="p-2 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                      <Github className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-300">GitHub</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="https://linkedin.com/in/nurjahan-jahan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[rgba(10,17,40,0.5)] rounded-lg hover:bg-[rgba(10,17,40,0.6)] transition-all duration-300 group border border-blue-500/10 hover:border-blue-500/20"
                  >
                    <div className="p-2 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-300">LinkedIn</div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            <Card className="bg-[rgba(10,17,40,0.7)] border-blue-500/20 backdrop-blur-sm shadow-lg hover:shadow-blue-500/5 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-blue-300 text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-slate-300">I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[rgba(10,17,40,0.5)] border-blue-500/20 focus:border-blue-400/50 focus:ring-blue-400/20 text-slate-300 placeholder-slate-500"
                      aria-label="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[rgba(10,17,40,0.5)] border-blue-500/20 focus:border-blue-400/50 focus:ring-blue-400/20 text-slate-300 placeholder-slate-500"
                      aria-label="Your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-blue-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your thoughts or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-[rgba(10,17,40,0.5)] border-blue-500/20 focus:border-blue-400/50 focus:ring-blue-400/20 text-slate-300 placeholder-slate-500"
                      aria-label="Your message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full relative group overflow-hidden bg-transparent hover:bg-transparent text-white py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                    aria-label="Send message"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C33909] to-[#A62F07] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#A62F07] group-hover:to-[#C33909] transition-all duration-300"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C33909] to-[#8B2703] rounded-full blur-md group-hover:bg-gradient-to-r group-hover:from-[#8B2703] group-hover:to-[#C33909] group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
                    {isSubmitting ? (
                      <span className="flex items-center relative z-20">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center relative z-20" style={{ fontFamily: 'var(--font-lora)', fontWeight: 500 }}>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  
                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="p-4 bg-blue-900/30 border border-blue-500/30 text-blue-300 rounded-lg font-light backdrop-blur-sm">
                      Thank you for your message. I appreciate you taking the time to share your thoughts and will respond thoughtfully soon.
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitError && (
                    <div className="p-4 bg-red-900/30 border border-red-500/30 text-red-300 rounded-lg font-light backdrop-blur-sm">
                      {submitError}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Button */}
      </main>
    </div>
  );
}
