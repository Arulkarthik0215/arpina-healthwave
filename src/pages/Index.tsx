
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Headset, MonitorSmartphone } from 'lucide-react';
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Helping Healthcare Providers <br className="hidden md:block" />
            Maximize Revenue & Efficiency
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive medical informatics solutions designed to streamline operations, 
            improve patient care, and boost your bottom line.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to the unique needs of healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* RCM Billing Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 fade-in-section">
              <div className="p-4 bg-brand-50 rounded-full inline-block mb-6">
                <FileText size={32} className="text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">RCM Billing Services</h3>
              <p className="text-gray-600 mb-6">
                Maximize revenue, reduce denials, and improve collections with our comprehensive revenue cycle management solutions.
              </p>
              <Link to="/services#rcm" className="text-brand-600 font-medium flex items-center hover:text-brand-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Ancillary Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 fade-in-section">
              <div className="p-4 bg-purple-50 rounded-full inline-block mb-6">
                <Headset size={32} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ancillary Services</h3>
              <p className="text-gray-600 mb-6">
                24/7 front desk operations, remote assistance, and administrative support to reduce your operational burden.
              </p>
              <Link to="/services#ancillary" className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* IT Support */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 fade-in-section">
              <div className="p-4 bg-teal-50 rounded-full inline-block mb-6">
                <MonitorSmartphone size={32} className="text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">IT Support & Digital Solutions</h3>
              <p className="text-gray-600 mb-6">
                Cloud-based IT solutions, website development, and HIPAA-compliant technical support for your practice.
              </p>
              <Link to="/services#it-support" className="text-teal-600 font-medium flex items-center hover:text-teal-700 transition-colors">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Choose ARPINA SOLUTIONS?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine healthcare expertise with cutting-edge technology to deliver solutions that drive results for medical practices of all sizes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Cost-effective Solutions</h4>
                    <p className="text-gray-600">Reduce operational costs while maximizing revenue potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">24/7 Customer Support</h4>
                    <p className="text-gray-600">Our dedicated team is available around the clock to assist with any issues.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Industry Expertise</h4>
                    <p className="text-gray-600">Over 10 years of specialized experience in medical billing and healthcare IT.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Fully HIPAA-compliant Services</h4>
                    <p className="text-gray-600">Your data security and patient privacy are our top priorities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-2xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                alt="Healthcare professionals in a meeting" 
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
              Don't just take our word for it. Here's what healthcare providers like you have to say about ARPINA SOLUTIONS.
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
                "ARPINA SOLUTIONS transformed our revenue cycle management. Their team helped us increase collections by 30% and reduce denials by 25%. The ROI has been incredible."
              </p>
              <div>
                <p className="font-bold text-gray-800">Dr. Sarah Johnson</p>
                <p className="text-gray-500">Family Medicine Practice, Dallas</p>
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
                "Their 24/7 front desk support has been a game-changer for our practice. Patient satisfaction is up, and our staff can focus on clinical care instead of administrative tasks."
              </p>
              <div>
                <p className="font-bold text-gray-800">Dr. Michael Chen</p>
                <p className="text-gray-500">Cardiology Specialists, Houston</p>
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
                "The IT solutions from ARPINA have modernized our entire practice. Their HIPAA-compliant systems give us peace of mind, and their technical support is always responsive and helpful."
              </p>
              <div>
                <p className="font-bold text-gray-800">Lisa Rodriguez</p>
                <p className="text-gray-500">Practice Manager, Austin Medical Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section">Ready to Transform Your Healthcare Practice?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto fade-in-section">
            Contact us today to learn how ARPINA SOLUTIONS can help you streamline operations, 
            maximize revenue, and focus on what matters most—your patients.
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
