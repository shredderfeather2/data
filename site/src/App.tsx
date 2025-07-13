import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  DollarSign, 
  Upload, 
  Bot, 
  Download,
  Mail,
  Check,
  ArrowRight,
  Lock,
  Server,
  AlertTriangle,
  ExternalLink,
  Briefcase,
  Code,
  Scale,
  Menu,
  X,
  Star,
  Sparkles
} from 'lucide-react';

// Landing Page Component
const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 lg:py-32 z-10"
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200 font-medium">AI-Powered Form Completion</span>
              </div>
            </motion.div>
            
            <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              File your SSDI forms in minutes—just{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">$49</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Revolutionary AI-powered form completion using frontier GenAI models. Upload your documents, 
              let our intelligent system handle the critical time-consuming portions of complex paperwork, receive your completed forms via email.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 inline-flex items-center gap-3 shadow-lg shadow-blue-500/25"
            >
              {/* TODO: Connect to Stripe checkout */}
              Get Started Now
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Three-Step Process */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 relative z-10"
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Upload, title: "Upload Docs", desc: "Upload your medical records, work history, and personal information securely", color: "from-emerald-500 to-teal-500" },
              { icon: Bot, title: "AI Fill", desc: "Our frontier GenAI models analyze and complete the critical time-consuming portions of all required SSA forms", color: "from-blue-500 to-indigo-500" },
              { icon: Mail, title: "Submit & File", desc: "Receive your completed forms in 5-10 minutes, fill in any remaining details, then mail to SSA via postal mail or transfer answers to their website. Mail is easiest—generate, finalize and go!", color: "from-purple-500 to-pink-500" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className={`bg-gradient-to-br ${step.color} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-current/30 transition-all duration-300`}>
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Strip */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-16 relative z-10"
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Simple, Transparent Pricing</h3>
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-6xl font-black mb-2">$49</div>
            <p className="text-xl text-slate-300 mb-4 flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              1 Million frontier AI tokens included • Handles hundreds of pages with complex medical history
              <Star className="w-5 h-5 text-yellow-400" />
            </p>
            <p className="text-slate-400">
              Often allows for multiple revision cycles • Additional token packs available for $40 each
            </p>
          </div>
        </div>
      </motion.section>

      {/* Trust Seals */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16 relative z-10"
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {[
              { icon: FileText, text: "SSA-16 Compatible" },
              { icon: FileText, text: "SSA-3368-BK Ready" },
              { icon: Shield, text: "HIPAA Compliant" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl px-6 py-4"
              >
                <item.icon className="w-8 h-8 text-blue-400" />
                <span className="text-lg font-medium text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Satisfaction Guarantee */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 relative z-10"
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-r from-emerald-900/30 via-green-900/30 to-teal-900/30 backdrop-blur-lg border border-emerald-500/30 rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-lg shadow-emerald-500/10">
            <div className="bg-gradient-to-r from-emerald-400 to-green-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Satisfaction Guarantee</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Full refund within 7 days—no questions asked. 
              We're confident our AI will handle your forms highly accurately.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

// Pricing Page Component
const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's your refund policy?",
      answer: "We offer a full refund within 7 days of purchase, no questions asked. If you're not satisfied with our service, simply contact us for a refund."
    },
    {
      question: "How long does form completion take?",
      answer: "Most forms are completed within 5 to 10 minutes, often faster. You'll receive an email notification when your forms are ready."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and ACH bank transfers through our secure Stripe integration."
    },
    {
      question: "What if I need more tokens?",
      answer: "1 million frontier AI tokens can handle hundreds of pages of input documents with complex medical history and often allows for multiple revision cycles. If you need more for exceptionally complex cases, additional token packs are available for $40 each."
    },
    {
      question: "What does 'completion' mean?",
      answer: "Our AI handles the critical time-consuming portions of your forms, not necessarily 100% completion. Processing typically takes 5-10 minutes, often faster. When done, you receive the completed forms via email and your data is immediately purged."
    },
    {
      question: "What do I do after receiving my completed forms?",
      answer: "After GenAI completion, simply fill in any remaining details, then submit your forms to the SSA. You can mail them via postal mail (easiest method—just generate, finalize and go!) or transfer the answers into the SSA's website."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">Simple Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Best value for money. Law firms charge thousands for form completion and filing. Pay once, get your forms completed for the price of a dinner out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Starter Package */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Starter Package</h3>
              <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">$49</div>
              <p className="text-slate-300 mb-8">Everything you need to get started</p>
              
              <ul className="text-left space-y-4 mb-8">
                {[
                  "1 Million frontier AI tokens",
                  "Handles hundreds of pages with complex medical history",
                  "SSA-16, SSA-3368-BK, SSA-3369 & SSA-827 completion", 
                  "HIPAA compliant processing",
                  "Secure email delivery",
                  "7-day refund guarantee"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-emerald-400 to-green-400 w-5 h-5 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg"
              >
                {/* TODO: Connect to Stripe checkout */}
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Extra Tokens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg border border-slate-700/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Extra Tokens</h3>
              <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">$40</div>
              <p className="text-slate-300 mb-8">Per additional 1M token pack</p>
              
              <ul className="text-left space-y-4 mb-8">
                {[
                  "1 Million additional frontier AI tokens",
                  "For exceptionally complex cases",
                  "Enables multiple revision cycles",
                  "Same-day processing"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-5 h-5 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-4 rounded-2xl font-bold hover:from-slate-600 hover:to-slate-500 transition-all duration-300 border border-slate-600"
              >
                {/* TODO: Connect to token purchase */}
                Add Tokens
              </motion.button>
            </div>
          </motion.div>

          {/* Value Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-lg border border-emerald-500/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-400 to-green-400 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Best Value</h3>
              <p className="text-slate-300 mb-6">
                Compare to what law firms charge for SSDI form completion
              </p>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center bg-red-900/20 rounded-lg p-3">
                  <span className="text-slate-200">Law Firms:</span>
                  <span className="text-red-400 font-bold">$2,000-$5,000</span>
                </div>
                <div className="flex justify-between items-center bg-green-900/20 rounded-lg p-3">
                  <span className="text-slate-200">FormFlyer AI:</span>
                  <span className="text-emerald-400 font-bold">$49</span>
                </div>
                <div className="flex justify-between items-center font-bold border-t border-slate-600 pt-4 bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-lg p-3">
                  <span className="text-white">You Save:</span>
                  <span className="text-emerald-300 text-xl">95%+</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mt-6 italic">
                Price of a dinner out vs. thousands in legal fees
              </p>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-400"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-300 border-t border-slate-700/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// HIPAA Page Component
const Hipaa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-red-500/30 to-pink-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">HIPAA Compliance & Privacy</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your protected health information is safe with us. We maintain the highest 
            standards of data security and privacy protection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Zero Retention Promise */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-red-900/40 to-pink-900/40 backdrop-blur-lg border border-red-500/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-red-400 to-pink-400 w-12 h-12 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">Zero Retention Promise</h2>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              All uploaded documents and generated forms are automatically purged 
              from our systems within 24 hours of completion. We don't store your 
              personal health information.
            </p>
            <ul className="space-y-3">
              {[
                "Automatic data deletion < 24 hours",
                "No long-term storage",
                "Processing-only data retention"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-400 w-5 h-5 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Encryption */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-400 w-12 h-12 rounded-2xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Military-Grade Encryption</h2>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your data is protected with industry-standard encryption both 
              in transit and at rest. Every byte is secured from upload to deletion.
            </p>
            <ul className="space-y-3">
              {[
                "AES-256 encryption at rest",
                "TLS 1.3 in transit",
                "End-to-end encryption"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-400 w-5 h-5 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 mb-16 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 w-12 h-12 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">HIPAA Security Rule Compliance</h2>
          </div>
          <p className="text-slate-300 mb-6 leading-relaxed">
            We strictly adhere to the HIPAA Security Rule requirements outlined 
            in 45 CFR §164.302-318, ensuring your protected health information 
            meets federal privacy standards.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Administrative Safeguards",
                desc: "Security officer designation, workforce training, access management procedures",
                color: "from-emerald-400 to-teal-400"
              },
              {
                title: "Physical Safeguards", 
                desc: "Data center security, workstation controls, media and equipment protection",
                color: "from-blue-400 to-indigo-400"
              },
              {
                title: "Technical Safeguards",
                desc: "Access controls, audit logging, integrity controls, transmission security", 
                color: "from-purple-400 to-pink-400"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-600/30">
                <h4 className={`font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why HIPAA Matters and CTA */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg border border-slate-700/30 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Why HIPAA Compliance Matters</h2>
              <p className="text-slate-300 mb-4 leading-relaxed">
                HIPAA violations can result in severe financial penalties and legal consequences. 
                Healthcare organizations must maintain strict compliance with federal privacy regulations.
              </p>
              <p className="text-slate-300 leading-relaxed">
                By choosing FormFlyer AI, you're working with a service that prioritizes 
                your privacy and maintains compliance with all federal health information 
                protection requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
          >
            {/* TODO: Connect to BAA PDF download */}
            Download Our BAA (PDF)
            <Download className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// How To File Page Component
const HowToFile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">How to File for SSDI</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Understanding the Social Security Administration's 5-step sequential 
            evaluation process and required documentation.
          </p>
        </motion.div>

        {/* SSA 5-Step Process Flow Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">SSA 5-Step Sequential Evaluation</h2>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 shadow-xl">
            <svg viewBox="0 0 800 400" className="w-full h-auto text-white">
              {/* Step boxes with gradients */}
              <defs>
                <linearGradient id="step1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="step2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="step3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#0891B2" />
                </linearGradient>
                <linearGradient id="step4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="step5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#60A5FA" />
                </marker>
              </defs>

              {/* Step 1 */}
              <rect x="50" y="50" width="120" height="60" fill="url(#step1)" rx="12" />
              <text x="110" y="75" textAnchor="middle" className="fill-white text-sm font-bold">Step 1</text>
              <text x="110" y="90" textAnchor="middle" className="fill-white text-xs">Are you working?</text>
              
              {/* Arrow 1 */}
              <path d="M180 80 L220 80" stroke="#60A5FA" strokeWidth="3" markerEnd="url(#arrowhead)" />
              
              {/* Step 2 */}
              <rect x="230" y="50" width="120" height="60" fill="url(#step2)" rx="12" />
              <text x="290" y="75" textAnchor="middle" className="fill-white text-sm font-bold">Step 2</text>
              <text x="290" y="90" textAnchor="middle" className="fill-white text-xs">Severe impairment?</text>
              
              {/* Arrow 2 */}
              <path d="M360 80 L400 80" stroke="#60A5FA" strokeWidth="3" markerEnd="url(#arrowhead)" />
              
              {/* Step 3 */}
              <rect x="410" y="50" width="120" height="60" fill="url(#step3)" rx="12" />
              <text x="470" y="75" textAnchor="middle" className="fill-white text-sm font-bold">Step 3</text>
              <text x="470" y="90" textAnchor="middle" className="fill-white text-xs">Listed impairment?</text>
              
              {/* Arrow 3 */}
              <path d="M470 120 L470 160" stroke="#60A5FA" strokeWidth="3" markerEnd="url(#arrowhead)" />
              
              {/* Step 4 */}
              <rect x="410" y="170" width="120" height="60" fill="url(#step4)" rx="12" />
              <text x="470" y="195" textAnchor="middle" className="fill-white text-sm font-bold">Step 4</text>
              <text x="470" y="210" textAnchor="middle" className="fill-white text-xs">Past work?</text>
              
              {/* Arrow 4 */}
              <path d="M400 200 L360 200" stroke="#60A5FA" strokeWidth="3" markerEnd="url(#arrowhead)" />
              
              {/* Step 5 */}
              <rect x="230" y="170" width="120" height="60" fill="url(#step5)" rx="12" />
              <text x="290" y="195" textAnchor="middle" className="fill-white text-sm font-bold">Step 5</text>
              <text x="290" y="210" textAnchor="middle" className="fill-white text-xs">Other work?</text>
              
              {/* Decision outcomes with better styling */}
              <text x="110" y="280" textAnchor="middle" className="fill-slate-400 text-xs">If working substantially</text>
              <text x="110" y="295" textAnchor="middle" className="fill-red-400 text-xs font-bold">→ Denied</text>
              
              <text x="290" y="280" textAnchor="middle" className="fill-slate-400 text-xs">If no severe impairment</text>
              <text x="290" y="295" textAnchor="middle" className="fill-red-400 text-xs font-bold">→ Denied</text>
              
              <text x="470" y="280" textAnchor="middle" className="fill-slate-400 text-xs">If meets listing</text>
              <text x="470" y="295" textAnchor="middle" className="fill-emerald-400 text-xs font-bold">→ Approved</text>
              
              <text x="590" y="195" textAnchor="middle" className="fill-slate-400 text-xs">Can do past work</text>
              <text x="590" y="210" textAnchor="middle" className="fill-red-400 text-xs font-bold">→ Denied</text>
              
              <text x="110" y="340" textAnchor="middle" className="fill-slate-400 text-xs">Can't do any work</text>
              <text x="110" y="355" textAnchor="middle" className="fill-emerald-400 text-xs font-bold">→ Approved</text>
            </svg>
          </div>
        </motion.div>

        {/* Required Forms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Required Forms at Initial Filing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SSA-16",
                desc: "Application for Disability Insurance Benefits. The primary form that starts your SSDI claim process.",
                items: ["Personal information", "Work history", "Medical conditions", "Contact details"],
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "SSA-3368-BK", 
                desc: "Adult Disability Report. Detailed information about your medical conditions and how they affect your daily life.",
                items: ["Medical treatment history", "Daily activity limitations", "Medication side effects", "Healthcare providers"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "SSA-3369",
                desc: "Work History Report. Comprehensive details about your work experience and job duties over the past 15 years.",
                items: ["Job responsibilities", "Physical demands", "Skills required", "Work environments"],
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "SSA-827",
                desc: "Authorization to Disclose Information. Allows SSA to obtain your medical records from healthcare providers.",
                items: ["Medical record release", "Healthcare provider access", "Information disclosure", "Privacy authorization"],
                color: "from-orange-500 to-red-500"
              }
            ].map((form, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${form.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{form.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {form.desc}
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  {form.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Filing Tips for Success</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Check,
                title: "Submit Medical Records Early",
                desc: "Gather all relevant medical documentation before filing",
                color: "from-emerald-500 to-green-500"
              },
              {
                icon: FileText,
                title: "Be Thorough and Accurate", 
                desc: "Complete all sections fully and double-check information",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Users,
                title: "List All Treating Doctors",
                desc: "Include contact information for every healthcare provider",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: AlertTriangle,
                title: "Keep Copies of Everything",
                desc: "Maintain records of all submitted documents and correspondence",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${tip.color}/20 backdrop-blur-lg border border-slate-700/30 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`bg-gradient-to-br ${tip.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-3`}>
                  <tip.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2 text-white">{tip.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {tip.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Submission Options */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">After AI Completion: Submission Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-lg border border-emerald-500/30 rounded-3xl p-8 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-400 to-green-400 w-16 h-16 rounded-3xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Postal Mail (Recommended)</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                The easiest method! After receiving your AI-completed forms, simply fill in any remaining details and mail directly to your local SSA office.
              </p>
              <p className="text-emerald-300 font-semibold">
                Generate, finalize and go—all set!
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 shadow-lg">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-400 w-16 h-16 rounded-3xl flex items-center justify-center mb-6">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">SSA Website Transfer</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Alternatively, you can transfer the completed answers from your AI-generated forms into the SSA's online application system.
              </p>
              <p className="text-blue-300 font-semibold">
                Digital submission option available
              </p>
            </div>
          </div>
        </motion.div>

        {/* Official Resources */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Official SSA Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "SSA-16 Form (PDF)", primary: false },
              { text: "SSA-3368-BK Form (PDF)", primary: false },
              { text: "SSA-827 Form (PDF)", primary: false },
              { text: "SSA.gov Disability Info", primary: true }
            ].map((resource, index) => (
              <motion.button
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: resource.primary ? "0 20px 40px rgba(59, 130, 246, 0.3)" : "0 10px 20px rgba(100, 116, 139, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  resource.primary 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400" 
                    : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500"
                } text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg`}
              >
                {/* TODO: Link to official resources */}
                {resource.text}
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// About Us Page Component  
const AboutUs = () => {
  const founders = [
    {
      name: "Sarah Martinez, Esq.",
      role: "Chief Legal Officer",
      icon: Scale,
      experience: "15+ years disability law",
      description: "Former SSA attorney with deep expertise in federal disability regulations and appeals process.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer", 
      icon: Code,
      experience: "12+ years AI/ML",
      description: "Ex-Google engineer specializing in natural language processing and document automation.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Operating Officer",
      icon: Briefcase,
      experience: "20+ years healthcare ops",
      description: "Healthcare administration veteran with expertise in HIPAA compliance and patient data management.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">About FormFlyer AI</h1>
          <p className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Decades and decades of collective experience in disability law, AI, and full-stack engineering
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're a team of experts who understand both the complexity of SSDI paperwork 
            and the power of artificial intelligence to simplify the process.
          </p>
        </motion.div>

        {/* Founder Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                filter: "blur(0px)",
              }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 text-center hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className={`bg-gradient-to-br ${founder.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <founder.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{founder.name}</h3>
              <p className={`font-semibold mb-2 bg-gradient-to-r ${founder.color} bg-clip-text text-transparent`}>{founder.role}</p>
              <p className="text-slate-400 text-sm mb-4 font-medium">{founder.experience}</p>
              <p className="text-slate-300 leading-relaxed">{founder.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-12 text-center mb-16 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Our Mission</h2>
          <p className="text-3xl text-slate-200 mb-8 italic font-light">
            "Make federal disability benefits accessible for the price of a dinner out."
          </p>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Too many Americans struggle with complex SSDI paperwork while dealing with 
            disabilities. We believe that artificial intelligence can eliminate this 
            barrier, making the path to benefits simple, affordable, and stress-free. 
            Everyone deserves access to the support they've earned.
          </p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Shield,
              title: "Privacy First",
              desc: "Your personal health information is sacred. We maintain the highest standards of data protection and never retain sensitive documents.",
              color: "from-emerald-500 to-teal-500"
            },
            {
              icon: Users,
              title: "Human-Centered AI", 
              desc: "Technology should serve people, not the other way around. Our AI handles the complexity so you can focus on your health and recovery.",
              color: "from-blue-500 to-indigo-500"
            },
            {
              icon: DollarSign,
              title: "Accessible Pricing",
              desc: "Legal services shouldn't bankrupt you. We've made professional-grade form completion affordable for everyone who needs it.",
              color: "from-purple-500 to-pink-500"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg border border-slate-700/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Press & Partnership Inquiries</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Interested in learning more about FormFlyer AI or partnering with us? 
            We'd love to hear from you.
          </p>
          <motion.a
            href="mailto:press@formflyer.ai"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
          >
            {/* TODO: Set up press email forwarding */}
            press@formflyer.ai
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: 'home', label: 'Home' },
    { path: 'pricing', label: 'Pricing' },
    { path: 'hipaa', label: 'Privacy' },
    { path: 'how-to-file', label: 'How to File' },
    { path: 'about', label: 'About' }
  ];

  return (
    <nav className="bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-black text-white hover:text-blue-400 transition-colors"
          >
            FormFlyer<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => setCurrentPage(item.path)}
                className={`text-sm font-medium transition-colors relative ${
                  currentPage === item.path
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                  />
                )}
              </button>
            ))}
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg"
            >
              {/* TODO: Connect to Stripe checkout */}
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-slate-800/50"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      setCurrentPage(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      currentPage === item.path
                        ? 'text-blue-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <footer className="bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/50 py-12">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-black text-white mb-4">
              FormFlyer<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI-powered SSDI form completion for the price of a dinner out.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => setCurrentPage('how-to-file')} className="hover:text-white transition-colors">How to File</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('hipaa')} className="hover:text-white transition-colors">Privacy & HIPAA</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HIPAA Notice</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© 2025 FormFlyer AI. All rights reserved.</p>
          <p className="mt-2">
            FormFlyer AI is not affiliated with the Social Security Administration. 
            We provide form completion services only.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Landing />;
      case 'pricing':
        return <Pricing />;
      case 'hipaa':
        return <Hipaa />;
      case 'how-to-file':
        return <HowToFile />;
      case 'about':
        return <AboutUs />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      <style>
        {`
          * {
            font-family: 'Inter', sans-serif;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #1e293b;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #3b82f6, #06b6d4);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #2563eb, #0891b2);
          }
        `}
      </style>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
