import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useCamera } from "./context/CameraContext";
import UI from "./UI";
import Scene from "./Scene";

// environment imports
import FloatingRock from "./environments/FloatingRock";
import Island from "./environments/FloatingIsland";
import BackgroundIsland from "./environments/BackgroundIsland";
import ThinClouds from "./environments/ThinClouds";
import ThickClouds from "./environments/ThickClouds";

// utils import
import FloatingWrapper from "./utils/FloatingWrapper";
import TriggerGame from "./utils/TriggerGame";
import Loading from "./GameUI/Loading"; // Make sure path is correct

const IslandScene = () => {
  const { setActiveCamera } = useCamera();

  return (
    <>
      <UI />
      <Suspense fallback={<Loading />}>
        <Canvas
          style={{ width: "100vw", height: "100vh", background: "#72badb" }}
          gl={{ shadows: true }}
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
            position={[30, 166, 100.2]}
            rotation={[0, -0.318, 0]}
            scale={[6.7, 6.9, 6.2]}
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
            position={[65, 214, 18.2]}
            rotation={[0, 0, 0]}
            scale={[1.3, 1.3, 1.3]}
          >
            <Scene />
          </FloatingWrapper>

          <ThickClouds />
          <ThinClouds />
        </Canvas>
      </Suspense>
      <TriggerGame />
    </>
  );
};

export default IslandScene;
