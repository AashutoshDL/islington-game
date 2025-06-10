import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";
import { Suspense, useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Terminal() {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "e") setShowTerminal((prev) => !prev);
      if (e.key === "Escape") setShowTerminal(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <Canvas camera={{ position: [0, 20, 50], fov: 50 }}>
        <Suspense fallback={null}>
          <Laptop showTerminal={showTerminal} />
          <OrbitControls />
        </Suspense>
      </Canvas>

      {showTerminal && (
        <div
          className="
            absolute 
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 
            w-4/5 h-[60vh] 
            bg-white 
            rounded-lg 
            shadow-lg 
            z-50
          "
        >
          <iframe
            className="w-[920px] h-[1024px] max-w-full max-h-full"
            src="https://192.168.0.150:6080/vnc.html?host=192.168.0.150&port=6080"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
