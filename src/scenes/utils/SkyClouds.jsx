// SkyClouds.jsx
import React from "react";
import { Cloud } from "@react-three/drei";

const SkyClouds = () => {
  return (
    <>
      <Cloud
        position={[-400, 600, -500]}
        scale={[30, 10, 10]}
        opacity={0.5}
        speed={0.0004}
        segments={1}
        depthWrite={false}
      />
    </>
  );
};

export default SkyClouds;
