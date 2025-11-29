import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
    serviceType: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
        serviceType: 'consultation'
      });
    }, 2000);
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
      >
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-4">
          We've received your consultation request. Our team will contact you within 2 hours during business hours.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-6">
            Ready to protect your business or personal devices? Contact us for a free consultation 
            and discover how easy cybersecurity can be.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center">
            <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
              <Phone className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-400">1-800-AICYBSEC</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-400">hello@aicybsec.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
              <Clock className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold">Business Hours</h4>
              <p className="text-gray-400">Mon-Fri: 9AM-6PM EST</p>
              <p className="text-gray-400">Emergency: 24/7 Support</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-blue-500/10 rounded-lg p-3 mr-4">
              <MapPin className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400">Serving clients nationwide</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
          <h4 className="font-semibold mb-2">🔒 Free Security Consultation</h4>
          <p className="text-sm text-gray-400">
            Get a personalized security assessment and recommendations for your specific needs - completely free!
          </p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
      >
        <h3 className="text-2xl font-bold mb-6">Request Free Consultation</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">I am a:</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
            >
              <option value="">Select one</option>
              <option value="individual">Individual/Family</option>
              <option value="small-business">Small Business Owner</option>
              <option value="freelancer">Freelancer/Contractor</option>
              <option value="startup">Startup</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Service Interest</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
            >
              <option value="consultation">Free Consultation</option>
              <option value="personal">Personal Protection</option>
              <option value="business">Business Security</option>
              <option value="incident">Incident Response</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
              placeholder="Tell us about your security needs or any questions you have..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 disabled:scale-100 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Sending Request...
              </>
            ) : (
              'Send Free Consultation Request'
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            * We respect your privacy and will never share your information with third parties.
          </p>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;