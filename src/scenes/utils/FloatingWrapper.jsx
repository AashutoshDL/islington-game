import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingWrapper = ({
  children,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  floatSpeed = 2.5,   // 👈 slow float speed
  amplitude = 0       // 👈 smooth, visible height
}) => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * floatSpeed) * amplitude;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {children}
    </group>
  );
};

export default FloatingWrapper;
