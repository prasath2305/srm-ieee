// Updated AdminPage with refresh button
'use client';
import { useState } from 'react';
import AdminApproval from '../components/admin/AdminApproval';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [refreshKey, setRefreshKey] = useState(0); // Add refresh trigger

  const handleLogin = (e) => {
    e.preventDefault();
    // Check against environment variable
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleRefresh = () => {
    // Increment the key to force re-render of AdminApproval component
    setRefreshKey(prev => prev + 1);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="max-w-md w-full mx-4">
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Enter admin password"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-8" style={{ zIndex: 100 }}>
      <div className="container mx-auto px-4" style={{ zIndex: 101 }}>
        <div className="flex justify-between items-center mb-6">
          <Link href="/gallery" className="text-blue-400 hover:text-blue-300 flex items-center">
            ← Back to Gallery
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRefresh}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Refresh Submissions</span>
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
        <AdminApproval key={refreshKey} /> {/* Key prop forces re-render */}
      </div>
    </div>
  );
}