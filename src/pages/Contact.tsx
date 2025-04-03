
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Handle service selection from URL query parameters
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam,
      }));
    }

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

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-section">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="p-3 bg-brand-50 rounded-full mr-4">
                    <MapPin size={24} className="text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Our Office</h4>
                    <p className="text-gray-600">
                      1-7-139/25, SRK Nagar Rd,<br />
                      Musheerabad, Zamistanpur,<br />
                      Hyderabad, Telangana 500020
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brand-50 rounded-full mr-4">
                    <Phone size={24} className="text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+919940788562" className="hover:text-brand-600 transition-colors">
                        +91 99407 88562
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday - Friday: 9am - 6pm IST<br />
                      Saturday: 9am - 1pm IST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brand-50 rounded-full mr-4">
                    <Mail size={24} className="text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:admin@arpinasolutions.com" className="hover:text-brand-600 transition-colors">
                        admin@arpinasolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg h-80 fade-in-section">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.915033877696!2d78.4853974!3d17.414315799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a3def541d29%3A0x8858e24bfe936b36!2s1-7-139%2F25%2C%20SRK%20Nagar%20Rd%2C%20Musheerabad%2C%20Zamistanpur%2C%20Hyderabad%2C%20Telangana%20500020!5e0!3m2!1sen!2sin!4v1659572087291!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ARPINA SOLUTIONS Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 fade-in-section">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Smith" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="(123) 456-7890" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={handleServiceChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bpo">BPO Services</SelectItem>
                      <SelectItem value="placement">IT & Software Placement</SelectItem>
                      <SelectItem value="training">IT & Software Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us how we can help you..." 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-600 hover:bg-brand-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
