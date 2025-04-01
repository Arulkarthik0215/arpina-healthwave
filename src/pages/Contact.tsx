
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
                      123 Healthcare Avenue<br />
                      Medical District<br />
                      Dallas, TX 75001
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
                      <a href="tel:+1234567890" className="hover:text-brand-600 transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday - Friday: 8am - 8pm EST<br />
                      Weekend Support: 9am - 5pm EST
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
                      <a href="mailto:info@arpinasolutions.com" className="hover:text-brand-600 transition-colors">
                        info@arpinasolutions.com
                      </a>
                    </p>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:support@arpinasolutions.com" className="hover:text-brand-600 transition-colors">
                        support@arpinasolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg h-80 fade-in-section">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107172.54584123519!2d-96.87271221249996!3d32.78617999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9917fb3089a9%3A0x52d4c8aad0e7ab82!2sMedical%20District%2C%20Dallas%2C%20TX!5e0!3m2!1sen!2sus!4v1653915290957!5m2!1sen!2sus" 
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
                      <SelectItem value="rcm">RCM Billing Services</SelectItem>
                      <SelectItem value="ancillary">Ancillary Services</SelectItem>
                      <SelectItem value="it-support">IT Support & Digital Solutions</SelectItem>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 fade-in-section">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How quickly can you implement your services?</h3>
              <p className="text-gray-600">
                Most of our services can be implemented within 2-4 weeks, depending on the complexity and scope of your needs. Our team works diligently to ensure a smooth and efficient transition.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in-section">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Are your services HIPAA compliant?</h3>
              <p className="text-gray-600">
                Yes, all of our services are fully HIPAA compliant. We implement robust security measures and protocols to ensure the protection of sensitive healthcare data.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in-section">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you offer customized solutions?</h3>
              <p className="text-gray-600">
                Absolutely! We understand that every healthcare practice is unique. Our team works closely with you to understand your specific needs and tailors our solutions accordingly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in-section">
              <h3 className="text-xl font-bold mb-3 text-gray-800">What size practices do you work with?</h3>
              <p className="text-gray-600">
                We work with healthcare practices of all sizes, from solo practitioners to large multi-specialty groups. Our scalable solutions can be adapted to meet the needs of any practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
