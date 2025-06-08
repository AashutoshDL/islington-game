import React from "react";
import { Cloud } from "@react-three/drei"; // Assuming you're using drei's Cloud

const ThickClouds = () => {
  return (
    <>
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
    </>
  );
};

export default ThickClouds;
