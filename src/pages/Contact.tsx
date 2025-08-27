import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          full_name: formData.name,
          email: formData.email,
          message: formData.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you! Your message has been sent. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "There was an error while saving your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'urekaofficial04@gmail.com',
href: 'mailto:urekaofficial04@gmail.com'
  }, {
    icon: Phone,
    label: 'Phone',
    value: '+91 9161661358',
    href: 'tel:+15551234567'
  }, {
    icon: MapPin,
    label: 'Office',
    value: 'Everything Online',
    href: null
  }, {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri, 9AM-6PM PST',
    href: null
  }];
  return <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your business with AI-powered automation? 
            We'd love to hear about your challenges and discuss how UREKA can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-elevated p-8">
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background" placeholder="Enter your full name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background" placeholder="Enter your email address" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background resize-vertical" placeholder="Tell us about your project, goals, or any questions you have..." />
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full btn-hero flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                    Sending...
                  </> : <>
                    Send Message
                    <Send size={20} />
                  </>}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        {info.label}
                      </div>
                      {info.href ? <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                          {info.value}
                        </a> : <div className="text-muted-foreground">
                          {info.value}
                        </div>}
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-surface rounded-lg p-6">
              <h3 className="font-poppins font-semibold text-foreground mb-4">
                What to Expect
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Initial response within 2-4 hours during business hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed consultation call scheduled within 24 hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom proposal delivered within 3-5 business days</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;