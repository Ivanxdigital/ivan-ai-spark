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

  // Background animation variants - increased opacity values
  const gradientVariants = {
    neon: {
      opacity: [0.1, 0.25, 0.1],
      scale: [1, 1.1, 1],
      x: [0, 20, 0],
      y: [0, -20, 0],
    },
    purple: {
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.15, 1],
      x: [0, -30, 0],
      y: [0, 20, 0],
    },
    blue: {
      opacity: [0.1, 0.2, 0.1],
      scale: [0.95, 1.05, 0.95],
      x: [0, 10, 0],
      y: [0, 10, 0],
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
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-10 bg-portfolio-dark">
      {/* Animated background gradients - enhanced size, opacity and blur */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={gradientVariants.neon}
        transition={gradientTransition}
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-portfolio-neon/20 rounded-full blur-[180px] z-0"
      />
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={gradientVariants.purple}
        transition={{
          ...gradientTransition,
          delay: 0.5, // Offset animation to create interesting patterns
        }}
        className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-portfolio-purple/25 rounded-full blur-[180px] z-0"
      />
      {/* Added blue gradient for additional cosmic effect */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={gradientVariants.blue}
        transition={{
          ...gradientTransition,
          delay: 1, // Further offset for layered effect
        }}
        className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[200px] z-0"
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
                  <span key={i} className="inline-flex items-center">
                    <motion.span
                      variants={textItem}
                      className={`inline-block ${word === "purpose" ? "gradient-text" : ""}`}
                    >
                      {word}
                    </motion.span>
                    {i !== headingWords.length - 1 && (
                      <span className="inline-block w-[0.3em]">&nbsp;</span>
                    )}
                  </span>
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
                {/* Profile image with gradient background */}
                <div className="w-5/6 h-5/6 rounded-full overflow-hidden relative">
                  {/* Gradient background behind the image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/40 to-portfolio-neon/40"></div>
                  {/* Actual profile image */}
                  <img 
                    src="/ivan-cutout.png" 
                    alt="Ivan's Profile" 
                    className="w-full h-full object-cover object-center relative z-10"
                  />
                  {/* Additional glow effect around the image */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-portfolio-purple/30 to-portfolio-neon/30 blur-md z-0"></div>
                </div>
              </div>
            </div>

            {/* Tech floating badges - replaced with Framer Motion animations */}
            <motion.div
              className="absolute top-[-10px] left-[-15px] sm:top-8 sm:left-[-60px] bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
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
              className="absolute bottom-[-10px] right-[-15px] sm:bottom-10 sm:right-[-60px] bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
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
              className="absolute top-1/2 right-[-25px] sm:right-[-40px] -translate-y-1/2 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
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

            {/* New Badges */}
            <motion.div
              className="absolute top-[-10px] right-[-15px] sm:top-8 sm:right-[-60px] bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, -8, 5, 0],
                x: [0, 6, -4, 0],
                rotate: [0, -2.5, 1.5, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{
                duration: 6.5,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.2
              }}
            >
              <p className="text-xs font-medium text-amber-400">Prompt Engineering</p>
            </motion.div>

            <motion.div
              className="absolute bottom-[-10px] left-[-15px] sm:bottom-10 sm:left-[-60px] bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, 10, -5, 0],
                x: [0, -5, 3, 0],
                rotate: [0, 1.8, -2.2, 0],
                scale: [1, 0.96, 1.04, 1]
              }}
              transition={{
                duration: 7.5,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 1],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.8
              }}
            >
              <p className="text-xs font-medium text-blue-500">TypeScript</p>
            </motion.div>

            <motion.div
              className="absolute top-[-30px] sm:top-[-40px] left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, -12, 0],
                x: [0, 0, 0],
                rotate: [0, 1, -1, 0],
                scale: [1, 1.06, 0.94, 1]
              }}
              transition={{
                duration: 5.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.4
              }}
            >
              <p className="text-xs font-medium text-teal-400">Tailwind</p>
            </motion.div>

            <motion.div
              className="absolute bottom-[-30px] sm:bottom-[-40px] left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, 15, -3, 0],
                x: [0, 2, -2, 0],
                rotate: [0, -2, 2.5, 0],
                scale: [1, 0.95, 1.01, 1]
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                times: [0, 0.35, 0.75, 1],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 1.2
              }}
            >
              <p className="text-xs font-medium text-rose-400">RAG</p>
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-[-25px] sm:left-[-40px] -translate-y-1/2 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
              animate={{
                y: [0, -6, 6, 0],
                x: [0, 8, -8, 0],
                rotate: [0, 3.5, -3, 0],
                scale: [1, 1.04, 0.99, 1]
              }}
              transition={{
                duration: 6.2,
                ease: "easeInOut",
                times: [0, 0.25, 0.7, 1],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.6
              }}
            >
              <p className="text-xs font-medium text-gray-400">shadcn/ui</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
