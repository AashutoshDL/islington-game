import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import Island from "./environments/FloatingIsland";
import { useCamera } from "./context/CameraContext";
import UI from "./UI";
import { OrbitControls, Cloud } from "@react-three/drei";
import FloatingRock from "./environments/FloatingRock";
import FloatingWrapper from "./utils/FloatingWrapper";
import Scene from "./Scene";
import TriggerGame from "./utils/TriggerGame";
import { useProgress } from "@react-three/drei";
import BackgroundIsland from "./environments/BackgroundIsland";
import ThinClouds from "./environments/ThinClouds";
import ThickClouds from "./environments/ThickClouds";
import SkyClouds from "./utils/SkyClouds";

const IslandScene = ({ onLoadComplete }) => {
  const { activeCamera, setActiveCamera } = useCamera();
  const { active } = useProgress();

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
          shadows: true,
        }}
        camera={{
          position: [-400, 750, -1200],
          fov: 60,
          near: 0.1,
          far: 10000,
        }}
        shadows
      >
        <fog attach="fog" args={["#ffffff", 1, 5500]} />

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
          position={[25, 214, 18.2]}
          rotation={[0, 0, 0]}
          scale={[1.3, 1.3, 1.3]}
        >
          <Scene />
        </FloatingWrapper>

        <ThickClouds />
        <ThinClouds />
        {/* <SkyClouds /> */}
      </Canvas>
      <TriggerGame />
    </>
  );
};

export default IslandScene;
