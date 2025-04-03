
import React, { useEffect } from 'react';
import { Users, Award, TrendingUp, Target, FileCheck, HeartHandshake } from 'lucide-react';
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
            Your trusted partner in BPO services, IT & software placement, and comprehensive training solutions.
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
                At Arpina Solutions Pvt Ltd, we are committed to transforming business operations and fostering career growth in the digital era. Founded with a vision to provide innovative, reliable, and scalable solutions, we have evolved into a trusted partner for businesses across industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Specializing in Business Process Outsourcing (BPO), IT & Software Placement Consultancy, and IT & Software Training, we provide tailored solutions to meet the unique needs of businesses and professionals alike.
              </p>
              <p className="text-lg text-gray-600">
                Our journey is defined by our commitment to excellence, client satisfaction, and the continuous pursuit of innovation, making us a preferred choice for organizations looking to optimize their processes and individuals seeking to advance their careers.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl fade-in-section">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                alt="Business professionals collaborating" 
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
              <div className="flex items-center mb-6">
                <Target size={32} className="text-brand-600 mr-4" />
                <h3 className="text-2xl font-bold text-brand-600">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                Our mission is to empower organizations and individuals to achieve their full potential by providing exceptional BPO services, effective talent placement, and industry-aligned training solutions. We strive to be a catalyst for growth and success for our clients and candidates.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 fade-in-section">
              <div className="flex items-center mb-6">
                <FileCheck size={32} className="text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-purple-600">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                We envision a world where businesses are free to focus on innovation and growth, knowing they are supported by a trusted partner in Arpina Solutions. We aim to be the leading provider of integrated business solutions, recognized for our innovation, reliability, and commitment.
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
              We're proud of the difference we've made for businesses and professionals alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Years of Experience */}
            <div className="p-8 rounded-lg bg-brand-50 fade-in-section">
              <Award size={48} className="mx-auto mb-4 text-brand-600" />
              <div className="text-5xl font-bold text-gray-800 mb-2">10+</div>
              <div className="text-xl font-medium text-gray-600">Years of Experience</div>
            </div>

            {/* Clients Served */}
            <div className="p-8 rounded-lg bg-purple-50 fade-in-section">
              <Users size={48} className="mx-auto mb-4 text-purple-600" />
              <div className="text-5xl font-bold text-gray-800 mb-2">300+</div>
              <div className="text-xl font-medium text-gray-600">Businesses Served</div>
            </div>

            {/* Professionals Placed */}
            <div className="p-8 rounded-lg bg-teal-50 fade-in-section">
              <TrendingUp size={48} className="mx-auto mb-4 text-teal-600" />
              <div className="text-5xl font-bold text-gray-800 mb-2">1000+</div>
              <div className="text-xl font-medium text-gray-600">Professionals Placed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center fade-in-section">
              <HeartHandshake size={48} className="mx-auto mb-4 text-brand-600" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Client-First Philosophy</h3>
              <p className="text-gray-600">
                We build lasting relationships by delivering customized solutions that prioritize client needs and goals.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center fade-in-section">
              <Award size={48} className="mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Excellence & Quality</h3>
              <p className="text-gray-600">
                We adhere to stringent quality control protocols across all our services, ensuring consistent and superior results.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center fade-in-section">
              <FileCheck size={48} className="mx-auto mb-4 text-teal-600" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Innovation & Adaptability</h3>
              <p className="text-gray-600">
                We stay at the forefront of industry trends and technology advancements to offer solutions that keep you competitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
