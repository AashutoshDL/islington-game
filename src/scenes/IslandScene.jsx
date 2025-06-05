import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Island from "./environments/FloatingIsland";
import { useCamera } from "./context/CameraContext";
import UI from "./UI";
import CameraController from "./utils/CameraController";
import { OrbitControls, Cloud } from "@react-three/drei";
// import LightWithHelper from "./utils/LightWithHelper";
import FloatingRock from "./environments/FloatingRock";
import FloatingWrapper from "./utils/FloatingWrapper";
import Scene from "./Scene";
import TriggerGame from "./utils/TriggerGame";
import { useProgress } from "@react-three/drei";
import CameraLogger from "./utils/CameraLogger";
import ThirdPersonCamera from "./utils/ThirdPersonCamera";
import BackgroundIsland from "./utils/BackgroundIsland";

const IslandScene = ({ onLoadComplete }) => {
  const { activeCamera, setActiveCamera } = useCamera();
  const { active } = useProgress();
  const { switchCamera } = useCamera();
  const characterRef = useRef();

  useEffect(() => {
    if (!active) {
      onLoadComplete();
    }
  }, [active, onLoadComplete]);

  return (
    <>
      <UI />
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#72badb" }}
        gl={{
          alpha: true,
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
        <fog attach="fog" args={["#ffffff", 1, 5500]} />
        <CameraLogger />

        <CameraController
          id="island"
          activeCamera={activeCamera}
          position={[150, 180, -150]}
          lookAt={[0, 100, 0]}
          onMoveComplete={() => {
            console.log(
              "Camera moved to island view. Switching to third person mode."
            );
            switchCamera("thirdPerson");
          }}
        />

        <OrbitControls enablePan={true} maxDistance={2000} minDistance={1} />
        <FloatingWrapper
          baseY={-106.3}
          position={[-193, -106.3, 638.2]}
          rotation={[0, -0.318, 0]}
          scale={[238, 208, 228]}
        >
          <Island setActiveCamera={setActiveCamera} />
        </FloatingWrapper>

        <FloatingWrapper
          baseY={-106.3}
          position={[-793, -216.3, 2000]}
          rotation={[0, -0.318, 0]}
          scale={[3, 3, 3]}
        >
          <BackgroundIsland />
        </FloatingWrapper>
        <FloatingWrapper
          baseY={-106.3}
          position={[2600, -916.3, 1000]}
          rotation={[0, -0.318, 0]}
          scale={[4, 4, 4]}
        >
          <BackgroundIsland />
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

        {/* thick clouds */}
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
      </Canvas>
      <TriggerGame />
    </>
  );
};

export default IslandScene;
