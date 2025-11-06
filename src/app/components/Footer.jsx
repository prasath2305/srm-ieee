import Link from "next/link";
import { GraduationCap, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 relative">
      {/* Main Footer */}
      <div className="glass-card border border-slate-200/50 rounded-t-3xl mx-4 md:mx-8 lg:mx-16 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent">
                    Research Summit 2025
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    SRMIST × IEEE Collaboration
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Join us for a transformative two-day research summit exploring the frontiers of technology 
                for sustainable and inclusive development. Connect with industry leaders, researchers, and innovators.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {[
                  { name: 'LinkedIn', href: '#', icon: '💼' },
                  { name: 'Twitter', href: '#', icon: '🐦' },
                  { name: 'Instagram', href: '#', icon: '📷' },
                  { name: 'YouTube', href: '#', icon: '🎥' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/50 border border-slate-200/50 rounded-xl flex items-center justify-center text-slate-700 hover:bg-white hover:border-slate-300 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    title={social.name}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4 text-lg">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Summit" },
                  { href: "/schedule", label: "Event Schedule" },
                  { href: "/speakers", label: "Speakers" },
                  { href: "/register", label: "Register Now" }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-slate-600 hover:text-blue-600 transition-colors duration-200 group/link"
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4 text-lg">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-600 text-sm">SRMIST Kattankulathur Campus</p>
                    <p className="text-slate-500 text-xs">Chengalpattu District, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <a 
                    href="mailto:summit2025@srmist.edu.in" 
                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    summit2025@srmist.edu.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <a 
                    href="tel:+911234567890" 
                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href="/register" 
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-600 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Two-Day Research Summit SRMIST-IEEE 2025. All rights reserved.
              </div>
              
              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <a href="/privacy" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
                <a href="/code-of-conduct" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Code of Conduct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}