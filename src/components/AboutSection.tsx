
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <section id="about" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-portfolio-purple/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-portfolio-neon mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Creating digital solutions <br />that make an <span className="gradient-text">impact</span></h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-6">
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
          </div>
          
          <div className="space-y-6">
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
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl font-bold">My Expertise</h4>
            <p className="text-gray-400 mb-6">
              With a strong foundation in both <span className="text-portfolio-neon">frontend</span> and <span className="text-portfolio-purple">backend</span> development, 
              I deliver comprehensive solutions tailored to your specific needs.
            </p>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-gray-900/50 border border-gray-800 overflow-hidden card-hover">
                  <CardContent className="p-4">
                    <h5 className="text-lg font-medium text-white mb-2">{skillGroup.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
