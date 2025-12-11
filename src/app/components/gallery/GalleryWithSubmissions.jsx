// Updated GalleryWithSubmissions.jsx without fallback images
'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import DomeGallery from './DomeGallery';

export default function GalleryWithSubmissions() {
  const [approvedImages, setApprovedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Memoized fetch function to prevent unnecessary re-renders
  const fetchApprovedImages = useCallback(async () => {
    try {
      console.log('Fetching approved images...');
      
      const { data, error } = await supabase
        .from('submissions')
        .select('image_url, alt_text, created_at')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Database fetch error:', error);
        throw error;
      }

      console.log('Fetched data:', data);

      if (data && data.length > 0) {
        const images = data.map(item => ({
          src: item.image_url,
          alt: item.alt_text || 'Gallery image'
        }));
        setApprovedImages(images);
        setLastUpdated(new Date());
        console.log('Set approved images:', images.length);
      } else {
        // No approved images - empty array
        console.log('No approved images found');
        setApprovedImages([]);
        setLastUpdated(new Date());
      }

    } catch (err) {
      console.error('Error fetching approved images:', err);
      setError(err.message);
      // Empty array on error
      setApprovedImages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch and setup auto-refresh
  useEffect(() => {
    fetchApprovedImages();

    // Set up auto-refresh every 10 seconds
    const intervalId = setInterval(() => {
      console.log('Auto-refreshing gallery...');
      fetchApprovedImages();
    }, 10000); // 10 seconds

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [fetchApprovedImages]);

  // Manual refresh function
  const handleManualRefresh = () => {
    setLoading(true);
    fetchApprovedImages();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error loading gallery: {error}</p>
          <button 
            onClick={handleManualRefresh}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Show empty state if no approved images
  if (approvedImages.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <div className="mb-4 text-gray-400">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">No Images Yet</h2>
          <p className="text-gray-400 mb-4">Approved images will appear here automatically</p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Auto-refresh enabled</span>
            </div>
            <button
              onClick={handleManualRefresh}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded flex items-center space-x-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <DomeGallery 
        images={approvedImages}
        fit={0.8}
        grayscale={false}
        dragDampening={5}
      />
      
      {/* Auto-refresh status indicator */}
      <div className="fixed -bottom-6 left-4 bg-black bg-opacity-70 text-white p-3 text-xs rounded-lg border border-gray-600">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Auto-refresh enabled</span>
          </div>
          <div className="text-gray-400">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          <button
            onClick={handleManualRefresh}
            className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded flex items-center space-x-1 text-xs"
            title="Refresh now"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Refresh</span>
          </button>
        </div>
        <div className="mt-1 text-gray-400">
          Showing {approvedImages.length} image{approvedImages.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}