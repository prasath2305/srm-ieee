// src/app/upload/page.jsx
'use client';
import { useState } from 'react';
import ImageUpload from '../components/gallery/ImageUpload';
import Link from 'next/link';

export default function UploadPage() {
  // Generate a unique user ID for anonymous users
  const [anonymousUserId] = useState(() => {
    // Generate a unique ID for this browser session
    if (typeof window !== 'undefined') {
      let userId = localStorage.getItem('anonymousUserId');
      if (!userId) {
        userId = 'anonymous_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('anonymousUserId', userId);
      }
      return userId;
    }
    return 'anonymous_' + Math.random().toString(36).substr(2, 9);
  });

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        <Link href="/gallery" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Back to Gallery
        </Link>
        <ImageUpload userId={anonymousUserId} />
      </div>
    </div>
  );
}