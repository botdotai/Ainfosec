import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Shield, Lock, Eye } from 'lucide-react';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Cybersecurity Tips for Small Businesses',
      excerpt: 'Learn the fundamentals of protecting your small business from cyber threats with these practical, easy-to-implement security measures.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Small Business',
      icon: Shield,
      image: 'https://images.pexels.com/photos/5475811/pexels-photo-5475811.jpeg'
    },
    {
      id: 2,
      title: 'Password Security: Your First Line of Defense',
      excerpt: 'Discover why strong passwords matter and how to create and manage them effectively to protect your personal and business accounts.',
      author: 'Mike Chen',
      date: '2025-01-12',
      readTime: '4 min read',
      category: 'Personal Security',
      icon: Lock,
      image: 'https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg'
    },
    {
      id: 3,
      title: 'Recognizing Phishing Emails: A Complete Guide',
      excerpt: 'Learn to identify and avoid phishing attempts that could compromise your data. Real examples and warning signs included.',
      author: 'Emma Rodriguez',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Email Security',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Security Tips & Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed with the latest cybersecurity trends, tips, and best practices 
            to keep your business and personal data safe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                      <Icon className="h-4 w-4 text-blue-400 mr-2" />
                      <span className="text-sm font-medium text-blue-400">{post.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    
                    <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center mx-auto">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Security-Informed</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest cybersecurity tips, threat alerts, 
            and best practices delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;