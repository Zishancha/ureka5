import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import heroBackground from '@/assets/hero-background-new.jpg';
const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(titleRef.current, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      });
      gsap.fromTo(subtitleRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });

      // Features animation
      gsap.fromTo(featuresRef.current?.children || [], {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);
  const features = [{
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'Streamline your business processes with cutting-edge AI technology that works 24/7.'
  }, {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security protocols ensure your data and customer information stays protected.'
  }, {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team of automation specialists ready to help you succeed every step of the way.'
  }, {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Join hundreds of businesses that have increased efficiency by 300% with our solutions.'
  }];
  return <div className="min-h-screen" ref={heroRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          loop 
          muted
          playsInline
        >
          <source src="/herov.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-primary/10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-poppins font-bold text-primary-foreground mb-6 leading-tight">
              Unlock <span className="gradient-text">AI-Powered Growth</span> with UREKA
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your business with intelligent automation, AI-driven solutions, and seamless integrations that drive real results.
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
              Why Choose UREKA?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in transforming businesses through intelligent automation and AI-powered solutions. 
              From website development to chatbot integration, we deliver enterprise-grade technology that scales with your growth.
            </p>
          </div>
          
          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={index} className="card-elevated p-6 text-center group hover:scale-105">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Join the automation revolution and discover how UREKA can help you achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Link to="/contact" className="inline-flex items-center gap-2 bg-background/20 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-medium text-lg hover:bg-background/30 hover:scale-105 transition-all duration-300">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-2">
              <h3 className="text-2xl font-poppins font-bold mb-4">UREKA</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with AI-powered automation solutions that drive growth, efficiency, and innovation.
              </p>
              
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-poppins font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>urekaofficial04@gmail.com</p>
                <p>+91 9161661358</p>
                <p>Everything Online</p>
                <p>Mon-Fri, 9AM-6PM PST</p>
              </div>
            </div>
          </div>

          
        </div>
      </footer>
    </div>;
};
export default Index;