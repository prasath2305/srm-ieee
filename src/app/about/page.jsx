'use client';

import { MapPin, Award, Users, Calendar, ExternalLink, Star, Zap, Mic, Building2, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 relative overflow-hidden">
      {/* Enhanced background with proper z-index */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10 -translate-y-48 translate-x-48 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 translate-y-48 -translate-x-48 z-0"></div>

      {/* Floating elements with lower opacity */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-500 rounded-full opacity-10 animate-float z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-15 animate-float z-0" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-amber-500 rounded-full opacity-10 animate-float z-0" style={{animationDelay: '2.5s'}}></div>

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
          <Zap className="w-4 h-4" />
          December 8-9, 2025 • SRMIST Kattankulathur
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          About the{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Summit
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </span>
        </h1>
        
        <div className="relative inline-block max-w-2xl z-10">
          <div className="relative z-20 px-8 py-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm">
            <p className="text-xl text-slate-800 leading-relaxed font-medium mb-4">
              "Frontiers in Technology for Sustainable & Inclusive Development"
            </p>
            <p className="text-slate-700 text-lg">
              Organized by SRM Institute of Science & Technology in collaboration with{" "}
              <span className="font-semibold text-blue-700">IEEE Student Branch & IEEE Chapter</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Chief Guest Section */}
        <div className="relative mb-20">
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-amber-100 rounded-full blur-xl opacity-30 z-0"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            {/* Visual Element */}
            <div className="flex-1 relative">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-6 shadow-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500 rounded-2xl -rotate-6 shadow-lg opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                    <Mic className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4 border border-amber-200">
                <Award className="w-4 h-4" />
                Featured Speaker
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Chief Guest:{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Dr. Ramalatha Marimuthu
                </span>
              </h2>
              
              <p className="text-slate-700 text-lg mb-6 font-medium">
                Director, iExplore Foundation • Former IEEE Computer Society Ombudsman & Secretary
              </p>

              <div className="space-y-3 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                {[
                  "Ombudsman, IEEE Computer Society (2022 & 2023)",
                  "Secretary, IEEE Computer Society (2021)",
                  "Renowned Researcher & Industry Leader"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Event Details - Timeline Style */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: Calendar,
                gradient: "from-blue-500 to-cyan-500",
                title: "December 8-9, 2025",
                description: "Two full days of research excellence and innovation"
              },
              {
                icon: Users,
                gradient: "from-purple-500 to-pink-500",
                title: "250+ Participants",
                description: "Researchers, Students & Industry Experts"
              },
              {
                icon: Award,
                gradient: "from-amber-500 to-orange-500",
                title: "Multiple Tracks",
                description: "Seminars, Workshops & Competitions"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Connecting line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-200 to-slate-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors z-0"></div>
                )}
                
                <div className="relative text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4 border border-green-200">
                <MapPin className="w-4 h-4" />
                Event Venue
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                SRMIST{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Kattankulathur Campus
                </span>
              </h2>
              
              <p className="text-slate-700 text-lg mb-6 font-medium">
                Experience innovation and collaboration at one of India's premier educational institutions, 
                nestled in the vibrant Chengalpattu District of Tamil Nadu.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-800 font-semibold">Premier Institution</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-800 font-semibold">Academic Excellence</span>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=SRM+Institute+of+Science+and+Technology+Kattankulathur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <MapPin className="w-5 h-5" />
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Map with organic shape */}
            <div className="flex-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300 border border-white/50">
                <iframe
                  src="https://www.google.com/maps?q=SRM+Institute+of+Science+and+Technology+Kattankulathur&output=embed"
                  className="w-full h-80"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Partners */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-lg">IEEE Student Branch</p>
                <p className="text-slate-700 text-sm">Student-led technical community</p>
              </div>
            </div>
            
            <div className="text-slate-400 text-2xl font-light">×</div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-lg">IEEE Chapter</p>
                <p className="text-slate-700 text-sm">Professional technical society</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 relative z-10">
        <div className="relative inline-block">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-2xl transform hover:-translate-y-1 transition duration-300">
            <p className="text-2xl font-bold text-white mb-4">
              Ready to be part of this transformative experience?
            </p>
            <p className="text-blue-100 mb-8 text-lg font-medium">
              Join researchers and innovators from across the country
            </p>
            <a 
              href="/register"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition duration-300 text-lg"
            >
              <span>Register Now</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
}