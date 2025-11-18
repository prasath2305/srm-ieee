"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Upload, Send, CheckCircle, AlertCircle, ChevronDown, X, ExternalLink } from "lucide-react";

const TITLES = ["Prof.", "Dr.", "Mr.", "Mrs.", "Miss.", "Others"];
const DESIGNATIONS = ["Professor","Associate Professor","Assistant Professor","Industrialist","Research Scholar","UG Student","PG Student","School Student","Others"];
const PARTICIPATION = [
  "Discussion Round with IEEE Panel members",
  "Identifying Research Stars (UG / PG Students/ Research Scholars)",
  "Poster Competition",
  "Hands-on Workshop",
  "Innovative Project (School Students)",
  "Others",
];

// Actual WhatsApp group link - replace with your actual link
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/EpyDduaiemF85mp8qAyKaV?mode=wwt";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // "success" or "error"
  const [popupMessage, setPopupMessage] = useState("");

  const showNotification = (type, message) => {
    setPopupType(type);
    setPopupMessage(message);
    setShowPopup(true);
    
    // Auto hide after 5 seconds for success, 7 seconds for error
    setTimeout(() => {
      setShowPopup(false);
    }, type === "success" ? 5000 : 7000);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setFileError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const participation = form.getAll("participation");
    const file = form.get("payment");

    // Validate file is uploaded
    if (!file || file.size === 0) {
      setFileError("Payment proof is required");
      setLoading(false);
      showNotification("error", "Payment proof is required");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size must be less than 5MB");
      setLoading(false);
      showNotification("error", "File size must be less than 5MB");
      return;
    }

    let payment_proof_url = null;
    
    try {
      // Upload payment proof
      const key = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage.from("payment_proofs").upload(key, file);
      if (error) { 
        throw new Error("Payment proof upload failed");
      }
      payment_proof_url = supabase.storage.from("payment_proofs").getPublicUrl(key).data.publicUrl;

      const { error: insertError } = await supabase.from("registrations").insert({
        title: form.get("title"),
        name: form.get("name"),
        contact_number: form.get("contact"),
        email: form.get("email"),
        institution: form.get("institution"),
        designation: form.get("designation"),
        participation,
        whatsapp_link: WHATSAPP_GROUP_LINK,
        payment_proof_url,
      });

      if (insertError) throw new Error("Database insertion failed");

      // Success
      showNotification("success", "Registration submitted successfully! Click the button below to join our WhatsApp group.");
      e.target.reset(); 
      setFileName("");
      
    } catch (error) {
      showNotification("error", "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");
    
    if (file) {
      // Validate file size
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size must be less than 5MB");
        setFileName("");
        e.target.value = "";
        return;
      }
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Please upload an image (JPEG, PNG, GIF) or PDF file");
        setFileName("");
        e.target.value = "";
        return;
      }
      
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl relative">
      {/* Popup Notification */}
      {showPopup && (
        <div className={`fixed top-4 right-4 z-50 max-w-sm w-full animate-in slide-in-from-right duration-300 ${
          popupType === "success" 
            ? "bg-green-50 border border-green-200 text-green-800" 
            : "bg-red-50 border border-red-200 text-red-800"
        } rounded-xl shadow-lg p-4 backdrop-blur-sm`}>
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-5 h-5 mt-0.5 ${
              popupType === "success" ? "text-green-600" : "text-red-600"
            }`}>
              {popupType === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">
                {popupType === "success" ? "Success!" : "Error!"}
              </p>
              <p className="text-sm mt-1">{popupMessage}</p>
              {popupType === "success" && (
                <div className="mt-3">
                  <a
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Join WhatsApp Group
                  </a>
                  <p className="text-xs text-green-700 mt-2 text-center">
                    Click above to join our official group
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors ${
                popupType === "success" 
                  ? "text-green-600 hover:bg-green-600" 
                  : "text-red-600 hover:bg-red-600"
              }`}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-100 rounded-full blur-xl opacity-40"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Register for the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Summit</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Join us for an unforgettable research experience. Fill out the form below to secure your spot.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card border border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
        {/* Title + Name */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-2">Title *</label>
            <div className="relative">
              <select 
                name="title" 
                required 
                className="w-full rounded-xl border border-slate-300/50 bg-white/50 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer pr-10"
              >
                <option value="">Select Title</option>
                {TITLES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
            <input 
              name="name" 
              required 
              placeholder="Enter your full name" 
              className="w-full rounded-xl border border-slate-300/50 bg-white/50 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Contact Block */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number *</label>
            <input 
              name="contact" 
              required 
              placeholder="+91 12345 67890" 
              className="w-full rounded-xl border border-slate-300/50 bg-white/50 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="your@email.com" 
              className="w-full rounded-xl border border-slate-300/50 bg-white/50 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Institution / School *</label>
            <input 
              name="institution" 
              required 
              placeholder="Your institution name" 
              className="w-full rounded-xl border border-slate-300/50 bg-white/50 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Designation */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Designation *</label>
          <div className="relative">
            <select 
              name="designation" 
              required 
              className="w-full rounded-xl border border-slate-300/50 bg-white/50 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer pr-10"
            >
              <option value="">Select your designation</option>
              {DESIGNATIONS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Participation */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Choose Participation Options *</label>
          <div className="grid sm:grid-cols-2 gap-3">
            {PARTICIPATION.map(item => (
              <label 
                key={item} 
                className="flex gap-3 items-center p-4 rounded-xl border border-slate-300/50 bg-white/50 hover:bg-white/70 transition-all duration-200 cursor-pointer group"
              >
                <input 
                  type="checkbox" 
                  name="participation" 
                  value={item} 
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* WhatsApp Group Info */}
        <div className="mb-6">
          <div className="bg-green-50/50 border border-green-200/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="font-medium text-green-800">WhatsApp Group</span>
            </div>
            <p className="text-sm text-green-700 mb-3">
              After successful registration, join our official WhatsApp group for updates and discussions.
            </p>
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Join WhatsApp Group
            </a>
          </div>
        </div>

        {/* Payment - Mandatory */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Upload Payment Proof *
            {fileError && <span className="text-red-600 text-sm ml-2">({fileError})</span>}
          </label>
          <div className="relative">
            <input 
              type="file" 
              name="payment" 
              accept="image/*,application/pdf" 
              onChange={handleFileChange}
              required
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className={`border-2 border-dashed rounded-xl p-6 text-center bg-white/30 hover:bg-white/50 transition-all duration-200 group ${
              fileError ? "border-red-300 bg-red-50/30" : "border-slate-300/50"
            }`}>
              <Upload className={`w-8 h-8 mx-auto mb-2 transition-colors ${
                fileError ? "text-red-400" : "text-slate-400 group-hover:text-blue-500"
              }`} />
              <p className={`${
                fileError ? "text-red-600" : "text-slate-600"
              }`}>
                {fileName ? (
                  <span className="text-blue-600 font-medium flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {fileName}
                  </span>
                ) : (
                  "Click to upload payment proof (Image or PDF) *"
                )}
              </p>
              <p className="text-sm text-slate-500 mt-1">Max file size: 5MB</p>
            </div>
          </div>
          {fileError && (
            <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {fileError}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button 
          disabled={loading} 
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Registration
            </>
          )}
        </button>

        {/* Additional Info */}
        <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
          <p className="text-sm text-slate-600 text-center">
            📧 Need help? Contact us at{" "}
            <a href="mailto:summit2025@srmist.edu.in" className="text-blue-600 hover:text-blue-700 font-medium">
              summit2025@srmist.edu.in
            </a>
          </p>
        </div>
      </form>

      {/* Custom dropdown styles */}
      <style jsx>{`
        select {
          background-image: none;
        }
        select option {
          background: white;
          color: #374151;
          padding: 12px;
          margin: 4px 0;
        }
        select option:hover {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }
        select option:checked {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }
      `}</style>

      {/* Global styles for better dropdown appearance */}
      <style jsx global>{`
        select {
          background-image: none;
        }
        select option {
          background: white;
          color: #374151;
          padding: 12px;
          margin: 4px 0;
          border-radius: 8px;
        }
        select option:hover {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          color: white !important;
        }
        select option:checked {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          color: white !important;
        }
      `}</style>
    </section>
  );
}