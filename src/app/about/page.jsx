import { MapPin, Award, Users, Calendar, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-100 rounded-full blur-xl opacity-40"></div>

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          About the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Summit</span>
        </h1>
        <div className="glass-card border border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-lg text-slate-700 leading-relaxed">
            Theme: <em className="font-semibold text-slate-800">"Frontiers in Technology for Sustainable & Inclusive Development."</em>
          </p>
          <p className="text-slate-600 mt-4">
            Organized by SRM Institute of Science & Technology (Kattankulathur) in collaboration with 
            IEEE Student Branch & IEEE Chapter.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Chief Guest & Details */}
        <div className="space-y-8">
          {/* Chief Guest Card */}
          <div className="group">
            <div className="glass-card border border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Chief Guest</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-bold text-slate-800 mb-2">Dr. Ramalatha Marimuthu</p>
                  <p className="text-slate-600 font-medium">Director, iExplore Foundation</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Ombudsman, IEEE Computer Society (2022 & 2023)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Secretary, IEEE Computer Society (2021)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Renowned Researcher & Industry Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="glass-card border border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Event Details</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-slate-200/50">
                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">December 8-9, 2025</p>
                  <p className="text-sm text-slate-600">Two full days of research excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-slate-200/50">
                <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">250+ Participants</p>
                  <p className="text-sm text-slate-600">Researchers, Students & Industry Experts</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-slate-200/50">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">Multiple Tracks</p>
                  <p className="text-sm text-slate-600">Seminars, Workshops & Competitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Venue & Map */}
        <div className="space-y-8">
          <div className="group">
            <div className="glass-card border border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Venue</h2>
                  <p className="text-slate-600 mt-1">SRMIST Kattankulathur Campus</p>
                </div>
              </div>

              {/* Map Container */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps?q=SRM+Institute+of+Science+and+Technology+Kattankulathur&output=embed"
                  className="w-full h-64 md:h-80"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Additional Venue Info */}
              <div className="mt-6 p-4 bg-white/50 rounded-xl border border-slate-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">SRMIST Kattankulathur</p>
                    <p className="text-sm text-slate-600">Chengalpattu District, Tamil Nadu</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=SRM+Institute+of+Science+and+Technology+Kattankulathur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Info */}
          <div className="glass-card border border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Collaboration</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">IEEE Student Branch</p>
                  <p className="text-sm text-slate-600">Student-led technical community</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200/50">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">IEEE Chapter</p>
                  <p className="text-sm text-slate-600">Professional technical society</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="inline-block glass-card border border-slate-200/50 rounded-2xl px-8 py-6 backdrop-blur-sm">
          <p className="text-lg font-semibold text-slate-800 mb-2">Ready to be part of this transformative experience?</p>
          <p className="text-slate-600 mb-4">Join researchers and innovators from across the country</p>
          <a 
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Register Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}