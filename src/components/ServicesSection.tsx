import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  // State to track visibility of elements
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [areCardsVisible, setAreCardsVisible] = useState([false, false, false]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  
  // Refs for elements to observe
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null, // use viewport
      rootMargin: '0px',
      threshold: 0.2, // 20% visibility triggers callback
    };
    
    // Callback for section visibility
    const sectionCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          
          // Staggered animations timing
          setTimeout(() => setIsHeaderVisible(true), 200);
          
          // Cards with staggered timing
          setTimeout(() => {
            setAreCardsVisible(prev => [true, prev[1], prev[2]]);
          }, 700);
          
          setTimeout(() => {
            setAreCardsVisible(prev => [prev[0], true, prev[2]]);
          }, 900);
          
          setTimeout(() => {
            setAreCardsVisible(prev => [prev[0], prev[1], true]);
          }, 1100);
          
          // Button appears last
          setTimeout(() => {
            setIsButtonVisible(true);
          }, 1300);
        }
      });
    };
    
    // Create observers
    const sectionObserver = new IntersectionObserver(sectionCallback, observerOptions);
    
    // Observe elements
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    // Cleanup
    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      sectionObserver.disconnect();
    };
  }, []);
  
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
    <>
      {/* Local cosmic accent elements */}
      <div className="absolute top-[0] left-[50%] translate-x-[-50%] w-[1200px] h-[1200px] bg-portfolio-purple/10 rounded-full blur-[250px] -z-10 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[0] left-[30%] w-[1000px] h-[1000px] bg-portfolio-neon/10 rounded-full blur-[200px] -z-10 opacity-60 pointer-events-none"></div>
      
      <section id="services" className="py-20 relative z-10" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 transform ${
              isHeaderVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl font-medium text-portfolio-neon mb-2">Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Solutions I <span className="gradient-text">Offer</span></h3>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              I provide comprehensive web development services tailored to help businesses establish a strong online presence and leverage modern technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`transition-all duration-700 transform ${
                  areCardsVisible[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${
                  index === 0 
                    ? areCardsVisible[index] 
                      ? 'translate-x-0 rotate-0' 
                      : '-translate-x-full -rotate-2'
                    : index === 1
                    ? areCardsVisible[index]
                      ? 'translate-y-0' 
                      : 'translate-y-16'
                    : areCardsVisible[index]
                      ? 'translate-x-0 rotate-0' 
                      : 'translate-x-full rotate-2'
                }`}
              >
                <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden card-hover h-full">
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
              </div>
            ))}
          </div>

          <div 
            ref={buttonRef}
            className={`mt-16 text-center transition-all duration-700 transform ${
              isButtonVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Button className="bg-portfolio-neon text-black hover:bg-portfolio-neon/90 button-glow px-8 py-6 text-lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
