// LoadingScreen.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
      <div className="w-16 h-16 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="text-white mt-4 text-xl font-semibold">Loading...</div>
    </div>
  );
};

export default Loading;
