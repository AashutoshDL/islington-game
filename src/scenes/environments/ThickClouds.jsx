import React, { useState, useEffect } from "react";
import { Cloud } from "@react-three/drei";

const ThickClouds = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleFocus = () => {
      // Increment key to remount clouds when tab gains focus
      setKey((prev) => prev + 1);
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <>
      {/* Key forces re-mounting the group of clouds */}
      <group key={key}>
        <Cloud
          position={[1500, -3505, 0]}
          scale={[1000, 900, 1000]}
          opacity={1}
          speed={0.0002}
          segments={1}
          depthWrite={false}
        />
        <Cloud
          position={[1500, -3505, 1110]}
          scale={[1000, 900, 1000]}
          opacity={1}
          speed={0.0002}
          segments={1}
          depthWrite={false}
        />
        <Cloud
          position={[-2000, -3505, 0]}
          scale={[1000, 900, 1000]}
          opacity={1}
          speed={0.0002}
          segments={1}
          depthWrite={false}
        />
        <Cloud
          position={[-2000, -3505, 1510]}
          scale={[1000, 900, 1000]}
          opacity={1}
          speed={0.0002}
          segments={1}
          depthWrite={false}
        />
      </group>
    </>
  );
};

export default ThickClouds;