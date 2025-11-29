import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Shield, 
  Users, 
  Crown, 
  ArrowRight, 
  Star,
  Zap,
  Lock,
  HeadphonesIcon
} from 'lucide-react';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('business');

  const plans = [
    {
      id: 'personal',
      name: 'Personal Protection',
      description: 'Perfect for individuals and families',
      icon: Shield,
      price: {
        monthly: 9.99,
        annual: 99.99
      },
      originalPrice: {
        monthly: 14.99,
        annual: 149.99
      },
      features: [
        '1-5 devices protected',
        'Real-time threat detection',
        'Password manager',
        'Secure email protection',
        'Identity theft monitoring',
        'Family account sharing',
        'Basic customer support',
        'Mobile app access'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 'business',
      name: 'Small Business',
      description: 'Ideal for small businesses & startups',
      icon: Users,
      price: {
        monthly: 29.99,
        annual: 299.99
      },
      originalPrice: {
        monthly: 49.99,
        annual: 499.99
      },
      features: [
        '10-50 devices protected',
        'Advanced threat detection',
        'Employee security training',
        'Business email protection',
        'Network security monitoring',
        'Compliance reporting',
        'Priority customer support',
        'Admin dashboard',
        'Incident response planning',
        'Data backup & recovery'
      ],
      popular: true,
      color: 'purple'
    },
    {
      id: 'professional',
      name: 'Professional Plus',
      description: 'For growing businesses & teams',
      icon: Crown,
      price: {
        monthly: 79.99,
        annual: 799.99
      },
      originalPrice: {
        monthly: 119.99,
        annual: 1199.99
      },
      features: [
        'Unlimited devices',
        'Enterprise-grade protection',
        'Advanced threat intelligence',
        'Custom security policies',
        'White-glove setup service',
        'Dedicated account manager',
        '24/7 priority support',
        'Advanced analytics',
        'API integration',
        'Custom compliance reporting',
        'Incident response team',
        'Security consulting hours'
      ],
      popular: false,
      color: 'gold'
    }
  ];

  const getColorClasses = (color, isSelected = false) => {
    const colorMap = {
      blue: {
        bg: isSelected ? 'bg-blue-500/20' : 'bg-blue-500/10',
        border: isSelected ? 'border-blue-500' : 'border-blue-500/30',
        text: 'text-blue-400',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: isSelected ? 'bg-purple-500/20' : 'bg-purple-500/10',
        border: isSelected ? 'border-purple-500' : 'border-purple-500/30',
        text: 'text-purple-400',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      gold: {
        bg: isSelected ? 'bg-yellow-500/20' : 'bg-yellow-500/10',
        border: isSelected ? 'border-yellow-500' : 'border-yellow-500/30',
        text: 'text-yellow-400',
        button: 'bg-yellow-600 hover:bg-yellow-700'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const calculateSavings = (monthly, annual) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your security needs. All plans include our AI-powered protection 
            and friendly support team.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-800/50 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-3 rounded-md font-medium transition-all relative ${
                  billingPeriod === 'annual'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 33%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            const colors = getColorClasses(plan.color, isSelected);
            const savings = calculateSavings(plan.price.monthly, plan.price.annual);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${colors.bg} backdrop-blur-sm rounded-2xl p-8 border-2 ${colors.border} transition-all duration-300 hover:scale-105 cursor-pointer ${
                  plan.popular ? 'ring-2 ring-purple-500/30' : ''
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <Icon className={`h-12 w-12 ${colors.text} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold">
                      ${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annual}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {billingPeriod === 'annual' && (
                    <div className="text-sm text-gray-400">
                      <span className="line-through">
                        ${plan.originalPrice.annual}
                      </span>
                      <span className="text-green-400 ml-2">
                        Save ${savings.amount} ({savings.percentage}% off)
                      </span>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-400 mt-1">
                    {billingPeriod === 'monthly' ? 'Billed monthly' : 'Billed annually'}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full ${colors.button} px-6 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center`}
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500">
                    30-day money-back guarantee
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">5-Minute Setup</h4>
            <p className="text-sm text-gray-400">
              Get protected instantly with our AI-powered automated setup process.
            </p>
          </div>
          
          <div className="text-center">
            <Lock className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">30-Day Guarantee</h4>
            <p className="text-sm text-gray-400">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
          
          <div className="text-center">
            <HeadphonesIcon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-400">
              Our friendly support team is always available to help you stay secure.
            </p>
          </div>
        </motion.div>

        {/* FAQ Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Questions about our plans?</h3>
          <p className="text-gray-400 mb-6">
            We're here to help you choose the perfect security solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-colors">
              View FAQ
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;