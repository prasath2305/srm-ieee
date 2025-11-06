'use client';

import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/schedule", label: "Schedule" },
    { href: "/register", label: "Register" },
    { href: "/admin", label: "Admin" }
  ];

  return (
    <>
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] glass-card border border-slate-200/50 shadow-2xl rounded-2xl backdrop-blur-xl' 
          : 'w-[90%] md:w-[85%] glass-card border border-slate-200/30 shadow-xl rounded-2xl backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-6 flex h-14 md:h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <div className={`w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
              isScrolled ? 'group-hover:scale-110' : 'group-hover:scale-105'
            }`}>
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className={`font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent transition-all duration-300 ${
              isScrolled ? 'text-sm md:text-lg group-hover:from-blue-700 group-hover:to-purple-700' : 'text-sm md:text-lg group-hover:from-blue-600 group-hover:to-purple-600'
            }`}>
              Research Summit 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-slate-700 font-medium hover:text-blue-600 transition-colors duration-300 group/nav"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/nav:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link 
              href="/register" 
              className={`px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 ${
                isScrolled ? 'hover:-translate-y-0.5' : 'hover:-translate-y-0.5'
              } relative overflow-hidden group`}
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <button 
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'hover:bg-slate-100/50' 
                : 'hover:bg-white/30'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-card border border-slate-200/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center py-3 px-4 text-slate-700 font-medium hover:text-blue-600 hover:bg-white/50 rounded-xl transition-all duration-200 group/mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex-1">{item.label}</span>
                  <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-200/50">
                <Link 
                  href="/register" 
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}