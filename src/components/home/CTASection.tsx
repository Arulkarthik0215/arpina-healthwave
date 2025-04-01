
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
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
  );
};

export default CTASection;
