import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, type Transition } from 'framer-motion';

const HeroSection = () => {
  // Text animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  // Sentence animation variants
  const introVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: 1.5,
        ease: "easeOut",
      } 
    }
  };

  // Split heading into individual words for staggered animation
  const headingText = "Crafting digital experiences with purpose";
  const headingWords = headingText.split(" ");

  // Background animation variants
  const gradientVariants = {
    neon: {
      opacity: [0.05, 0.12, 0.05],
      scale: [1, 1.1, 1],
      x: [0, 20, 0],
      y: [0, -20, 0],
    },
    purple: {
      opacity: [0.05, 0.15, 0.05],
      scale: [1, 1.15, 1],
      x: [0, -30, 0],
      y: [0, 20, 0],
    }
  };

  const gradientTransition: Transition = {
    duration: 15,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
    times: [0, 0.5, 1],
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-10">
      {/* Animated background gradients */}
      <motion.div
        initial={{ opacity: 0.05 }}
        animate={gradientVariants.neon}
        transition={gradientTransition}
        className="absolute top-20 left-10 w-72 h-72 bg-portfolio-neon/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0.05 }}
        animate={gradientVariants.purple}
        transition={{
          ...gradientTransition,
          delay: 0.5, // Offset animation to create interesting patterns
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-portfolio-purple/10 rounded-full blur-[100px] -z-10"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={introVariant}
                className="text-portfolio-neon font-medium mb-2"
              >
                Hello, I'm Ivan 👋
              </motion.p>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial="hidden"
                animate="visible"
                variants={textContainer}
              >
                {headingWords.map((word, i) => (
                  <React.Fragment key={i}>
                    <motion.span
                      variants={textItem}
                      className={word === "purpose" ? "gradient-text" : ""}
                      style={{ display: "inline-block" }}
                    >
                      {word}
                    </motion.span>
                    {i !== headingWords.length - 1 && <span> </span>}
                  </React.Fragment>
                ))}
              </motion.h1>
              
              <motion.p
                initial="hidden"
                animate="visible"
                variants={paragraphVariant}
                className="text-gray-400 text-lg mt-6 max-w-lg"
              >
                A web developer from the Philippines specializing in modern web applications, responsive websites, and AI-powered solutions for local businesses.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-portfolio-neon text-black hover:bg-portfolio-neon/90 button-glow text-base py-6 px-8">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10 hover:border-portfolio-purple/80 hover:text-white transition-all duration-300 text-base py-6 px-8 relative group"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-portfolio-purple/5 blur-sm transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 rounded-md opacity-0 group-hover:opacity-30 bg-portfolio-purple blur-md transition-opacity duration-300"></div>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
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
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-portfolio-purple/20 to-portfolio-neon/20 rounded-full p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center overflow-hidden">
                {/* Replace with actual photo */}
                <div className="w-5/6 h-5/6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <p className="text-9xl font-bold text-gray-800">I</p>
                </div>
              </div>
            </div>

            {/* Tech floating badges - replaced with Framer Motion animations */}
            <motion.div 
              className="absolute top-10 -left-10 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                rotate: [0, 2, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatType: "mirror"
              }}
            >
              <p className="text-xs font-medium text-portfolio-neon">NextJS</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-12 -right-8 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, 12, 0],
                x: [0, -3, 0],
                rotate: [0, -1.5, 0],
                scale: [1, 0.97, 1]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.5
              }}
            >
              <p className="text-xs font-medium text-portfolio-purple">Supabase</p>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 right-0 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, 8, 0],
                x: [0, 4, 0],
                rotate: [0, 3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 7,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 1
              }}
            >
              <p className="text-xs font-medium text-blue-400">AI</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
