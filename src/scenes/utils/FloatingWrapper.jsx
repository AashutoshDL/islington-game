import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useCamera } from "../context/CameraContext";

const FloatingWrapper = ({
  children,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  floatSpeed = 2.5,
}) => {
  const groupRef = useRef();
  const { floatingOffset, setFloatingOffset, floatingAmplitude } = useCamera();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (floatingAmplitude === null) {
      // Stop floating — reset position.y to base position only
      if (groupRef.current) {
        groupRef.current.position.y = position[1];
      }
      return;
    }

    // Calculate floating offset based on amplitude
    const offset = Math.sin(t * floatSpeed) * floatingAmplitude;
    setFloatingOffset(offset);

    if (groupRef.current) {
      groupRef.current.position.y = position[1] + offset;
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