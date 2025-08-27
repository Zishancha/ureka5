import { Award, Users, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
const About = () => {
  const achievements = [{
    icon: Users,
    number: '500+',
    label: 'Businesses Transformed'
  }, {
    icon: Clock,
    number: '5+',
    label: 'Years of Experience'
  }, {
    icon: Target,
    number: '300%',
    label: 'Average Efficiency Increase'
  }, {
    icon: Award,
    number: '99.9%',
    label: 'Client Satisfaction Rate'
  }];
  const values = [{
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
  }, {
    title: 'Reliability',
    description: 'Our robust systems and dedicated support ensure your business operations run smoothly 24/7 without interruption.'
  }, {
    title: 'Transparency',
    description: 'Clear communication, honest pricing, and regular updates keep you informed throughout every project milestone.'
  }, {
    title: 'Results-Driven',
    description: 'Every solution we implement is designed to deliver measurable ROI and tangible business growth outcomes.'
  }];
  return <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            About <span className="gradient-text">UREKA</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are pioneers in business automation, dedicated to empowering companies with 
            intelligent AI solutions that drive growth, efficiency, and innovation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At UREKA, we believe that every business deserves access to enterprise-level automation 
              technology. Our mission is to democratize AI-powered solutions, making them accessible 
              and affordable for businesses of all sizes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded on the principle that technology should work for you, not against you, we've 
              dedicated ourselves to creating intuitive, powerful automation tools that seamlessly 
              integrate into your existing workflows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced developers, AI specialists, and business strategists work 
              tirelessly to ensure that every solution we deliver not only meets but exceeds 
              your expectations for performance, reliability, and ROI.
            </p>
          </div>
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
              Why We Started UREKA
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After witnessing countless businesses struggle with manual processes and inefficient 
              systems, our founders recognized the urgent need for accessible automation solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              UREKA was born from the desire to bridge the gap between complex enterprise technology 
              and practical business needs, creating solutions that are both powerful and user-friendly.
            </p>
          </div>
        </div>

        {/* Achievements */}
        

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-poppins font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => <div key={index} className="card-elevated p-6">
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>

        {/* Client Success */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-poppins font-bold text-primary-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From small startups to enterprise corporations, our clients consistently report 
            significant improvements in efficiency, customer satisfaction, and revenue growth 
            after implementing our automation solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary-foreground mb-2">50% Reduction</div>
              <div className="text-primary-foreground/80">in Customer Response Time</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary-foreground mb-2">200% Increase</div>
              <div className="text-primary-foreground/80">in Lead Conversion</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-primary-foreground mb-2">75% Savings</div>
              <div className="text-primary-foreground/80">in Operational Costs</div>
            </div>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-surface hover:scale-105 transition-all duration-300 shadow-lg">
            Join Our Success Stories
          </Link>
        </div>
      </div>
    </div>;
};
export default About;