"use client";
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, ChevronRight, Menu, X, 
  MapPin, Scale, Zap, Lock, MessageCircle, Star 
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    { name: "Savita Dhaiya", text: "Professional Delhi business registration service! They handled my GST filing and company incorporation with absolute transparency.", stars: 5 },
    { name: "Nitin Aggarwal", text: "Excellent court representation in NCR. I had a difficult litigation case regarding a commercial lease, and the team provided strategic advice.", stars: 5 },
    { name: "Prakash Pandey", text: "Property dispute solved smoothly in Noida. The legal notices drafted by Axilegal were airtight and forced negotiation.", stars: 5 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-center py-2 text-sm font-medium">
        Consultation Fee: ₹499 for 30 Minutes
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            Axi<span className="text-blue-500">legal</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-blue-600 transition">Home</a>
            <div className="group relative">
              <button className="flex items-center font-medium group-hover:text-blue-600">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {/* Dropdown placeholder - simplified for brevity */}
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-xl border border-slate-100 w-64 rounded-lg py-4">
                <a href="#" className="block px-6 py-2 hover:bg-blue-50">Taxation</a>
                <a href="#" className="block px-6 py-2 hover:bg-blue-50">Corporate Startups</a>
                <a href="#" className="block px-6 py-2 hover:bg-blue-50">Litigation</a>
              </div>
            </div>
            <a href="#" className="font-medium hover:text-blue-600">Freebies</a>
            <div className="flex items-center space-x-4 ml-4">
              <a href="#" className="text-blue-600 font-semibold">Sign up</a>
              <a href="#" className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">Login</a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Expert <span className="text-blue-600">Legal Solutions</span> for Your Future
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl">
              Reliable legal support for your business and personal needs. Transparent, digital-first, and results-driven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                Book Consultation - ₹499
              </button>
              <button className="border-2 border-slate-200 bg-white px-8 py-4 rounded-lg font-bold text-lg hover:border-blue-600 transition-all">
                View All Services
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="w-full h-96 bg-blue-100 rounded-3xl border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center">
                <Scale size={120} className="text-blue-900 opacity-20" />
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Specialized Services</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Taxation", "Corporate", "Litigation", "Consumer", "Cyber Fraud", "IP Rights", "Documentation"].map((service) => (
              <div key={service} className="group p-8 border border-slate-100 rounded-2xl text-left hover:shadow-xl hover:border-blue-200 transition-all">
                <h3 className="text-xl font-bold mb-3">{service}</h3>
                <ul className="text-slate-500 space-y-2 mb-6 text-sm">
                  <li>• Professional Support</li>
                  <li>• Documentation</li>
                  <li>• Compliance</li>
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                   <span className="text-blue-600 font-bold">Starting ₹399</span>
                   <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400 w-6 h-6" />)}
              </div>
              <p className="text-2xl italic leading-relaxed mb-8">
                &quot;{reviews[activeReview].text}&quot;
              </p>
              <h4 className="font-bold text-xl text-blue-400">— {reviews[activeReview].name}</h4>
           </div>
        </div>
      </section>

      {/* Contact & Why Us */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold mb-8">Quick Booking</h2>
            <form className="space-y-4">
              <input className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" />
              <input className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
              <textarea className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Describe your case..." />
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg">Confirm Booking</button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-10">Why Axilegal?</h2>
            {[
              { icon: <MapPin />, title: "High Expertise", desc: "Consult with industry-leading experts." },
              { icon: <Scale />, title: "Transparent Pricing", desc: "No hidden 'lawyer fees'. Fixed upfront pricing." },
              { icon: <Zap />, title: "Fast-Track Processing", desc: "Digital-first approach is 40% faster." },
              { icon: <Lock />, title: "Secure Data", desc: "Bank-grade encryption for all files." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageCircle size={32} />
      </button>
    </div>
  );
}