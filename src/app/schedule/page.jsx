'use client';

import { Calendar, Clock, Users, Mic, Trophy, Star, Wrench, BookOpen, ArrowRight, MapPin, GamepadIcon, Lightbulb, MessageCircle } from "lucide-react";

export default function Schedule() {
  const scheduleData = [
    {
      day: "Day 1",
      date: "December 11, 2025",
      icon: GamepadIcon,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      events: [
        {
          time: "09:00 AM - 10:30 AM",
          title: "Gaming / Ice Breaking Session",
          description: "Interactive ice breaking activities based on Sustainable Development Goals",
          icon: GamepadIcon,
          iconColor: "text-green-600"
        },
        {
          time: "10:30 AM - 12:30 PM",
          title: "Workshop on Climate Change & SDG",
          description: "Hands-on workshop focusing on climate change and sustainable development goals",
          icon: Wrench,
          iconColor: "text-emerald-600"
        },
        {
          time: "02:00 PM - 04:00 PM",
          title: "Innovative Project Expo",
          description: "Showcase of innovative projects by school students",
          icon: Lightbulb,
          iconColor: "text-green-500"
        }
      ]
    },
    {
      day: "Day 2",
      date: "December 12, 2025",
      icon: Trophy,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
      events: [
        {
          time: "09:30 AM - 11:00 AM",
          title: "Technical Talk - Renewable Power Energy",
          description: "Expert talk on renewable energy sources and technologies",
          icon: Mic,
          iconColor: "text-purple-600"
        },
        {
          time: "11:30 AM - 01:30 PM",
          title: "Technical Workshop - Data Oriented AI",
          description: "Hands-on workshop on data-centric artificial intelligence",
          icon: Wrench,
          iconColor: "text-purple-600"
        },
        {
          time: "02:00 PM - 04:00 PM",
          title: "Identifying Research Stars",
          description: "Competition for UG/PG Students and Research Scholars",
          icon: Star,
          iconColor: "text-pink-600"
        },
        {
          time: "04:00 PM - 05:00 PM",
          title: "Poster Competition & Panel Discussion",
          description: "Research poster presentation followed by expert panel discussion",
          icon: MessageCircle,
          iconColor: "text-purple-600"
        }
      ]
    },
    {
      day: "Additional Events",
      date: "December 12, 2025",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      borderColor: "border-amber-200",
      bgColor: "bg-amber-50",
      events: [
        {
          time: "Throughout Day 2",
          title: "Webinar Sessions",
          description: "Online webinar sessions running parallel to main events",
          icon: Users,
          iconColor: "text-amber-600"
        }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50/20 via-white to-purple-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-10 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 translate-y-48 -translate-x-48"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-green-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-15 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-amber-500 rounded-full opacity-10 animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6 border border-green-200">
            <Calendar className="w-4 h-4" />
            December 11-12, 2025 • SRMIST Kattankulathur
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Event{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Schedule
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            Two days of innovation, technical learning, and sustainable development focus. Explore the complete timeline.
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-purple-500 to-amber-500 rounded-full hidden lg:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 lg:space-y-16">
              {scheduleData.map((day, dayIndex) => (
                <div key={day.day} className="relative">
                  {/* Day Header - Centered */}
                  <div className="flex justify-center mb-12">
                    <div className={`inline-flex items-center gap-4 px-8 py-6 rounded-2xl ${day.bgColor} border ${day.borderColor} backdrop-blur-sm relative`}>
                      {/* Timeline dot for day header */}
                      <div className="hidden lg:block absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-6 h-6 bg-white border-4 rounded-full z-10 shadow-lg" style={{ borderColor: day.color.includes('green') ? '#10b981' : day.color.includes('purple') ? '#8b5cf6' : '#f59e0b' }}></div>
                      
                      <div className={`w-14 h-14 bg-gradient-to-r ${day.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <day.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900">{day.day}</h2>
                        <p className="text-slate-700 font-medium">{day.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Events with Zig-Zag Pattern */}
                  <div className="space-y-8 lg:space-y-12">
                    {day.events.map((event, eventIndex) => {
                      // Pattern: Day 1 starts from left, Day 2 from right, Additional Events from left
                      let isLeft;
                      if (day.day === "Day 1") {
                        isLeft = eventIndex % 2 === 0; // Left, Right, Left pattern
                      } else if (day.day === "Day 2") {
                        isLeft = eventIndex % 2 === 1; // Right, Left, Right, Left pattern
                      } else {
                        isLeft = false; // Additional Events always on left
                      }
                      
                      return (
                        <div key={eventIndex} className="relative">
                          {/* Event Card */}
                          <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                            isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                          }`}>
                            {/* Icon Side - Close to center line */}
                            <div className={`flex-1 flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                              <div className={`w-16 h-16 bg-gradient-to-r ${day.color} rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 ${
                                isLeft ? 'lg:mr-8' : 'lg:ml-8'
                              }`}>
                                <event.icon className="w-8 h-8 text-white" />
                              </div>
                            </div>

                            {/* Content Side */}
                            <div className={`flex-1 ${isLeft ? 'lg:text-left lg:pl-8' : 'lg:text-right lg:pr-8'}`}>
                              <div className={`inline-block p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 max-w-md ${
                                isLeft ? 'lg:ml-0' : 'lg:mr-0'
                              }`}>
                                <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                  <Clock className="w-4 h-4 text-slate-500" />
                                  <span className="text-sm font-semibold text-slate-600">{event.time}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                                <p className="text-slate-700 leading-relaxed font-medium">{event.description}</p>
                                
                                {/* Progress bar effect */}
                                <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full transition-all duration-500"></div>
                              </div>
                            </div>
                          </div>

                          {/* Mobile Timeline Dot */}
                          <div className="lg:hidden flex justify-center my-6">
                            <div className={`w-4 h-4 bg-gradient-to-r ${day.color} rounded-full border-2 border-white shadow-md`}></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Venue & Additional Info */}
        <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-2 gap-8">
          {/* Venue Information */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-green-200" />
                Venue
              </h3>
              <div className="space-y-3 text-green-100">
                <p className="font-semibold text-white">SRMIST Kattankulathur Campus</p>
                <p className="font-medium">Chengalpattu District, Tamil Nadu</p>
                <p className="text-sm">Main Conference Halls & Workshop Rooms</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <ArrowRight className="w-6 h-6 text-purple-400" />
                Key Focus Areas
              </h3>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="font-medium">Sustainable Development Goals (SDG)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="font-medium">Renewable Energy & AI Technologies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="font-medium">Student Innovation & Research</span>
                </li>
              </ul>
            </div>
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