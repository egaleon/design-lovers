import { MapPin, Phone, Mail, Instagram, Clock, Send, Check, AlertCircle, Users, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const eventTypes = [
  { value: '', label: 'Select event type' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'engagement', label: 'Engagement Party' },
  { value: 'proposal', label: 'Proposal Setup' },
  { value: 'birthday', label: 'Birthday Celebration' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'baby-shower', label: 'Baby Shower' },
  { value: 'baptism', label: 'Baptism / Christening' },
  { value: 'gender-reveal', label: 'Gender Reveal' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'picnic', label: 'Luxury Picnic' },
  { value: 'religious', label: 'Religious Celebration' },
  { value: 'other', label: 'Other' },
];

const servicePackages = [
  { value: '', label: 'Interested in a package? (Optional)' },
  { value: 'essential', label: 'Essential Package ($1,200)' },
  { value: 'signature', label: 'Signature Package ($2,800)' },
  { value: 'luxury', label: 'Luxury Package ($5,500+)' },
  { value: 'gifts', label: 'Gift Collection' },
  { value: 'custom', label: 'Custom Styling' },
];

const guestCountOptions = [
  { value: '', label: 'Select range' },
  { value: '1-10', label: '1 - 10 guests' },
  { value: '11-20', label: '11 - 20 guests' },
  { value: '21-50', label: '21 - 50 guests' },
  { value: '51-100', label: '51 - 100 guests' },
  { value: '100+', label: '100+ guests' },
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
  const isFromPackage = passedState?.subject?.includes('Package');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    servicePackage: '',
    eventDate: '',
    guestCount: '',
    message: passedState?.message || '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    setFormData({ 
      name: '', 
      email: '', 
      phone: '',
      eventType: '', 
      servicePackage: '',
      eventDate: '',
      guestCount: '',
      message: '' 
    });
    setTimeout(() => setIsSuccess(false), 8000);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-dl-champagne py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-dl-gold mb-4">
              {isFromPackage ? 'Quote Request' : 'Contact Us'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee tracking-wide lg:tracking-wider">
              {isFromPackage ? 'Request Your Quote' : 'Get In Touch'}
            </h1>
            <p className="font-sans text-dl-coffee/70 mt-4 max-w-xl mx-auto">
              {isFromPackage 
                ? 'Tell us about your event and we will prepare a personalized proposal for you.'
                : 'Ready to create something beautiful? We would love to hear about your event.'
              }
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="bg-dl-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
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
                  {isFromPackage ? 'Tell Us About Your Event' : 'Send an Inquiry'}
                </h3>
                <p className="font-sans text-sm text-dl-coffee/60 mb-10">
                  {isFromPackage 
                    ? 'Provide the details below and we will send you a tailored quote within 24 hours.'
                    : 'Fill in the details below and we will get back to you within 24 hours.'
                  }
                </p>

                {isSuccess && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                        <Check size={18} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-serif text-lg text-green-800 mb-1">Thank you!</p>
                        <p className="font-sans text-sm text-green-700 leading-relaxed">
                          We have received your inquiry and will provide a personalized proposal within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
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

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-dl-coffee/20 py-3 font-sans text-dl-coffee placeholder:text-dl-coffee/30 focus:outline-none focus:border-dl-gold transition-colors duration-300"
                        placeholder="+61 400 000 000"
                      />
                    </div>
                  </div>

                  {/* Event Type & Service Package Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2">Interested Package</label>
                      <select
                        name="servicePackage"
                        value={formData.servicePackage}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-0 border-b py-3 font-sans text-dl-coffee focus:outline-none focus:border-dl-gold transition-colors duration-300 cursor-pointer appearance-none border-dl-coffee/20 ${!formData.servicePackage && 'text-dl-coffee/40'}`}
                      >
                        {servicePackages.map((pkg) => (
                          <option key={pkg.value} value={pkg.value}>{pkg.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Event Date & Guest Count Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2 flex items-center gap-2">
                        <Calendar size={14} className="text-dl-gold" />
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-dl-coffee/20 py-3 font-sans text-dl-coffee focus:outline-none focus:border-dl-gold transition-colors duration-300 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-dl-coffee/60 mb-2 flex items-center gap-2">
                        <Users size={14} className="text-dl-gold" />
                        Guest Count
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-0 border-b py-3 font-sans text-dl-coffee focus:outline-none focus:border-dl-gold transition-colors duration-300 cursor-pointer appearance-none border-dl-coffee/20 ${!formData.guestCount && 'text-dl-coffee/40'}`}
                      >
                        {guestCountOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-12 py-4 flex items-center justify-center gap-3 hover:bg-dl-coffee disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 mt-8"
                  >
                    {isLoading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={16} strokeWidth={1.5} />{isFromPackage ? 'Request Quote' : 'Send Inquiry'}</>
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
