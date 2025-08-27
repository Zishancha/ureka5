import { Globe, MessageSquare, Phone, Mail, Share2, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development & Management',
      description: 'Custom, responsive websites built with modern technologies. We handle everything from design to deployment, ongoing maintenance, and performance optimization for maximum conversion rates.'
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Integration',
      description: 'Intelligent AI chatbots that handle customer inquiries 24/7. Seamlessly integrate with your existing systems to provide instant support, lead qualification, and customer engagement.'
    },
    {
      icon: Phone,
      title: 'AI-Powered Calling Systems',
      description: 'Automated voice systems that handle customer calls, appointment scheduling, and follow-ups. Reduce overhead while improving customer experience with natural language processing.'
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Smart email campaigns that nurture leads, retain customers, and drive conversions. Personalized messaging based on user behavior and preferences for maximum engagement.'
    },
    {
      icon: Share2,
      title: 'WhatsApp Messaging Automation',
      description: 'Automated WhatsApp marketing and customer service workflows. Send targeted messages, handle customer inquiries, and create seamless communication experiences.'
    },
    {
      icon: Bot,
      title: 'Meta Ads Automation',
      description: 'AI-optimized Facebook and Instagram advertising campaigns. Automatic bid management, audience targeting, and creative optimization to maximize your return on ad spend.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive automation solutions designed to streamline your business operations, 
            enhance customer experience, and drive sustainable growth through cutting-edge AI technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-elevated p-8 group hover:scale-105">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-surface rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
              Our Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-poppins font-semibold text-foreground mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">We analyze your business needs and identify automation opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-poppins font-semibold text-foreground mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">Custom development and seamless integration with your existing systems</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-poppins font-semibold text-foreground mb-2">Optimization</h3>
                <p className="text-sm text-muted-foreground">Continuous monitoring and improvement for maximum performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our automation solutions can transform your business operations and drive measurable results.
          </p>
          <Link 
            to="/contact" 
            className="btn-hero inline-flex items-center gap-2"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;