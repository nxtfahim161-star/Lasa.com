import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Smile, 
  BookOpen, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Menu, 
  X, 
  Compass, 
  Sun,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMood, setActiveMood] = useState('Calm');
  const [journalText, setJournalText] = useState('');
  const [journalSaved, setJournalSaved] = useState(false);

  // Loading Screen Animation Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  const moods = [
    { name: 'Calm', icon: Smile, color: 'bg-[#A7C5DA]/30 text-[#38669D]' },
    { name: 'Reflective', icon: Compass, color: 'bg-[#888C5C]/20 text-[#3E4738]' },
    { name: 'Grateful', icon: Sun, color: 'bg-[#6590B9]/20 text-[#38669D]' },
    { name: 'Peaceful', icon: Heart, color: 'bg-[#3E4738]/10 text-[#3E4738]' }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#F3F5F7] flex flex-col items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-[#3E4738] rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
            <Heart className="w-8 h-8 text-[#F3F5F7]" />
          </div>
          <h1 className="text-2xl font-serif text-[#3E4738] tracking-wider font-bold">BEST FRIEND</h1>
          <p className="text-xs text-[#A8AAAA] mt-2 tracking-widest uppercase font-semibold">LASA.com Sanctuary</p>
          <div className="w-32 h-1 bg-[#A7C5DA] rounded-full mx-auto mt-6 overflow-hidden">
            <motion.div 
              className="h-full bg-[#3E4738]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F5F7] text-[#3E4738] font-sans antialiased selection:bg-[#A7C5DA] selection:text-[#3E4738] min-h-screen">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F3F5F7]/80 border-b border-[#A8AAAA]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#3E4738] rounded-xl flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-[#F3F5F7]" />
            </div>
            <span className="font-serif text-xl tracking-tight text-[#3E4738] font-bold">BEST FRIEND</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#3E4738]/80">
            <a href="#features" className="hover:text-[#38669D] transition-colors">Features</a>
            <a href="#journal-section" className="hover:text-[#38669D] transition-colors">Sanctuary</a>
            <a href="#how-it-works" className="hover:text-[#38669D] transition-colors">How It Works</a>
            <a href="#privacy" className="hover:text-[#38669D] transition-colors">Privacy</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#journal-section" 
              className="px-6 py-2.5 rounded-full bg-[#3E4738] text-[#F3F5F7] text-sm font-medium hover:bg-[#38669D] transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#3E4738] hover:bg-black/5"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#F3F5F7] border-b border-[#A8AAAA]/20 px-6 py-6 space-y-4"
            >
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Features</a>
              <a href="#journal-section" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Sanctuary</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">How It Works</a>
              <a href="#privacy" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Privacy</a>
              <div className="pt-4">
                <a 
                  href="#journal-section" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-full bg-[#3E4738] text-[#F3F5F7] font-medium"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#A7C5DA]/30 text-[#38669D] text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Personal Mental Sanctuary</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#3E4738] leading-[1.1]">
              Your safe space, your <span className="italic font-normal text-[#38669D]">BEST FRIEND.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#3E4738]/70 max-w-xl font-normal leading-relaxed">
              A little space to understand your feelings, express yourself freely, and find a better connection with yourself every single day.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#journal-section"
                className="px-8 py-4 rounded-full bg-[#3E4738] text-[#F3F5F7] font-medium text-center hover:bg-[#38669D] transition-all shadow-lg shadow-[#3E4738]/10 flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#features"
                className="px-8 py-4 rounded-full bg-white text-[#3E4738] font-medium text-center border border-[#A8AAAA]/30 hover:border-[#3E4738]/50 transition-all shadow-sm"
              >
                Explore Sanctuary
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#A8AAAA]/20 max-w-lg">
              <div>
                <p className="text-2xl font-serif font-bold text-[#3E4738]">100%</p>
                <p className="text-xs text-[#A8AAAA] mt-1 font-medium">Safe & Private</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#3E4738]">24/7</p>
                <p className="text-xs text-[#A8AAAA] mt-1 font-medium">Emotional Support</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#3E4738]">100k+</p>
                <p className="text-xs text-[#A8AAAA] mt-1 font-medium">Mindful Souls</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#A7C5DA]/40 to-[#888C5C]/20 p-2">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-inner space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#A8AAAA] font-semibold">Daily Check-in</span>
                  <span className="text-xs text-[#38669D] bg-[#A7C5DA]/30 px-2.5 py-1 rounded-full font-medium">Active Now</span>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-[#3E4738]">How are you feeling right now?</h3>
                  <p className="text-sm text-[#3E4738]/60 mt-1">Select the energy that matches your inner space.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {moods.map((m) => {
                    const Icon = m.icon;
                    const isSelected = activeMood === m.name;
                    return (
                      <button
                        key={m.name}
                        onClick={() => setActiveMood(m.name)}
                        className={`p-4 rounded-xl flex items-center space-x-3 transition-all border ${
                          isSelected 
                            ? 'bg-[#3E4738] text-[#F3F5F7] border-[#3E4738] shadow-md' 
                            : 'bg-white text-[#3E4738] border-[#A8AAAA]/20 hover:border-[#3E4738]/30'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-[#F3F5F7]' : 'text-[#38669D]'}`} />
                        <span className="text-sm font-medium">{m.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="bg-[#F3F5F7] rounded-xl p-4 space-y-2 border border-[#A8AAAA]/10">
                  <div className="flex items-center justify-between text-xs text-[#38669D] font-medium">
                    <span>AI Reflection Partner</span>
                    <span className="text-[#888C5C]">Ready</span>
                  </div>
                  <p className="text-xs text-[#3E4738]/80 italic leading-relaxed">
                    "Acknowledging that you feel {activeMood.toLowerCase()} is the first step toward true inner clarity. Take a slow, deep breath."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Glass Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#888C5C]/20 flex items-center justify-center text-[#3E4738]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#3E4738]">100% Confidential</p>
                <p className="text-[10px] text-[#A8AAAA]">End-to-end encrypted journal</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
          {/* Core Features */}
      <section id="features" className="py-24 bg-white/60 border-y border-[#A8AAAA]/10 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#38669D]">Modular Design Language</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#3E4738]">Designed for your emotional well-being</h3>
            <p className="text-sm sm:text-base text-[#3E4738]/70">
              Every tool and card is crafted with meticulous attention to detail to ensure zero friction in your mental wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F3F5F7] p-8 rounded-3xl border border-[#A8AAAA]/20 hover:border-[#38669D]/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#A7C5DA]/30 flex items-center justify-center text-[#38669D]">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif text-[#3E4738]">Smart Mood Tracking</h4>
              <p className="text-sm text-[#3E4738]/70 leading-relaxed">
                Log your emotional fluctuations effortlessly and discover weekly behavioral patterns with intuitive visual analytics.
              </p>
            </div>

            <div className="bg-[#F3F5F7] p-8 rounded-3xl border border-[#A8AAAA]/20 hover:border-[#38669D]/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#888C5C]/20 flex items-center justify-center text-[#3E4738]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif text-[#3E4738]">Private Journaling</h4>
              <p className="text-sm text-[#3E4738]/70 leading-relaxed">
                Write down unexpressed thoughts in a distraction-free, zero-judgment sanctuary protected by high-grade encryption.
              </p>
            </div>

            <div className="bg-[#F3F5F7] p-8 rounded-3xl border border-[#A8AAAA]/20 hover:border-[#38669D]/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#6590B9]/20 flex items-center justify-center text-[#38669D]">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif text-[#3E4738]">Daily Check-ins</h4>
              <p className="text-sm text-[#3E4738]/70 leading-relaxed">
                Receive personalized micro-reflections and grounding audio exercises tailored to your exact emotional state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Journal Section */}
      <section id="journal-section" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-[#3E4738] text-[#F3F5F7] rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7C5DA]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#A7C5DA] font-semibold">Quick Reflection</span>
            <h3 className="text-3xl font-serif">What's on your mind right now?</h3>
            <p className="text-sm text-[#F3F5F7]/70">Type freely. This stays entirely private on your device.</p>
          </div>

          <div className="space-y-4 relative z-10">
            <textarea 
              rows={4}
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Express your thoughts without filters..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-[#F3F5F7] placeholder-[#F3F5F7]/40 focus:outline-none focus:border-[#A7C5DA] transition-all resize-none text-sm"
            />
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#F3F5F7]/60 font-medium">
                {journalText.length} characters written
              </span>
              <button 
                onClick={() => {
                  if(journalText.trim()) {
                    setJournalSaved(true);
                    setTimeout(() => setJournalSaved(false), 3000);
                    setJournalText('');
                  }
                }}
                className="px-6 py-3 rounded-full bg-[#A7C5DA] text-[#3E4738] text-sm font-medium hover:bg-white transition-all shadow-md flex items-center space-x-2"
              >
                <span>Save to Sanctuary</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>

            {journalSaved && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-[#A7C5DA] font-medium"
              >
                ✓ Successfully encrypted and saved to your private journal.
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="privacy" className="bg-white border-t border-[#A8AAAA]/20 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#3E4738] rounded-xl flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#F3F5F7]" />
              </div>
              <span className="font-serif text-lg font-semibold text-[#3E4738]">BEST FRIEND</span>
            </div>
            <p className="text-xs text-[#A8AAAA] leading-relaxed">
              Powered by LASA.com. Dedicated to cultivating mindful self-awareness and emotional wellness worldwide.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3E4738] mb-4">Navigation</p>
            <ul className="space-y-2 text-sm text-[#3E4738]/70">
              <li><a href="#features" className="hover:text-[#38669D]">Features</a></li>
              <li><a href="#journal-section" className="hover:text-[#38669D]">Sanctuary</a></li>
              <li><a href="#how-it-works" className="hover:text-[#38669D]">How It Works</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3E4738] mb-4">Privacy & Security</p>
            <ul className="space-y-2 text-sm text-[#3E4738]/70">
              <li><a href="#" className="hover:text-[#38669D]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#38669D]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#38669D]">Data Encryption</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3E4738] mb-4">Stay Connected</p>
            <p className="text-xs text-[#A8AAAA] mb-3">Join our weekly mindful newsletter.</p>
            <div className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#F3F5F7] border border-[#A8AAAA]/30 rounded-xl px-4 py-2.5 text-xs text-[#3E4738] focus:outline-none focus:border-[#3E4738] w-full"
              />
              <button className="bg-[#3E4738] text-[#F3F5F7] px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-[#38669D] transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#A8AAAA]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8AAAA]">
          <p>© 2026 LASA.com / BEST FRIEND. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-medium">Designed with precision & care for ফাহিম.</p>
        </div>
      </footer>

    </div>
  );
}
