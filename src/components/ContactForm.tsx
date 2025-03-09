import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: 'Our Locations',
      details: [
        'Hatiara, NewTown, Kolkata, 700157',
        'Katwa, Purba Bardhaman, 713130'
      ]
    },
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: 'Phone Numbers',
      details: [
        '+91 7001469907',
        '+91 9933837754'
      ]
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: 'Email Address',
      details: [
        'matrixofficial404@gmail.com'
      ]
    },
    {
      icon: <Clock size={24} className="text-primary-500" />,
      title: 'Working Hours',
      details: [
        'Mon - Fri: 9AM - 6PM',
        'Weekends: Closed'
      ]
    }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError(null);
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init({
        publicKey: 'beElc9pm5y3VaRpik', // Replace with your actual EmailJS public key
      });
      
      // Send the email using EmailJS
      const result = await emailjs.sendForm(
        'service_vcsuw1m', // Replace with your EmailJS service ID
        'template_rjto3ru', // Replace with your EmailJS template ID
        formRef.current as HTMLFormElement
      );
      
      if (result.status === 200) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary-800 font-heading"
          >
            Get In <span className="text-primary-600">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-secondary-600 max-w-2xl mx-auto"
          >
            Have a question or want to work together? Reach out to us and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center text-green-700"
                >
                  <CheckCircle size={24} className="mr-3 text-green-500" />
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="mb-4 bg-red-50 border border-red-200 rounded-md p-4 flex items-center text-red-700">
                      <AlertCircle size={24} className="mr-3 text-red-500" />
                      <p>{submitError}</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-secondary-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-secondary-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                        placeholder="+91 7001469907"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Telegram Bot">Telegram Bot Development</option>
                      <option value="Desktop Applications">Desktop Applications</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Social Marketing">Social Marketing</option>
                      <option value="Hardware & Networking">Hardware & Networking</option>
                      <option value="IPTV Services">IPTV Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-secondary-300'
                      }`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  {/* Hidden fields for additional information */}
                  <input type="hidden" name="to_email" value="matrixofficial404@gmail.com" />
                  <input type="hidden" name="subject" value={`New inquiry from ${formState.name} about ${formState.service || 'Matrix404 services'}`} />
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-secondary-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-secondary-500">{item.title}</h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-secondary-800">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-64 hover:shadow-lg transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0285706077!2d88.44553307596!3d22.58953483270204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sHatiara%2C%20Kolkata%2C%20West%20Bengal%20700157!5e0!3m2!1sen!2sin!4v1715175849844!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;