import React, { useState, useEffect, useRef } from "react";
import { Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ThickClouds = () => {
  const groupRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const pausedTimeRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden - pause animations
        pausedTimeRef.current = performance.now();
        setIsVisible(false);
      } else {
        // Tab is visible - resume animations
        const pauseDuration = performance.now() - pausedTimeRef.current;
        lastTimeRef.current += pauseDuration;
        setIsVisible(true);
      }
    };

    const handleFocus = () => {
      // Ensure visibility is restored on focus
      setIsVisible(true);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  // Use frame loop to maintain consistent animation timing
  useFrame((state) => {
    if (groupRef.current && isVisible) {
      // Maintain consistent time progression
      lastTimeRef.current = state.clock.elapsedTime;
    }
  });

  const cloudProps = {
    opacity: 1,
    speed: 0.0002,
    segments: 1,
    depthWrite: false,
  };

  return (
    <group ref={groupRef} visible={isVisible}>
      <Cloud
        position={[1500, -3505, 0]}
        scale={[1000, 900, 1000]}
        {...cloudProps}
      />
      <Cloud
        position={[1500, -3505, 1110]}
        scale={[1000, 900, 1000]}
        {...cloudProps}
      />
      <Cloud
        position={[-2000, -3505, 0]}
        scale={[1000, 900, 1000]}
        {...cloudProps}
      />
      <Cloud
        position={[-2000, -3505, 1510]}
        scale={[1000, 900, 1000]}
        {...cloudProps}
      />
    </group>
  );
};

export default ThickClouds;