
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom-built, responsive websites that showcase your brand and drive customer engagement.',
      features: ['Modern, SEO-optimized websites', 'Responsive design', 'Fast performance', 'User-friendly CMS'],
      icon: '🌐'
    },
    {
      title: 'Web Applications',
      description: 'Scalable, feature-rich web applications that solve complex business problems.',
      features: ['Full-stack development', 'User authentication', 'Database integration', 'Admin dashboards'],
      icon: '⚡'
    },
    {
      title: 'RAG AI Chatbots',
      description: 'AI-powered chatbots that provide instant customer support and information retrieval.',
      features: ['Custom knowledge base', 'Context-aware responses', 'Seamless integration', '24/7 availability'],
      icon: '🤖'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-portfolio-dark to-black relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-portfolio-neon/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-portfolio-neon mb-2">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Solutions I <span className="gradient-text">Offer</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            I provide comprehensive web development services tailored to help businesses establish a strong online presence and leverage modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-900/50 border border-gray-800 overflow-hidden card-hover">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <span className="text-portfolio-neon mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-portfolio-neon hover:text-white hover:bg-portfolio-neon/10 px-0">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-portfolio-neon text-black hover:bg-portfolio-neon/90 button-glow px-8 py-6 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
