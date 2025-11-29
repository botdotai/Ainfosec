import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Users,
  Globe,
  Activity,
  Database,
  Server,
  Award,
  Star,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// Import new components
import ContactForm from "./ContactForm";
import PricingSection from "./PricingSection";
import BlogPreview from "./BlogPreview";

const CybersecurityLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const services = [
    {
      icon: Shield,
      title: "Personal & Business Protection",
      description: "AI-powered cybersecurity solutions tailored for small businesses and individuals to keep you safe online.",
      features: ["Real-time protection", "Easy setup", "Affordable pricing", "24/7 support"]
    },
    {
      icon: Lock,
      title: "Password & Identity Security",
      description: "Secure your accounts and personal information with advanced password management and identity protection.",
      features: ["Password management", "Identity monitoring", "Two-factor authentication", "Secure login"]
    },
    {
      icon: Eye,
      title: "Email & Web Security",
      description: "Protect yourself from phishing, malware, and suspicious websites with intelligent email and web filtering.",
      features: ["Email protection", "Safe browsing", "Phishing detection", "Malware blocking"]
    },
    {
      icon: Zap,
      title: "Incident Response & Recovery",
      description: "Quick response and recovery services when security incidents occur, minimizing impact and restoring safety.",
      features: ["Immediate response", "Data recovery", "System restoration", "Prevention planning"]
    },
    {
      icon: Database,
      title: "Data Backup & Recovery",
      description: "Secure your important files and data with automated backup solutions and easy recovery options.",
      features: ["Automated backups", "Cloud storage", "Easy recovery", "File encryption"]
    },
    {
      icon: Server,
      title: "Small Business IT Security",
      description: "Comprehensive IT security solutions designed specifically for small businesses and startups.",
      features: ["Network security", "Employee training", "Security policies", "Compliance help"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Lopez",
      role: "Small Business Owner, Local Cafe",
      content: "AICybSec helped protect my cafe's customer data and payment systems. Great support and easy to understand!",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Freelance Designer",
      content: "As a freelancer, I needed affordable protection. AICybSec keeps my work and client data safe without breaking the bank.",
      rating: 5
    },
    {
      name: "Jennifer Wilson",
      role: "Family & Home Office",
      content: "Finally, cybersecurity that's easy to use! AICybSec protects our family's devices and online activities perfectly.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is AICybSec suitable for small businesses and individuals?",
      answer: "Absolutely! AICybSec is specifically designed for small businesses and individuals who need professional cybersecurity without the complexity or cost of enterprise solutions. Our AI-powered protection is easy to set up and manage."
    },
    {
      question: "How much does your cybersecurity protection cost?",
      answer: "We offer affordable plans starting from just $9.99/month for individuals and $29.99/month for small businesses. All plans include 24/7 support, real-time protection, and free consultations to help you stay secure."
    },
    {
      question: "How quickly can I get protected?",
      answer: "You can be protected in just 5 minutes! Our AI-powered setup automatically configures your protection, and our support team is available 24/7 to help you get started with a free consultation."
    },
    {
      question: "Do you provide support for non-technical users?",
      answer: "Yes! We specialize in making cybersecurity simple for everyone. Our friendly support team explains everything in plain English, and our AI handles the technical details automatically."
    },
    {
      question: "What happens if I get hacked or have a security incident?",
      answer: "Don't worry! Our incident response team provides immediate support to help you recover quickly. We'll guide you through the recovery process and help prevent future incidents - all included in your plan."
    }
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Protection & Support" },
    { number: "5min", label: "Quick Setup Time" },
    { number: "1000+", label: "Protected Users" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-xl font-bold">AICybSec</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="hidden md:flex">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors">
                Get Free Consultation
              </button>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">Services</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-white">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
              <button className="w-full text-left bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg font-medium mt-2">
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/90 to-purple-900/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1597733336794-12d05021d510"
            alt="Cybersecurity Network"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            AI-Powered Cybersecurity
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Simple, affordable cybersecurity for small businesses and individuals. 
            AI-powered protection that's easy to use and fits your budget.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
              Start Protection Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Protection Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Easy-to-use cybersecurity solutions designed for small businesses and individuals 
              who want professional protection without the complexity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 border border-gray-700"
              >
                <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple Cybersecurity for Everyone
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We believe cybersecurity should be simple, affordable, and accessible to everyone. 
                Our AI-powered solutions protect small businesses and individuals without the complexity 
                of traditional enterprise security systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-yellow-400 mr-3" />
                  <span>Easy Setup - Get Protected in 5 Minutes</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-400 mr-3" />
                  <span>24/7 Friendly Support Team</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-green-400 mr-3" />
                  <span>Affordable Plans Starting at $9.99/month</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <img
                src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
                alt="Security Operations Center"
                className="relative w-full h-96 object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by small businesses and individuals who value simple, effective cybersecurity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Get answers to common questions about our cybersecurity solutions.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-400" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Consultation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to secure your business or personal devices? Contact us today and 
              discover how easy and affordable cybersecurity can be.
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Protected?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free consultation today and discover how easy and affordable 
              cybersecurity protection can be for your business or personal use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
                Start Protection Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-xl font-bold">AICybSec</span>
              </div>
              <p className="text-gray-400 mb-4">
                Simple, affordable cybersecurity for small businesses and individuals. 
                AI-powered protection that's easy to use and fits your budget.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Personal Protection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email Protection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Backup</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-AICYBSEC</li>
                <li>hello@aicybsec.com</li>
                <li>24/7 Support Available</li>
                <li>support@aicybsec.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AICybSec. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CybersecurityLanding;