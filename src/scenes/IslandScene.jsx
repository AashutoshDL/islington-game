import { Canvas } from "@react-three/fiber";
import React from "react";
import Island from "./environments/FloatingIsland";
import { useCamera } from "./context/CameraContext";
import UI from "./UI";
import CameraController from "./utils/CameraController";
import { OrbitControls } from "@react-three/drei";
import LightWithHelper from "./utils/LightwithHelper";
import FloatingRock from "./environments/FloatingRock";
import FloatingWrapper from "./utils/FloatingWrapper";
import Scene from "./Scene";


const IslandScene = () => {
  const { activeCamera, setActiveCamera } = useCamera();
  return (
    <>
      <UI />
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#72badb" }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [-400, 750, -1200],
          fov: 60,
          near: 0.1,
          far: 10000,
        }}
        shadows
        flat
      >
        <ambientLight intensity={1.5} />
        <LightWithHelper />
        <fog attach="fog" args={["#87CEEB", 300, 7000]} />

        <CameraController
          id="island"
          activeCamera={activeCamera}
          position={[150, 250, -150]} // Island view position
          onMoveComplete={() =>
            console.log("Camera moved to island view. Free to move now!")
          }
        />

        <OrbitControls
          enablePan={true}
          maxDistance={2000} // Allow camera to zoom out further
          minDistance={1} // Allow camera to get closer
        />
        <FloatingWrapper
          baseY={-106.3}
          position={[-193, -106.3, 638.2]}
          rotation={[0, -0.318, 0]}
          scale={[238, 208, 228]}
        >
          <Island setActiveCamera={setActiveCamera} />
        </FloatingWrapper>

        <FloatingWrapper
          baseY={-746.3}
          position={[-555, -746.3, 638.2]}
          rotation={[0, -0.318, 0]}
          scale={[0.156, 0.156, 0.156]}
        >
          <FloatingRock />
        </FloatingWrapper>

        <FloatingWrapper
          baseY={-746.3}
          position={[815, -746.3, 18.2]}
          rotation={[0, -0.318, 0]}
          scale={[0.156, 0.156, 0.156]}
        >
          <FloatingRock />
        </FloatingWrapper>

        <FloatingWrapper
          baseY={-746.3}
          position={[15, 201.5, 18.2]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
        >
          <Scene />
        </FloatingWrapper>
      </Canvas>
    </>
  );
};

export default IslandScene;
