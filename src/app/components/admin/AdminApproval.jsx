// Updated AdminApproval.jsx with refresh support
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function AdminApproval() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
      setLastRefreshed(new Date());
    } catch (error) {
      console.error('Error fetching submissions:', error);
      alert('Error loading submissions');
    } finally {
      setLoading(false);
    }
  };

  const updateSubmissionStatus = async (submissionId, status) => {
    try {
      const { error } = await supabase
        .from('submissions')
        .update({ 
          status, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', submissionId);

      if (error) throw error;

      // Refresh the list to show updated status
      await fetchSubmissions();
      
    } catch (error) {
      console.error('Error updating submission:', error);
      alert('Error updating submission');
    }
  };

  const deleteSubmission = async (submissionId) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      // First get the submission to find the image URL
      const { data: submission } = await supabase
        .from('submissions')
        .select('image_url')
        .eq('id', submissionId)
        .single();

      if (submission) {
        // Extract filename from URL and delete from storage
        const urlParts = submission.image_url.split('/');
        const fileName = urlParts[urlParts.length - 1];
        
        if (fileName) {
          const { error: storageError } = await supabase.storage
            .from('submissions')
            .remove([fileName]);
          
          if (storageError) {
            console.error('Error deleting image from storage:', storageError);
          }
        }
      }

      // Delete from database
      const { error } = await supabase
        .from('submissions')
        .delete()
        .eq('id', submissionId);

      if (error) throw error;

      // Refresh the list
      await fetchSubmissions();
      alert('Submission deleted successfully');
      
    } catch (error) {
      console.error('Error deleting submission:', error);
      alert('Error deleting submission');
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        <p className="text-white mt-2">Loading submissions...</p>
      </div>
    );
  }

  const pendingSubmissions = submissions.filter(s => s.status === 'pending');
  const approvedSubmissions = submissions.filter(s => s.status === 'approved');
  const rejectedSubmissions = submissions.filter(s => s.status === 'rejected');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header with refresh info */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Image Submissions Admin</h1>
        <div className="text-sm text-gray-400">
          Last refreshed: {lastRefreshed.toLocaleTimeString()}
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-500">{pendingSubmissions.length}</div>
          <div className="text-gray-400">Pending Review</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-500">{approvedSubmissions.length}</div>
          <div className="text-gray-400">Approved</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-500">{rejectedSubmissions.length}</div>
          <div className="text-gray-400">Rejected</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Submissions */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600 flex items-center justify-between">
            <span>Pending Review ({pendingSubmissions.length})</span>
            {pendingSubmissions.length > 0 && (
              <button
                onClick={fetchSubmissions}
                className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded flex items-center space-x-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh</span>
              </button>
            )}
          </h2>
          
          {pendingSubmissions.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-gray-400">No pending submissions</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingSubmissions.map((submission) => (
                <div key={submission.id} className="border border-gray-700 rounded-lg p-4 bg-gray-900 shadow-sm">
                  <img
                    src={submission.image_url}
                    alt={submission.alt_text}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <p className="text-sm text-gray-300 mb-2">{submission.alt_text}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                    <span>Submitted: {new Date(submission.created_at).toLocaleDateString()}</span>
                    <span>{new Date(submission.created_at).toLocaleTimeString()}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => updateSubmissionStatus(submission.id, 'approved')}
                      className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateSubmissionStatus(submission.id, 'rejected')}
                      className="flex-1 bg-red-600 text-white py-2 px-3 rounded text-sm hover:bg-red-700"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => deleteSubmission(submission.id)}
                      className="bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700"
                      title="Delete submission"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Approved & Rejected Submissions */}
        <div className="space-y-8">
          {/* Approved Submissions */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              Approved Images ({approvedSubmissions.length})
            </h2>
            
            {approvedSubmissions.length === 0 ? (
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <p className="text-gray-400">No approved images yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {approvedSubmissions.map((submission) => (
                  <div key={submission.id} className="border border-gray-700 rounded-lg p-3 bg-gray-900 shadow-sm">
                    <img
                      src={submission.image_url}
                      alt={submission.alt_text}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <p className="text-xs text-gray-300 truncate mb-2">{submission.alt_text}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateSubmissionStatus(submission.id, 'pending')}
                        className="flex-1 bg-yellow-600 text-white py-1 px-2 rounded text-xs hover:bg-yellow-700"
                      >
                        Revoke
                      </button>
                      <button
                        onClick={() => deleteSubmission(submission.id)}
                        className="bg-gray-600 text-white py-1 px-2 rounded text-xs hover:bg-gray-700"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rejected Submissions */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Rejected Images ({rejectedSubmissions.length})
            </h2>
            
            {rejectedSubmissions.length === 0 ? (
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-gray-400">No rejected images</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rejectedSubmissions.map((submission) => (
                  <div key={submission.id} className="border border-gray-700 rounded-lg p-3 bg-gray-900 shadow-sm">
                    <img
                      src={submission.image_url}
                      alt={submission.alt_text}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <p className="text-xs text-gray-300 truncate mb-2">{submission.alt_text}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateSubmissionStatus(submission.id, 'pending')}
                        className="flex-1 bg-blue-600 text-white py-1 px-2 rounded text-xs hover:bg-blue-700"
                      >
                        Restore
                      </button>
                      <button
                        onClick={() => deleteSubmission(submission.id)}
                        className="bg-gray-600 text-white py-1 px-2 rounded text-xs hover:bg-gray-700"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}