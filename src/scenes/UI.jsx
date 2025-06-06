import React, { useState } from "react";
import { Volume2, VolumeX, Info, Play, X } from "lucide-react";
import { useCamera } from "./context/CameraContext";

const UI = () => {
  const [logoError, setLogoError] = useState(false);
  const { switchCamera } = useCamera();
  const [isMuted, setIsMuted] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [hideUI, setHideUI] = useState(false);

  const toggleInfo = () => setShowInfo((prev) => !prev);
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const moveCamera = () => {
    switchCamera("island");
    setHideUI(true);
  };

  const exitCamera = () => {
    switchCamera("default");
    setHideUI(false);
    setShowInfo(false);
  };

  return (
    <>
      {/* Normal UI (when not hidden) */}
      {!hideUI && (
        <>
          {/* Logo */}
          <div className="absolute top-10 left-10 z-50 pointer-events-none">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Logo"
                className="w-52 rounded-xl "
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="bg-white/90 p-4 rounded-xl  text-gray-800 text-sm font-medium border border-gray-200">
                Logo not found
              </div>
            )}
          </div>

          {/* Top-right buttons */}
          <div className="absolute top-10 right-10 flex flex-col gap-3 z-50">
            {/* Mute */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className={`
                group relative w-12 h-12 rounded-full backdrop-blur-md border border-white/20 
                transition-all duration-300 hover:scale-105 active:scale-95
                ${
                  isMuted
                    ? "bg-red-500/80 hover:bg-red-500/90 text-white shadow-lg shadow-red-500/25"
                    : "bg-white/80 hover:bg-white/90 text-gray-700 shadow-lg shadow-black/10"
                }
              `}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 mx-auto" />
              ) : (
                <Volume2 className="w-6 h-6 mx-auto" />
              )}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {isMuted ? "Unmute" : "Mute"}
              </div>
            </button>

            {/* Info */}
            <button
              onClick={toggleInfo}
              aria-label="Toggle information display"
              className={`
                group relative w-12 h-12 rounded-full backdrop-blur-md border border-white/20
                transition-all duration-300 hover:scale-105 active:scale-95
                ${
                  showInfo
                    ? "bg-blue-500/80 hover:bg-blue-500/90 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/80 hover:bg-white/90 text-gray-700 shadow-lg shadow-black/10"
                }
              `}
            >
              <Info className="w-6 h-6 mx-auto" />
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Controls Info
              </div>
            </button>
          </div>

          {/* Info Panel */}
          {showInfo && (
            <div className="absolute top-44 right-10 z-50 animate-in slide-in-from-right-2 duration-300">
              <div className="bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 max-w-sm">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-500" />
                    Controls
                  </h3>
                  <button
                    onClick={toggleInfo}
                    className="p-1 rounded-full hover:bg-gray-100"
                    aria-label="Close info panel"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {["W", "A", "S", "D"].map((key) => (
                        <kbd
                          key={key}
                          className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-300 rounded shadow-sm"
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                    <span className="text-sm">Move character</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-300 rounded shadow-sm">
                      i
                    </kbd>
                    <span className="text-sm">Toggle this panel</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Play Button */}
          <div className="absolute bottom-12 right-12 z-50">
            <button
              onClick={moveCamera}
              aria-label="Start experience and move camera"
              className="
                group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 
                hover:from-green-600 hover:to-emerald-700 text-white font-semibold 
                rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95
                border border-green-400/30
              "
            >
              <div className="flex items-center gap-3">
                <Play className="w-6 h-6 fill-current" />
                <span className="text-lg">Play</span>
              </div>
            </button>
          </div>


          {/* Copyright */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            <div className="bg-black/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/10">
              © ING Skill Academy — SMARC
            </div>
          </div>
        </>
      )}

      {/* Exit Button (when UI is hidden) */}
      {hideUI && (
        <div className="absolute bottom-12 right-12 z-50">
          <button
            onClick={exitCamera}
            aria-label="Exit and return to main UI"
            className="
              group relative px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 
              hover:from-rose-500 hover:to-rose-600 text-white font-semibold 
              rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95
              border border-rose-300/30
            "
          >
            <div className="flex items-center gap-3">
              <X className="w-6 h-6 fill-current" />
              <span className="text-lg">Exit</span>
            </div>
          </button>
        </div>
      )}


    </>
  );
};

export default UI;
