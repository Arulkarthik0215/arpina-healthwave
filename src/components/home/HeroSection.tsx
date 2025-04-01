
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;
