
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, DollarSign, BadgeCheck, Clock, Headset, Headphones, Users, MonitorSmartphone, Cloud, Lock, Code, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const rcmRef = useRef<HTMLDivElement>(null);
  const ancillaryRef = useRef<HTMLDivElement>(null);
  const itSupportRef = useRef<HTMLDivElement>(null);

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
    handleScroll(); // Trigger once on initial load

    // Handle hash navigation
    if (location.hash) {
      setTimeout(() => {
        if (location.hash === '#rcm' && rcmRef.current) {
          rcmRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (location.hash === '#ancillary' && ancillaryRef.current) {
          ancillaryRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (location.hash === '#it-support' && itSupportRef.current) {
          itSupportRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to optimize your practice's performance.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="ghost" 
              className="text-brand-600 hover:text-brand-700 hover:bg-brand-50"
              onClick={() => rcmRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText size={18} className="mr-2" />
              RCM Billing Services
            </Button>
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
              onClick={() => ancillaryRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Headset size={18} className="mr-2" />
              Ancillary Services
            </Button>
            <Button 
              variant="ghost" 
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
              onClick={() => itSupportRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MonitorSmartphone size={18} className="mr-2" />
              IT Support & Digital Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* RCM Billing Services */}
      <section ref={rcmRef} id="rcm" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-brand-50 rounded-full mr-4">
                  <FileText size={32} className="text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">RCM Billing Services</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Our Revenue Cycle Management (RCM) services are designed to maximize your practice's financial performance. 
                We handle the complex billing processes so you can focus on patient care.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <DollarSign size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Claim Processing & Submission</h4>
                    <p className="text-gray-600">Accurate, timely submission of claims to all major insurance payers with meticulous attention to detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BadgeCheck size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Coding & Documentation</h4>
                    <p className="text-gray-600">Expert coding services to ensure optimal reimbursement and compliance with current regulations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Payment Posting & Reconciliation</h4>
                    <p className="text-gray-600">Accurate posting of all payments with regular reconciliation to identify discrepancies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Denial Management</h4>
                    <p className="text-gray-600">Proactive identification, analysis, and resolution of claim denials to maximize reimbursement.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-brand-600 hover:bg-brand-700" asChild>
                <Link to="/contact?service=rcm">Request a Free RCM Assessment</Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Medical billing and coding workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ancillary Services */}
      <section ref={ancillaryRef} id="ancillary" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Customer service representative with headset" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2 fade-in-section">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-purple-50 rounded-full mr-4">
                  <Headset size={32} className="text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Ancillary Services</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Our ancillary services provide comprehensive administrative support to enhance your practice's operational efficiency. 
                Let us handle the administrative burden while you focus on patient care.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Headphones size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">24/7 Front Desk Operations</h4>
                    <p className="text-gray-600">Round-the-clock telephone answering, appointment scheduling, and patient communication.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Virtual Medical Assistants</h4>
                    <p className="text-gray-600">Trained professionals who handle pre-visit planning, patient follow-up, and medical records management.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Administrative Support</h4>
                    <p className="text-gray-600">Comprehensive back-office support including document management, referral coordination, and insurance verification.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Patient Engagement</h4>
                    <p className="text-gray-600">Appointment reminders, satisfaction surveys, and other patient communication services to improve engagement.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/contact?service=ancillary">Learn More About Ancillary Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IT Support & Digital Solutions */}
      <section ref={itSupportRef} id="it-support" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-teal-50 rounded-full mr-4">
                  <MonitorSmartphone size={32} className="text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">IT Support & Digital Solutions</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Our IT support and digital solutions help healthcare providers leverage technology to improve efficiency, 
                enhance patient experience, and ensure data security.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Cloud size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Cloud-Based IT Solutions</h4>
                    <p className="text-gray-600">Secure, scalable cloud infrastructure tailored to healthcare providers' unique needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Lock size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">HIPAA Compliance & Security</h4>
                    <p className="text-gray-600">Comprehensive security solutions to protect patient data and ensure regulatory compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Code size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Custom Software Development</h4>
                    <p className="text-gray-600">Tailored software solutions designed specifically for healthcare workflows and needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Website & Digital Marketing</h4>
                    <p className="text-gray-600">Professional website development and digital marketing strategies to grow your practice.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link to="/contact?service=it-support">Schedule an IT Consultation</Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="IT professional working on computer setup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section">Ready to Optimize Your Healthcare Practice?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto fade-in-section">
            Contact us today to discuss how our comprehensive services can help you improve efficiency, 
            increase revenue, and enhance patient satisfaction.
          </p>
          <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100 fade-in-section" asChild>
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
