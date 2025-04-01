
import React, { useEffect } from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
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
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ARPINA SOLUTIONS</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in healthcare informatics, revenue cycle management, and IT solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, ARPINA SOLUTIONS was born from a simple observation: healthcare providers were spending too much time on administrative tasks and not enough time with patients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, Dr. Robert Arpina, experienced firsthand the challenges of managing a medical practice while trying to provide quality care. He assembled a team of healthcare and technology experts to create solutions that would allow medical professionals to focus on what they do best—healing patients.
              </p>
              <p className="text-lg text-gray-600">
                Today, ARPINA SOLUTIONS serves hundreds of healthcare providers across the United States, offering a comprehensive suite of services designed to optimize operations, maximize revenue, and enhance patient care.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1460672985063-6764ac8b9599?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                alt="Medical professionals in a meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in-section">
              <h3 className="text-2xl font-bold mb-4 text-brand-600">Our Mission</h3>
              <p className="text-gray-600">
                To empower healthcare providers with innovative solutions that streamline operations, enhance patient care, and maximize financial performance, allowing them to focus on their core mission of delivering exceptional healthcare services.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in-section">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of integrated healthcare informatics solutions, recognized for our innovation, reliability, and commitment to improving healthcare delivery and outcomes across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud of the difference we've made for healthcare providers and their patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Years of Experience */}
            <div className="p-8 rounded-lg bg-brand-50 fade-in-section">
              <Award size={48} className="mx-auto mb-4 text-brand-600" />
              <div className="text-5xl font-bold text-gray-800 mb-2">13+</div>
              <div className="text-xl font-medium text-gray-600">Years of Experience</div>
            </div>

            {/* Clients Served */}
            <div className="p-8 rounded-lg bg-purple-50 fade-in-section">
              <Users size={48} className="mx-auto mb-4 text-purple-600" />
              <div className="text-5xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-xl font-medium text-gray-600">Healthcare Providers Served</div>
            </div>

            {/* Revenue Generated */}
            <div className="p-8 rounded-lg bg-teal-50 fade-in-section">
              <TrendingUp size={48} className="mx-auto mb-4 text-teal-600" />
              <div className="text-5xl font-bold text-gray-800 mb-2">$100M+</div>
              <div className="text-xl font-medium text-gray-600">Revenue Generated for Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                alt="Dr. Robert Arpina" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Dr. Robert Arpina</h3>
                <p className="text-brand-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  Former practicing physician with over 20 years of experience in healthcare management and technology integration.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80" 
                alt="Sarah Martinez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Sarah Martinez</h3>
                <p className="text-purple-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Healthcare administrator with expertise in optimizing clinical workflows and revenue cycle management.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                alt="Michael Chang" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Michael Chang</h3>
                <p className="text-teal-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Former healthcare IT director with deep expertise in HIPAA-compliant systems and healthcare software integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
