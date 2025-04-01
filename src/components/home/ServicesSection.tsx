
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headset, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection: React.FC = () => {
  return (
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
  );
};

export default ServicesSection;
