import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import FloatingRock from "../environments/FloatingRock";
import Island from "../environments/FloatingIsland";
import FloatingWrapper from "./FloatingWrapper";
import MapScene from "../MapScene";

export default function PerspectiveTopDownScene() {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 800, 10); // top-down position
      cameraRef.current.lookAt(0, 0, 0); // look at the center
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={50}
        near={0.1}
        far={3000}
        position={[0, 1000, 0]}
      />

      {/* Minimal content to render in minimap view */}
      <FloatingWrapper
        baseY={-106.3}
        position={[30, 166, 100.2]}
        rotation={[0, -0.318, 0]}
        scale={[6.7, 6.9, 6.2]}
      >
        <Island />
      </FloatingWrapper>

      <FloatingWrapper
        baseY={-746.3}
        position={[65, 214, 18.2]}
        rotation={[0, 3.45, 0]}
        scale={[1.3, 1.2, 1.3]}
      >
        <MapScene />
      </FloatingWrapper>
    </>
  );
}
