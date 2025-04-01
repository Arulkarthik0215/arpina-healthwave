
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Headset, Users, Laptop, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-brand-700 via-brand-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Redefining Excellence in BPO, <br className="hidden md:block" />
            IT Placement, and Training
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforming business operations and fostering career growth in the digital era with innovative, 
            reliable, and scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100" asChild>
              <Link to="/contact">Let's Talk</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight size={24} className="rotate-90" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the needs of businesses and professionals alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BPO Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 fade-in-section">
              <div className="p-4 bg-brand-50 rounded-full inline-block mb-6">
                <Headset size={32} className="text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">BPO Services</h3>
              <p className="text-gray-600 mb-6">
                Streamline your workflow, reduce operational costs, and elevate customer satisfaction with our comprehensive BPO services.
              </p>
              <Link to="/services#bpo" className="text-brand-600 font-medium flex items-center hover:text-brand-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* IT & Software Placement */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 fade-in-section">
              <div className="p-4 bg-purple-50 rounded-full inline-block mb-6">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">IT & Software Placement</h3>
              <p className="text-gray-600 mb-6">
                Connecting talent with the right opportunities. We source, vet, and match skilled professionals with businesses in need.
              </p>
              <Link to="/services#placement" className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* IT & Software Training */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 fade-in-section">
              <div className="p-4 bg-teal-50 rounded-full inline-block mb-6">
                <GraduationCap size={32} className="text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">IT & Software Training</h3>
              <p className="text-gray-600 mb-6">
                Industry-expert crafted programs providing real-world experience and cutting-edge skills for all career stages.
              </p>
              <Link to="/services#training" className="text-teal-600 font-medium flex items-center hover:text-teal-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12 fade-in-section">
            <Button size="lg" asChild className="bg-brand-600 hover:bg-brand-700">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Choose Arpina Solutions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience, we bring a wealth of industry knowledge and a proven track record in BPO services, talent placement, and IT training.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Proven Expertise</h4>
                    <p className="text-gray-600">Over a decade of experience with a proven track record in all our service areas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Quality-Centric Approach</h4>
                    <p className="text-gray-600">Stringent quality control protocols ensuring consistent and superior results.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Client-First Philosophy</h4>
                    <p className="text-gray-600">Building lasting relationships by delivering customized solutions that prioritize your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Innovative & Adaptive Solutions</h4>
                    <p className="text-gray-600">Staying at the forefront of industry trends to keep you competitive.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-2xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                alt="Business professionals in a meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about Arpina Solutions Pvt Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in-section">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Arpina Solutions transformed our customer support operations. Their BPO team helped us improve response times by 45% and increased our customer satisfaction scores significantly."
              </p>
              <div>
                <p className="font-bold text-gray-800">Rajesh Kumar</p>
                <p className="text-gray-500">CEO, Tech Innovations Pvt Ltd</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in-section">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Their IT placement services are exceptional. They understood our specific needs and connected us with top-tier professionals who have become integral to our development team."
              </p>
              <div>
                <p className="font-bold text-gray-800">Priya Sharma</p>
                <p className="text-gray-500">HR Director, NextGen Solutions</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in-section">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The training program at Arpina Solutions gave me the skills and confidence I needed to launch my career in software development. Their placement assistance helped me land my dream job."
              </p>
              <div>
                <p className="font-bold text-gray-800">Amit Patel</p>
                <p className="text-gray-500">Software Developer, Cloud Systems Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section">Ready to Transform Your Business or Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto fade-in-section">
            Contact us today to learn how Arpina Solutions can help you streamline operations, 
            find the perfect talent, or acquire new skills to advance your career.
          </p>
          <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100 fade-in-section" asChild>
            <Link to="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
