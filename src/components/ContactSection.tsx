
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would be replaced with actual form submission logic
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-portfolio-neon/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-portfolio-neon mb-2">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Let's <span className="gradient-text">Connect</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Have a project in mind or want to learn more about my services? 
            I'd love to hear from you. Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden">
            <CardContent className="p-6">
              <h4 className="text-2xl font-bold mb-4">Send Me a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="bg-gray-800 border-gray-700 focus:border-portfolio-neon"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-gray-800 border-gray-700 focus:border-portfolio-neon"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    className="bg-gray-800 border-gray-700 focus:border-portfolio-neon min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-portfolio-neon text-black hover:bg-portfolio-neon/90 button-glow"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Contact Information</h4>
              <p className="text-gray-400">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-neon/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-portfolio-neon">📩</span>
                </div>
                <div>
                  <h5 className="text-lg font-medium">Email</h5>
                  <p className="text-gray-400">ivanxdigital@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-neon/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-portfolio-neon">📱</span>
                </div>
                <div>
                  <h5 className="text-lg font-medium">Phone</h5>
                  <p className="text-gray-400">+63 9993702550</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-portfolio-neon/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-portfolio-neon">📍</span>
                </div>
                <div>
                  <h5 className="text-lg font-medium">Location</h5>
                  <p className="text-gray-400">Palawan, Philippines</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-portfolio-neon/20 flex items-center justify-center transition-colors">
                  <span className="text-gray-300 hover:text-portfolio-neon">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-portfolio-neon/20 flex items-center justify-center transition-colors">
                  <span className="text-gray-300 hover:text-portfolio-neon">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-portfolio-neon/20 flex items-center justify-center transition-colors">
                  <span className="text-gray-300 hover:text-portfolio-neon">𝐆</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-portfolio-neon/20 flex items-center justify-center transition-colors">
                  <span className="text-gray-300 hover:text-portfolio-neon">𝕚</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
