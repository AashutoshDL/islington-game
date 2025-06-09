import React from 'react';

const Tutorial = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl relative">
        <h2 className="text-2xl font-semibold mb-4 text-center">Tutorial Video</h2>
        <video controls className="w-full rounded-lg">
          <source src="/video/ick_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Tutorial;