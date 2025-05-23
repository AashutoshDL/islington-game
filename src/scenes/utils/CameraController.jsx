// CameraController.js
import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const CameraController = ({ active, position, fov = 60 }) => {
  const cameraRef = useRef();
  const { set } = useThree();

  useEffect(() => {
    if (active && cameraRef.current) {
      set({ camera: cameraRef.current });
    }
  }, [active, set]);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault={false}
      position={position}
      fov={fov}
    />
  );
};

export default CameraController;