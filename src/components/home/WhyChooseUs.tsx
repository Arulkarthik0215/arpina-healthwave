
import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
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
  );
};

export default WhyChooseUs;
