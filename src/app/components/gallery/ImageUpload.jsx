// src/components/gallery/ImageUpload.jsx
'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function ImageUpload({ userId, onUploadComplete }) {
  const [uploading, setUploading] = useState(false);
  const [altText, setAltText] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileSelect = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Create preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

    } catch (error) {
      console.error('Error selecting file:', error);
      alert('Error selecting file');
    }
  };

  // Updated handleUpload function for new setup
const handleUpload = async () => {
  const fileInput = document.getElementById('image-upload');
  const file = fileInput.files[0];
  
  if (!file || !altText.trim()) {
    alert('Please select an image and provide a description');
    return;
  }

  try {
    setUploading(true);

    // Upload to Supabase Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `submissions/${fileName}`;

    console.log('Starting upload...', filePath);

    // Upload the file
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('submissions')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      throw new Error(`Upload failed: ${uploadError.message}`);
    }

    console.log('Upload successful:', uploadData);

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('submissions')
      .getPublicUrl(filePath);

    console.log('Public URL:', publicUrl);

    // Save to database
    const { data: dbData, error: dbError } = await supabase
      .from('submissions')
      .insert([
        {
          user_id: userId,
          image_url: publicUrl,
          alt_text: altText.trim(),
          status: 'pending'
        }
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log('Database insert successful:', dbData);

    // Success!
    setAltText('');
    setPreviewUrl('');
    fileInput.value = '';
    
    alert('✅ Image submitted successfully! It will be reviewed by an admin.');

    if (onUploadComplete) {
      onUploadComplete();
    }

  } catch (error) {
    console.error('Full error:', error);
    alert(`❌ Error: ${error.message}`);
  } finally {
    setUploading(false);
  }
};
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-md border border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-white">Submit Image to Gallery</h2>
      <p className="text-gray-400 text-sm mb-4">
        Anyone can submit images! They will be reviewed by an admin before appearing in the gallery.
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Image
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            disabled={uploading}
          />
        </div>

        {previewUrl && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Preview
            </label>
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md border border-gray-600"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Image Description
          </label>
          <input
            type="text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            placeholder="Describe your image..."
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            disabled={uploading}
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading || !previewUrl || !altText.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {uploading ? 'Uploading...' : 'Submit for Review'}
        </button>
      </div>
    </div>
  );
}