import React, { useEffect } from 'react'

const Loading = () => {
  useEffect(() => {
    // Load model-viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-white-900 to-white flex flex-col justify-center items-center z-50">
      {/* Loading Spinner */}
      <div className="w-13 h-13 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      {/* Loading Text */}
      <div className="text-black text-2xl font-semibold tracking-wide">Loading...</div>
    </div>
  );
};

export default Loading;