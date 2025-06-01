import React, { useState } from "react";
import { useCamera } from "./context/CameraContext";

const UI = () => {
  const [logoError, setLogoError] = useState(false);
  const { switchCamera } = useCamera() || {};
  const [isMuted, setIsMuted] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [hideUI, setHideUI] = useState(false);

  const toggleInfo = () => setShowInfo((prev) => !prev);
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    // Optionally mute all global media
    // document.querySelectorAll('audio, video').forEach(el => el.muted = !isMuted);
  };

  const moveCamera = () => {
    if (switchCamera) {
      console.log("Camera is moving to island!");
      switchCamera("island");
      setHideUI(true);
    } else {
      console.warn("switchCamera is not available from CameraContext.");
    }
  };

  const buttonStyle = {
    backgroundColor: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "24px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    zIndex: 1000,
  };

  return (
    <>
      {!hideUI && (
        <>
          {/* Logo */}
          <div
            style={{
              position: "absolute",
              top: "54px",
              left: "118px",
              zIndex: 1000,
              pointerEvents: "none",
            }}
          >
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Logo"
                style={{ width: "250px", borderRadius: "8px" }}
                onError={() => {
                  console.error("Logo failed to load from /logo.png");
                  setLogoError(true);
                }}
                onLoad={() => console.log("Logo loaded successfully")}
              />
            ) : (
              <div
                style={{
                  background: "rgba(255,255,255,0.9)",
                  padding: "10px",
                  borderRadius: "8px",
                  color: "#333",
                  fontSize: "14px",
                }}
              >
                Logo not found at /logo.png
              </div>
            )}
          </div>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            style={{
              position: "absolute",
              top: "40px",
              right: "40px",
              ...buttonStyle,
            }}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>

          {/* Info Button */}
          <button
            onClick={toggleInfo}
            aria-label="Toggle information display"
            style={{
              position: "absolute",
              top: "120px",
              right: "40px",
              ...buttonStyle,
              color: "#000",
            }}
            title="Show controls info"
          >
            i
          </button>

          {/* Info Panel */}
          {showInfo && (
            <div
              style={{
                position: "absolute",
                top: "200px",
                right: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                padding: "16px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                maxWidth: "300px",
                fontSize: "16px",
                color: "#333",
                zIndex: 1000,
              }}
            >
              <strong>Controls:</strong>
              <br />
              Use <b>W A S D</b> keys to move your character.
              <br />
              Press <b>i</b> again to hide this message.
            </div>
          )}

          {/* Copyright */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "30px",
              fontSize: "14px",
              fontFamily: "Arial, sans-serif",
              padding: "8px 12px",
              color: "black",
              borderRadius: "6px",
              zIndex: 1000,
              pointerEvents: "none",
            }}
          >
            © ING Skill Academy — SMARC
          </div>

          {/* Play Button */}
          <button
            onClick={moveCamera}
            aria-label="Start experience and move camera"
            style={{
              position: "absolute",
              bottom: "50px",
              right: "50px",
              backgroundColor: "#28a745",
              color: "#fff",
              fontSize: "24px",
              fontFamily: "Arial, sans-serif",
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              zIndex: 1000,
            }}
          >
            ▶ Play
          </button>
        </>
      )}
    </>
  );
};

export default UI;