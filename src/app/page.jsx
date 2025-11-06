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
  Sparkles
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
    <main className="container mx-auto px-4 pt-24 pb-16 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        {/* Animated floating shapes */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* HERO SECTION */}
      <header className="text-center max-w-4xl mx-auto animate-fade-in-up relative z-10">
        <div className="relative">
          {/* Date Badge with sparkle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-200/50 mb-6 relative">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">December 8-9, 2025</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Two-Day Research
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Summit 2025
            </span>
          </h1>

          {/* Collaboration Badge */}
          <div className="mt-6 inline-flex flex-col items-center">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-slate-200/50">
              <span className="text-lg font-semibold gradient-text">
                SRMIST × IEEE Collaboration
              </span>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mt-3"></div>
          </div>

          {/* Theme */}
          <div className="mt-8 p-6 rounded-2xl glass-card border border-slate-200/50 max-w-2xl mx-auto">
            <p className="text-slate-700 text-lg leading-relaxed">
              Theme: <em className="font-semibold text-slate-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">"Frontiers in Technology for Sustainable & Inclusive Development"</em>
            </p>
          </div>

          {/* Location */}
          <p className="mt-6 text-slate-700 font-medium flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              SRMIST Kattankulathur Campus
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 glass-card border-2 border-slate-300/50 text-slate-700 rounded-xl font-semibold hover:border-blue-300/50 hover:text-blue-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 glass-card">
          <div className="bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-cyan-100/50 h-64 md:h-80 flex items-center justify-center relative">
            <div className="text-center text-slate-600 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl font-bold text-slate-800">Research Summit 2025</p>
              <p className="text-sm mt-2 text-slate-600">SRMIST × IEEE Collaboration</p>
            </div>
          </div>
        </div>
      </header>

      {/* SEPARATOR WITH STYLE */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-6 py-2 glass-card rounded-full border border-slate-200/50">
            <span className="text-slate-700 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              Event Highlights
            </span>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS SECTION */}
      <section className="container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Event <span className="gradient-text">Highlights</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Seminar Sessions", icon: Mic, description: "Expert-led technical sessions", color: "from-blue-500 to-cyan-500" },
            { title: "Identifying Research Stars", icon: Star, description: "Spotlight on emerging researchers", color: "from-amber-500 to-orange-500" },
            { title: "Poster Competition", icon: Layout, description: "Theme-based research presentations", color: "from-emerald-500 to-green-500" },
            { title: "IEEE Panel Discussion", icon: Users, description: "Industry and academic insights", color: "from-violet-500 to-purple-500" },
            { title: "Hands-on Workshops", icon: Wrench, description: "Practical skill-building sessions", color: "from-orange-500 to-red-500" },
            { title: "Innovative Project Expo", icon: Lightbulb, description: "Showcase of groundbreaking projects", color: "from-cyan-500 to-blue-500" }
          ].map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl glass-card border border-slate-200/50 hover:border-slate-300/70 transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-800 font-semibold text-lg mb-2 relative z-10">{item.title}</h3>
              <p className="text-slate-600 text-sm flex-grow relative z-10">{item.description}</p>
              <div className={`w-0 group-hover:w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 transition-all duration-300 relative z-10`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="relative my-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300/50"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-slate-200/50">
            <span className="text-slate-700 text-sm font-medium">Event Schedule</span>
          </div>
        </div>
      </div>

      {/* SCHEDULE SECTION */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Day 1 */}
        <div className="group">
          <div className="rounded-2xl border border-slate-300/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="font-bold text-xl">Day 1 — December 8, 2025</h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Schedule Image Placeholder */}
              <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 h-32 flex items-center justify-center border border-blue-200/50">
                <div className="text-center text-blue-600">
                  <Calendar className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Day 1 Schedule</p>
                </div>
              </div>
              
              <ul className="text-slate-700 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-slate-800">Discussion Round with IEEE Panel Members</span>
                    <p className="text-sm text-slate-600 mt-1">Interactive session with industry experts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-slate-800">Seminar Sessions</span>
                    <p className="text-sm text-slate-600 mt-1">Technical talks and knowledge sharing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-slate-800">Innovative Project Expo</span>
                    <p className="text-sm text-slate-600 mt-1">Showcase by school students</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="group">
          <div className="rounded-2xl border border-slate-300/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="font-bold text-xl">Day 2 — December 9, 2025</h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Schedule Image Placeholder */}
              <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 h-32 flex items-center justify-center border border-purple-200/50">
                <div className="text-center text-purple-600">
                  <Calendar className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Day 2 Schedule</p>
                </div>
              </div>
              
              <ul className="text-slate-700 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-slate-800">Identifying Research Stars</span>
                    <p className="text-sm text-slate-600 mt-1">UG / PG / Research Scholars competition</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-slate-800">Theme-Based Poster Competition</span>
                    <p className="text-sm text-slate-600 mt-1">Research presentation and evaluation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mt-24 text-center">
        <div className="relative inline-block max-w-2xl">
          <div className="border border-slate-300/50 bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm px-10 py-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-brand-600 animate-pulse" />
              <p className="text-brand-800 font-bold text-lg">Limited Seats • First-Come-First-Serve</p>
            </div>
            <p className="text-slate-600 mb-4">Max 250 participants. Secure your slot early.</p>
            
            {/* CTA Image Placeholder */}
            <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 h-24 flex items-center justify-center border border-slate-300/50">
              <div className="text-center text-slate-600">
                <Users className="w-8 h-8 mx-auto mb-2 text-slate-500" />
                <p className="text-sm font-medium">Join 250+ Researchers & Innovators</p>
              </div>
            </div>
            
            <Link 
              href="/register" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    </ClickSpark>
  );
}