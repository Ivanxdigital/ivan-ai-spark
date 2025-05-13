
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully-featured online store with product catalog, cart, and checkout functionality.',
      category: 'web-application',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
      image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
    },
    {
      title: 'Restaurant Website',
      description: 'Responsive website for a local restaurant featuring online ordering and reservations.',
      category: 'website',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      image: 'bg-gradient-to-br from-red-500/20 to-orange-500/20'
    },
    {
      title: 'AI Customer Service Bot',
      description: 'RAG-based chatbot that handles customer inquiries using a knowledge base.',
      category: 'ai-chatbot',
      technologies: ['OpenAI', 'Python', 'Next.js', 'Supabase'],
      image: 'bg-gradient-to-br from-green-500/20 to-teal-500/20'
    },
    {
      title: 'Real Estate Management',
      description: 'Property management platform for agents to list and manage properties.',
      category: 'web-application',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'bg-gradient-to-br from-yellow-500/20 to-amber-500/20'
    },
    {
      title: 'Personal Blog',
      description: 'Content-focused blog with a custom CMS and newsletter integration.',
      category: 'website',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      image: 'bg-gradient-to-br from-indigo-500/20 to-violet-500/20'
    },
    {
      title: 'Financial Advisor Bot',
      description: 'AI assistant that provides financial advice based on user questions.',
      category: 'ai-chatbot',
      technologies: ['OpenAI', 'Vector DB', 'React', 'Node.js'],
      image: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-portfolio-purple/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-portfolio-neon mb-2">Projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Recent <span className="gradient-text">Work</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            A selection of projects I've worked on, showcasing my skills and experience in web development and AI solutions.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto flex flex-wrap justify-center gap-3 mb-12 px-4">
          <Button 
            key="filter-all"
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={(e) => {
              e.preventDefault();
              setFilter('all');
            }}
            className={`text-xs sm:text-sm min-w-[80px] ${filter === 'all' ? 'bg-portfolio-neon text-black' : 'border-gray-700 text-gray-400 hover:text-white'}`}
          >
            All
          </Button>
          <Button 
            key="filter-website"
            variant={filter === 'website' ? 'default' : 'outline'} 
            onClick={(e) => {
              e.preventDefault();
              setFilter('website');
            }}
            className={`text-xs sm:text-sm min-w-[80px] ${filter === 'website' ? 'bg-portfolio-neon text-black' : 'border-gray-700 text-gray-400 hover:text-white'}`}
          >
            Websites
          </Button>
          <Button 
            key="filter-web-app"
            variant={filter === 'web-application' ? 'default' : 'outline'} 
            onClick={(e) => {
              e.preventDefault();
              setFilter('web-application');
            }}
            className={`text-xs sm:text-sm min-w-[80px] ${filter === 'web-application' ? 'bg-portfolio-neon text-black' : 'border-gray-700 text-gray-400 hover:text-white'}`}
          >
            Web Apps
          </Button>
          <Button 
            key="filter-ai-chatbot"
            variant={filter === 'ai-chatbot' ? 'default' : 'outline'} 
            onClick={(e) => {
              e.preventDefault();
              setFilter('ai-chatbot');
            }}
            className={`text-xs sm:text-sm min-w-[80px] ${filter === 'ai-chatbot' ? 'bg-portfolio-neon text-black' : 'border-gray-700 text-gray-400 hover:text-white'}`}
          >
            AI Chatbots
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border border-gray-800 overflow-hidden card-hover">
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-white/20">Project</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-portfolio-neon hover:text-white hover:bg-portfolio-neon/10 px-0">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="border border-portfolio-neon text-portfolio-neon hover:bg-portfolio-neon/10 px-8 py-6 text-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
