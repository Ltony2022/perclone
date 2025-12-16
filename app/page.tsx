'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Graduate Student",
      university: "MIT",
      text: "Education AI transformed how I approach learning. The personalized recommendations helped me improve my grades by 40% in just one semester.",
      rating: 5
    },
    {
      name: "Dr. Marcus Johnson",
      role: "University Professor",
      university: "Stanford",
      text: "This AI platform has revolutionized my teaching. I can now provide individualized attention to each of my 200+ students effectively.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "High School Student",
      university: "Lincoln High",
      text: "Learning math used to be intimidating, but now it's engaging and fun. The AI tutor adapts to my pace and makes complex concepts simple.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Personalization",
      description: "Adaptive learning paths tailored to each student's unique learning style and pace."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Track progress, identify knowledge gaps, and optimize learning outcomes with detailed insights."
    },
    {
      icon: "🎯",
      title: "Smart Recommendations",
      description: "Get intelligent suggestions for study materials, practice problems, and learning strategies."
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      description: "Receive immediate responses and explanations to accelerate your learning journey."
    },
    {
      icon: "🔒",
      title: "Privacy-First Design",
      description: "Your data is secure with enterprise-grade encryption and privacy protection."
    },
    {
      icon: "🌍",
      title: "Multi-Language Support",
      description: "Learn in your native language with support for 50+ languages and cultures."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { number: "500K+", label: "Students Worldwide" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Languages Supported" },
    { number: "24/7", label: "AI Tutoring" }
  ];

  const faqs = [
    {
      question: "How does the AI tutoring system work?",
      answer: "Our AI analyzes your learning patterns, strengths, and weaknesses to create a personalized learning experience. It adapts content difficulty, suggests study methods, and provides targeted feedback."
    },
    {
      question: "Is my personal data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and follow strict privacy protocols. Your data is never shared with third parties and you maintain full control over your information."
    },
    {
      question: "Can I try it for free?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your learning journey."
    },
    {
      question: "What subjects are covered?",
      answer: "We cover mathematics, science, languages, programming, and more. Our AI adapts to any subject area and can be customized for specific curricula."
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing starts at $19/month for students, with discounts available for annual plans. Educational institutions receive special pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🎉 Now serving 500K+ students worldwide</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Revolutionize
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Your Learning Journey
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Experience the future of education with AI-powered tutoring, personalized learning paths, and instant feedback. 
              Join thousands of students achieving their goals faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Platform</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets proven educational methods to deliver results that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Learners</span>
              <br />
              Worldwide
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                    “{testimonials[activeTestimonial].text}”
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].university}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Transparent</span>
              <br />
              Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your learning goals. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Student Plan */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Student</h3>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  $19<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Perfect for individual learners</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">AI-powered tutoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Personalized learning paths</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Real-time feedback</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Progress analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Mobile app access</span>
                </li>
              </ul>
              
              <button className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
                Start Free Trial
              </button>
            </div>
            
            {/* Pro Plan - Featured */}
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-2">
                  $39<span className="text-lg font-normal">/month</span>
                </div>
                <p className="text-blue-100">For serious learners & professionals</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Everything in Student</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Advanced AI recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Offline mode access</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Custom study schedules</span>
                </li>
              </ul>
              
              <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Custom
                </div>
                <p className="text-gray-600 dark:text-gray-400">For schools & organizations</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Admin dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Bulk user management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Dedicated support</span>
                </li>
              </ul>
              
              <button className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-blue-600 transform group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join over 500,000 students who have already revolutionized their learning journey with AI-powered education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50">
              <span className="relative z-10">Start Your Free Trial Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="text-blue-100">
              <span className="text-sm">No credit card required</span> • 
              <span className="text-sm"> 14-day free trial</span> • 
              <span className="text-sm"> Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Education AI</h3>
            <p className="text-gray-400 mb-6">Revolutionizing learning with artificial intelligence</p>
            
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              © 2024 Education AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
