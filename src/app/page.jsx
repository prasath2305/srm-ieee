'use client';

import Link from "next/link";
import { 
  MapPin, 
  Calendar,
  Mic,
  Star,
  Layout,
  Users,
  Wrench,
  Lightbulb,
  Clock,
  ArrowRight,
  Trophy,
  GraduationCap,
  Sparkles,
  Zap,
  BookOpen,
  Presentation,
  ExternalLink,
  Award,
  Building2
} from "lucide-react";
import ClickSpark from "./components/Clickspark";

export default function Home() {
  return (
    <ClickSpark
      sparkColor='#000000'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <main className="container mx-auto px-4 pt-16 pb-16 relative overflow-hidden">
        
        {/* Enhanced Background with Better Z-index */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 z-0"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10 -translate-y-48 translate-x-48 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 translate-y-48 -translate-x-48 z-0"></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-500 rounded-full opacity-10 animate-float z-0"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-15 animate-float z-0" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-amber-500 rounded-full opacity-10 animate-float z-0" style={{animationDelay: '2.5s'}}></div>
        </div>

        {/* HERO SECTION */}
        <header className="text-center max-w-4xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Zap className="w-4 h-4" />
            December 11-12, 2025 • SRMIST Kattankulathur
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Two-Day Research{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Summit 2025
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </span>
          </h1>
          
          <div className="relative inline-block max-w-2xl z-10 mb-8">
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

          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/60 shadow-sm">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-800">SRMIST Kattankulathur Campus</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/60 text-slate-800 rounded-xl font-semibold hover:border-blue-400/60 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Learn More
            </Link>
          </div>
        </header>

        {/* ENHANCED SEPARATOR */}
        <div className="relative my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
              <span className="text-slate-800 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Event Highlights
              </span>
            </div>
          </div>
        </div>

        {/* IMPROVED HIGHLIGHTS SECTION */}
        <section className="max-w-7xl mx-auto relative z-10 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Event <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
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
        </section>

        {/* ACTIVITIES GRID */}
        <section className="max-w-7xl mx-auto relative z-10 mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Seminar Sessions", icon: Mic, description: "Expert-led technical sessions and knowledge sharing", color: "from-blue-500 to-cyan-500" },
              { title: "Research Stars", icon: Star, description: "Spotlight on emerging researchers and innovators", color: "from-amber-500 to-orange-500" },
              { title: "Poster Competition", icon: Presentation, description: "Theme-based research presentations", color: "from-emerald-500 to-green-500" },
              { title: "IEEE Panel Discussion", icon: Users, description: "Industry and academic expert insights", color: "from-violet-500 to-purple-500" },
              { title: "Hands-on Workshops", icon: Wrench, description: "Practical skill-building sessions", color: "from-orange-500 to-red-500" },
              { title: "Project Expo", icon: Lightbulb, description: "Showcase of groundbreaking innovations", color: "from-cyan-500 to-blue-500" }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 hover:border-slate-300/80 transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-700 text-sm flex-grow relative z-10 font-medium">{item.description}</p>
                <div className={`w-0 group-hover:w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 transition-all duration-300 relative z-10`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* SCHEDULE SECTION */}
        <section className="max-w-7xl mx-auto relative z-10 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Event <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Schedule</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="relative group">
              <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="flex items-center gap-3 text-white relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <h3 className="font-bold text-xl">Day 1 — December 8, 2025</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/80 h-32 flex items-center justify-center border border-blue-200/60">
                    <div className="text-center text-blue-700">
                      <BookOpen className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-bold">Day 1 Schedule</p>
                    </div>
                  </div>
                  
                  <ul className="text-slate-800 space-y-4">
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100/60">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-slate-900">Discussion Round with IEEE Panel</span>
                        <p className="text-sm text-slate-700 mt-1 font-medium">Interactive session with industry experts</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/30 border border-blue-100/40">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-slate-900">Seminar Sessions</span>
                        <p className="text-sm text-slate-700 mt-1 font-medium">Technical talks and knowledge sharing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/30 border border-blue-100/40">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-slate-900">Innovative Project Expo</span>
                        <p className="text-sm text-slate-700 mt-1 font-medium">Showcase by school students</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="relative group">
              <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="flex items-center gap-3 text-white relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <h3 className="font-bold text-xl">Day 2 — December 9, 2025</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/80 h-32 flex items-center justify-center border border-purple-200/60">
                    <div className="text-center text-purple-700">
                      <Trophy className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-bold">Day 2 Schedule</p>
                    </div>
                  </div>
                  
                  <ul className="text-slate-800 space-y-4">
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100/60">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-slate-900">Identifying Research Stars</span>
                        <p className="text-sm text-slate-700 mt-1 font-medium">UG / PG / Research Scholars competition</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 rounded-lg bg-purple-50/30 border border-purple-100/40">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-slate-900">Theme-Based Poster Competition</span>
                        <p className="text-sm text-slate-700 mt-1 font-medium">Research presentation and evaluation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENHANCED CALL TO ACTION */}
        <section className="text-center mt-20 relative z-10">
          <div className="relative inline-block">
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-2xl transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-white animate-pulse" />
                <p className="text-white font-bold text-lg">Limited Seats • First-Come-First-Serve</p>
              </div>
              <p className="text-blue-100 mb-8 text-lg font-medium">
                Max 250 participants. Secure your slot early.
              </p>
              
              <div className="mb-6 rounded-xl overflow-hidden bg-white/20 h-24 flex items-center justify-center border border-white/30">
                <div className="text-center text-white">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-bold">Join 250+ Researchers & Innovators</p>
                </div>
              </div>
              
              <Link 
                href="/register" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition duration-300 text-lg"
              >
                <span>Register Now</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

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
      </main>
    </ClickSpark>
  );
}