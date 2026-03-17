import { MapPin, Phone, Mail, Instagram, Clock, Send, Check, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const eventTypes = [
  { value: '', label: 'Select event type' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'baby-shower', label: 'Baby Shower' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'proposal', label: 'Proposal' },
  { value: 'other', label: 'Other' },
];

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Sydney, Australia' },
  { icon: Phone, label: 'Phone', value: '+61 412 345 678' },
  { icon: Mail, label: 'Email', value: 'hello@designlovers.com.au' },
  { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9AM - 6PM' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
];

export default function Contact() {
  const location = useLocation();
  const passedState = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-fill form if coming from Packages section
  useEffect(() => {
    if (passedState?.message) {
      setFormData(prev => ({
        ...prev,
        message: passedState.message
      }));
    }
  }, [passedState]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', eventType: '', eventDate: '', message: '' });
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-dl-champagne py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee tracking-wide lg:tracking-wider">
              Get In Touch
            </h1>
            <p className="font-sans text-dl-coffee/70 mt-4 max-w-xl mx-auto">
              Ready to create something beautiful? We&apos;d love to hear about your event.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="bg-dl-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            {/* Left Column - Contact Info */}
            <ScrollReveal className="bg-dl-champagne py-16 px-8 md:px-12 lg:px-16 flex flex-col justify-center">
              <div className="max-w-md mx-auto lg:mx-0">
                <h2 className="font-serif text-4xl md:text-5xl text-dl-coffee mb-4 tracking-wide lg:tracking-wider">
                  Let&apos;s Create Together
                </h2>
                <p className="font-sans text-dl-coffee/70 mb-12 leading-relaxed">
                  Ready to bring your vision to life? We&apos;d love to hear about your upcoming celebration.
                </p>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-2 bg-white/50 rounded-sm">
                        <item.icon size={20} className="text-dl-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-1">{item.label}</p>
                        <p className="font-sans text-dl-coffee">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/50 text-dl-coffee hover:bg-dl-gold hover:text-white transition-all duration-300 rounded-sm"
                      >
                        <social.icon size={20} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Form */}
            <ScrollReveal delay={0.2} className="bg-white py-16 px-8 md:px-12 lg:px-16 flex flex-col justify-center">
              <div className="max-w-md mx-auto lg:mx-0 w-full">
                <h3 className="font-serif text-2xl md:text-3xl text-dl-coffee mb-2 tracking-wide">
                  Send an Inquiry
                </h3>
                <p className="font-sans text-sm text-dl-coffee/60 mb-10">
                  Fill in the details below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSuccess && (
                  <div className="mb-8 p-5 bg-green-50 border border-green-200 rounded-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                        <Check size={18} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-serif text-lg text-green-800 mb-1">Thank You!</p>
                        <p className="font-sans text-sm text-green-700">
                          We&apos;ve received your inquiry and will be in touch within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-0 border-b py-3 font-sans text-dl-coffee placeholder:text-dl-coffee/30 focus:outline-none focus:border-dl-gold transition-colors duration-300 ${errors.name ? 'border-red-400' : 'border-dl-coffee/20'}`}
                      placeholder="Jane Smith"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.name}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-0 border-b py-3 font-sans text-dl-coffee placeholder:text-dl-coffee/30 focus:outline-none focus:border-dl-gold transition-colors duration-300 ${errors.email ? 'border-red-400' : 'border-dl-coffee/20'}`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-0 border-b py-3 font-sans text-dl-coffee focus:outline-none focus:border-dl-gold transition-colors duration-300 cursor-pointer appearance-none ${errors.eventType ? 'border-red-400' : 'border-dl-coffee/20'} ${!formData.eventType && 'text-dl-coffee/40'}`}
                      >
                        {eventTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {errors.eventType && <p className="mt-2 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.eventType}</p>}
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-dl-coffee/20 py-3 font-sans text-dl-coffee focus:outline-none focus:border-dl-gold transition-colors duration-300 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2">Tell Us Your Vision</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-0 border-b border-dl-coffee/20 py-3 font-sans text-dl-coffee placeholder:text-dl-coffee/30 focus:outline-none focus:border-dl-gold transition-colors duration-300 resize-none"
                      placeholder="Share your ideas, inspiration, or any special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-12 py-4 flex items-center justify-center gap-3 hover:bg-dl-coffee disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                  >
                    {isLoading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={16} strokeWidth={1.5} />Send Inquiry</>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
