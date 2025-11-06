"use client";
import { useState } from "react";
import { Download, Eye, Lock, Users, FileText, Building, Calendar, Mail } from "lucide-react";

export default function AdminPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function load(e) {
    e.preventDefault();
    setErr(null); 
    setLoading(true);
    const passcode = e.currentTarget.passcode.value;
    const res = await fetch("/api/admin/registrations", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passcode })
    });
    if (!res.ok) { 
      setErr("Unauthorized or server error"); 
      setLoading(false); 
      return; 
    }
    const { rows } = await res.json();
    setRows(rows); 
    setLoading(false);
  }

  function downloadCSV() {
    const headers = ["id","title","name","contact_number","email","institution","designation","participation","whatsapp_link","payment_proof_url","created_at"];
    const csv = [headers.join(",")]
      .concat(rows.map(r => [
        r.id, r.title||"", r.name, r.contact_number, r.email, r.institution,
        r.designation||"", (r.participation||[]).join("; "), r.whatsapp_link||"", r.payment_proof_url||"", r.created_at
      ].map(x => `"${String(x).replaceAll('"','""')}"`).join(",")))
      .join("\n");
    const blob = new Blob([csv], { type:"text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); 
    a.href = url; 
    a.download = `registrations_${new Date().toISOString().slice(0,10)}.csv`; 
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-100 rounded-full blur-xl opacity-40"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Admin <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dashboard</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Manage and monitor registration data for the Research Summit 2025
        </p>
      </div>

      {/* Access Form */}
      <div className="glass-card border border-slate-200/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Secure Access</h2>
            <p className="text-slate-600">Enter admin passcode to view registration data</p>
          </div>
        </div>

        <form onSubmit={load} className="flex flex-col sm:flex-row items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-2">Admin Passcode</label>
            <div className="relative">
              <input 
                name="passcode" 
                type="password" 
                className="w-full rounded-xl border border-slate-300/50 bg-white/50 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-10"
                placeholder="Enter secure passcode"
                required
              />
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>
          <button 
            disabled={loading}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </>
            ) : (
              <>
                <Users className="w-4 h-4" />
                Load Data
              </>
            )}
          </button>
        </form>

        {err && (
          <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 flex items-center gap-3">
            <Lock className="w-5 h-5 text-red-600" />
            <span className="font-medium">{err}</span>
          </div>
        )}
      </div>

      {/* Statistics Cards */}
      {rows.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card border border-slate-200/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{rows.length}</p>
                <p className="text-sm text-slate-600">Total Registrations</p>
              </div>
            </div>
          </div>

          <div className="glass-card border border-slate-200/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {new Set(rows.map(r => r.institution)).size}
                </p>
                <p className="text-sm text-slate-600">Unique Institutions</p>
              </div>
            </div>
          </div>

          <div className="glass-card border border-slate-200/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {rows.filter(r => r.payment_proof_url).length}
                </p>
                <p className="text-sm text-slate-600">With Payment Proof</p>
              </div>
            </div>
          </div>

          <div className="glass-card border border-slate-200/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {new Set(rows.map(r => r.designation)).size}
                </p>
                <p className="text-sm text-slate-600">Designation Types</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Data Table */}
      {rows.length > 0 && (
        <div className="glass-card border border-slate-200/50 rounded-2xl backdrop-blur-sm shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Registration Data</h3>
                <p className="text-slate-600">All submitted registrations</p>
              </div>
              <button 
                onClick={downloadCSV}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50/80 border-b border-slate-200/50">
                <tr>
                  <th className="p-4 text-left font-semibold text-slate-700">Name</th>
                  <th className="p-4 text-left font-semibold text-slate-700">Contact</th>
                  <th className="p-4 text-left font-semibold text-slate-700">Institution</th>
                  <th className="p-4 text-left font-semibold text-slate-700">Designation</th>
                  <th className="p-4 text-left font-semibold text-slate-700">Participation</th>
                  <th className="p-4 text-left font-semibold text-slate-700">Payment</th>
                  <th className="p-4 text-left font-semibold text-slate-700">Registered</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, index) => (
                  <tr 
                    key={r.id} 
                    className={`border-b border-slate-200/30 transition-colors hover:bg-white/50 ${
                      index % 2 === 0 ? 'bg-white/30' : 'bg-slate-50/30'
                    }`}
                  >
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-slate-900">
                          {r.title ? `${r.title} ` : ""}{r.name}
                        </div>
                        <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                          <Mail className="w-3 h-3" />
                          {r.email}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-700">{r.contact_number}</td>
                    <td className="p-4 text-slate-700">{r.institution}</td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium">
                        {r.designation || "Not specified"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1 max-w-xs">
                        {(r.participation || []).map((item, i) => (
                          <span 
                            key={i}
                            className="inline-block px-2 py-1 bg-purple-100 text-purple-800 rounded-lg text-xs font-medium mr-1 mb-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      {r.payment_proof_url ? (
                        <a 
                          className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                          href={r.payment_proof_url} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-3 h-3" />
                          View
                        </a>
                      ) : (
                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-slate-600 text-sm">
                      {new Date(r.created_at).toLocaleDateString()}
                      <br />
                      <span className="text-slate-500">
                        {new Date(r.created_at).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!rows.length && !loading && (
        <div className="glass-card border border-slate-200/50 rounded-2xl p-12 backdrop-blur-sm text-center">
          <Users className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No Data Loaded</h3>
          <p className="text-slate-600">Enter the admin passcode above to view registration data</p>
        </div>
      )}
    </section>
  );
}