
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-10">
      {/* Background gradient effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-neon/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-portfolio-purple/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <p className="text-portfolio-neon font-medium mb-2">Hello, I'm Ivan</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crafting digital experiences with <span className="gradient-text">purpose</span>
              </h1>
              <p className="text-gray-400 text-lg mt-6 max-w-lg">
                A web developer from the Philippines specializing in modern web applications, responsive websites, and AI-powered solutions for local businesses.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-neon text-black hover:bg-portfolio-neon/90 button-glow text-base py-6 px-8">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-portfolio-neon text-portfolio-neon hover:bg-portfolio-neon/10 text-base py-6 px-8">
                Contact Me
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                  <span className="text-xs font-medium">TS</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-portfolio-neon/20 flex items-center justify-center">
                  <span className="text-xs font-medium">SB</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xs font-medium">AI</span>
                </div>
              </div>
              <span className="text-sm text-gray-400">Tech stack experienced</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-portfolio-purple/20 to-portfolio-neon/20 rounded-full p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center overflow-hidden">
                {/* Replace with actual photo */}
                <div className="w-5/6 h-5/6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <p className="text-9xl font-bold text-gray-800">I</p>
                </div>
              </div>
            </div>

            {/* Tech floating badges */}
            <div className="absolute top-10 -left-10 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 animate-float shadow-lg">
              <p className="text-xs font-medium text-portfolio-neon">NextJS</p>
            </div>
            <div className="absolute bottom-12 -right-8 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <p className="text-xs font-medium text-portfolio-purple">Supabase</p>
            </div>
            <div className="absolute top-1/2 right-0 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 animate-float shadow-lg" style={{ animationDelay: '2s' }}>
              <p className="text-xs font-medium text-blue-400">AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
