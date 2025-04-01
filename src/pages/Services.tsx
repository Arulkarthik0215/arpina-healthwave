
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, DollarSign, BadgeCheck, Clock, Headset, Headphones, Users, MonitorSmartphone, Cloud, Lock, Code, Globe, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const bpoRef = useRef<HTMLDivElement>(null);
  const placementRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);

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
        if (location.hash === '#bpo' && bpoRef.current) {
          bpoRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (location.hash === '#placement' && placementRef.current) {
          placementRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (location.hash === '#training' && trainingRef.current) {
          trainingRef.current.scrollIntoView({ behavior: 'smooth' });
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
            Comprehensive solutions tailored to meet the needs of businesses and professionals alike.
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
              onClick={() => bpoRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Headset size={18} className="mr-2" />
              BPO Services
            </Button>
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
              onClick={() => placementRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users size={18} className="mr-2" />
              IT & Software Placement
            </Button>
            <Button 
              variant="ghost" 
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
              onClick={() => trainingRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <GraduationCap size={18} className="mr-2" />
              IT & Software Training
            </Button>
          </div>
        </div>
      </section>

      {/* BPO Services */}
      <section ref={bpoRef} id="bpo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-brand-50 rounded-full mr-4">
                  <Headset size={32} className="text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Business Process Outsourcing (BPO) Services</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Our BPO services are designed to streamline your workflow, reduce operational costs, and elevate customer satisfaction. 
                By entrusting us with your non-core processes, you can focus on what you do best—driving your business forward.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Headphones size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Customer Support Services</h4>
                    <p className="text-gray-600">Providing multi-channel, 24/7 customer service support to enhance client satisfaction and loyalty.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Data Entry and Management</h4>
                    <p className="text-gray-600">Accurate and timely data entry, cleansing, and management for improved decision-making.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Financial and Accounting Services</h4>
                    <p className="text-gray-600">Streamlining your accounting and bookkeeping tasks with efficiency and confidentiality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BadgeCheck size={24} className="text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Back-Office Support</h4>
                    <p className="text-gray-600">Managing essential tasks such as document management, data processing, and administrative assistance to enhance productivity.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-brand-600 hover:bg-brand-700" asChild>
                <Link to="/contact?service=bpo">Explore BPO Services</Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Customer service representatives at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IT & Software Placement */}
      <section ref={placementRef} id="placement" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="IT professionals in a meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2 fade-in-section">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-purple-50 rounded-full mr-4">
                  <Users size={32} className="text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">IT & Software Placement Consultancy</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Connecting talent with the right opportunities is what we do best. Our IT & software placement consultancy 
                is dedicated to sourcing, vetting, and matching skilled professionals with businesses in need of their expertise.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Users size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Talent Sourcing</h4>
                    <p className="text-gray-600">We utilize a rigorous selection process to identify and connect highly qualified candidates with leading organizations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Project-Specific Recruitment</h4>
                    <p className="text-gray-600">Identifying individuals with specialized skills to meet specific project requirements, ensuring a strong alignment with company goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BadgeCheck size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">End-to-End Placement Support</h4>
                    <p className="text-gray-600">From initial recruitment through onboarding, we support companies and candidates throughout the process, ensuring a seamless transition.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Long-Term Hiring Solutions</h4>
                    <p className="text-gray-600">Providing strategic consulting on building effective teams that drive growth and innovation.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/contact?service=placement">Find Top IT Talent</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IT & Software Training */}
      <section ref={trainingRef} id="training" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-teal-50 rounded-full mr-4">
                  <GraduationCap size={32} className="text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">IT & Software Training Programs</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                In today's competitive market, staying relevant requires continuous learning. Our training programs are crafted 
                by industry experts to provide real-world experience and cutting-edge skills in IT and software development.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Code size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Comprehensive IT Workshops</h4>
                    <p className="text-gray-600">Hands-on workshops covering topics such as software development, cybersecurity, cloud computing, and data science.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BadgeCheck size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Certification Programs</h4>
                    <p className="text-gray-600">Gain industry-recognized certifications in key technologies and methodologies, positioning yourself as a top candidate in your field.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Corporate Training Solutions</h4>
                    <p className="text-gray-600">Tailored training programs designed to meet the specific needs of your organization and team.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe size={24} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Job Placement Assistance</h4>
                    <p className="text-gray-600">Our trainees benefit from dedicated placement assistance, leveraging our network to find roles that match their skills and aspirations.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link to="/contact?service=training">Upgrade Your Skills</Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Training session with IT professionals" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-section">Ready to Transform Your Business or Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto fade-in-section">
            Contact us today to discuss how Arpina Solutions can help you streamline operations, 
            find the perfect talent, or acquire new skills to advance your career.
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
