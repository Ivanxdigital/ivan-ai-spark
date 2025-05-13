import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Supabase', 'PostgreSQL', 'RESTful APIs', 'GraphQL'] 
    },
    { 
      category: 'AI & Tools', 
      items: ['RAG Chatbots', 'OpenAI', 'Embeddings', 'Vector Databases', 'Prompt Engineering'] 
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const columnVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (delay: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: delay * 0.2 // Stagger delay
      } 
    }),
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 0px 15px 0px rgba(172, 255, 0, 0.3)", // portfolio-neon glow
      transition: { duration: 0.3 }
    }
  };

  const tagContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const tagItemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Local cosmic accent elements */}
      <div className="absolute top-[20%] right-[10%] w-[1000px] h-[1000px] bg-portfolio-purple/20 rounded-full blur-[250px] -z-10 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[900px] h-[900px] bg-blue-600/15 rounded-full blur-[200px] -z-10 opacity-50 pointer-events-none"></div>
      <div className="absolute top-[40%] left-[40%] w-[800px] h-[800px] bg-portfolio-neon/10 rounded-full blur-[180px] -z-10 opacity-40 pointer-events-none"></div>
    
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-medium text-portfolio-neon mb-2">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Creating digital solutions <br />that make an <span className="gradient-text">impact</span></h3>
          </div>
          
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
            <motion.div 
              className="space-y-6"
              variants={columnVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={0} // Delay index 0
            >
              <h4 className="text-2xl font-bold">My Story</h4>
              <p className="text-gray-400">
                I'm Ivan, a <span className="text-white">26-year-old web developer</span> from the Philippines with a 
                passion for creating seamless digital experiences. With 5+ years in the industry, 
                I specialize in building modern web applications and AI-powered solutions for local businesses.
              </p>
              <p className="text-gray-400">
                I thrive at the intersection of <span className="text-portfolio-neon">creativity</span> and <span className="text-portfolio-purple">functionality</span>, 
                constantly seeking innovative ways to blend design and technology.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={columnVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={1} // Delay index 1
            >
              <h4 className="text-2xl font-bold">My Approach</h4>
              <p className="text-gray-400">
                I believe in building solutions that are not just visually appealing but also 
                <span className="text-white"> functional and user-centric</span>. My work process emphasizes:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-portfolio-neon text-xl mr-2">•</span>
                  <span>Clean, maintainable code architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-neon text-xl mr-2">•</span>
                  <span>Responsive, accessible design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-neon text-xl mr-2">•</span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-neon text-xl mr-2">•</span>
                  <span>Collaborative development process</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={columnVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={2} // Delay index 2
            >
              <h4 className="text-2xl font-bold">My Expertise</h4>
              <p className="text-gray-400 mb-6">
                With a strong foundation in both <span className="text-portfolio-neon">frontend</span> and <span className="text-portfolio-purple">backend</span> development, 
                I deliver comprehensive solutions tailored to your specific needs.
              </p>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    variants={cardHoverVariants}
                    whileHover="hover"
                  >
                    <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden">
                      <CardContent className="p-4">
                        <h5 className="text-lg font-medium text-white mb-2">{skillGroup.category}</h5>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          variants={tagContainerVariants}
                          initial="initial"
                          animate={isInView ? "animate" : "initial"}
                        >
                          {skillGroup.items.map((skill, idx) => (
                            <motion.span 
                              key={idx} 
                              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 cursor-default"
                              variants={tagItemVariants}
                              whileHover="hover"
                              custom={idx}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
