import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useCamera } from "./context/CameraContext";
import { OrbitControls, Cloud, Html } from "@react-three/drei";
import { useProgress } from "@react-three/drei";
import UI from "./UI";
import Scene from "./Scene";

//environment imports
import FloatingRock from "./environments/FloatingRock";
import Island from "./environments/FloatingIsland";
import BackgroundIsland from "./environments/BackgroundIsland";
import ThinClouds from "./environments/ThinClouds";
import ThickClouds from "./environments/ThickClouds";

//utils import
import FloatingWrapper from "./utils/FloatingWrapper";
import TriggerGame from "./utils/TriggerGame";
import { useSceneExporter } from "./utils/SceneExporter";

// Move ExportPanel inside Canvas as a component that uses Html from drei
const ExportPanel = () => {
  const { exportScene, getStats } = useSceneExporter();

  const handleExportFull = async () => {
    try {
      await exportScene({
        fileName: "college_scene_full.glb",
        excludeTypes: ["Camera", "Light", "Helper"],
        optimize: true,
      });
      alert("Scene exported successfully!");
    } catch (error) {
      alert("Export failed: " + error.message);
    }
  };

  const handleExportOptimized = async () => {
    try {
      await exportScene({
        fileName: "college_scene_optimized.glb",
        excludeTypes: ["Camera", "Light", "Helper"],
        maxTextureSize: 2048,
        optimize: true,
      });
      alert("Optimized scene exported successfully!");
    } catch (error) {
      alert("Export failed: " + error.message);
    }
  };

  const handleShowStats = () => {
    const stats = getStats();
    console.log("Scene Statistics:", stats);
    alert(`Scene Stats:
Total Objects: ${stats.totalObjects}
Meshes: ${stats.meshes}
Materials: ${stats.materials}
Textures: ${stats.textures}
Vertices: ${stats.vertices}
Faces: ${Math.floor(stats.faces)}`);
  };

  return (
    <Html
      position={[0, 0, 0]}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        pointerEvents: "auto", // Important: allow interactions
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "15px",
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3
          style={{
            color: "white",
            margin: "0 0 10px 0",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Export Controls
        </h3>

        <button
          onClick={handleExportFull}
          style={{
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Export Full Scene
        </button>

        <button
          onClick={handleExportOptimized}
          style={{
            padding: "10px 15px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1976D2")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2196F3")}
        >
          Export Optimized
        </button>

        <button
          onClick={handleShowStats}
          style={{
            padding: "10px 15px",
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#F57C00")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF9800")}
        >
          Show Stats
        </button>
      </div>
    </Html>
  );
};

const IslandScene = ({ onLoadComplete }) => {
  const { setActiveCamera } = useCamera();
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

        {/* Export Panel now inside Canvas */}
        <ExportPanel />

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
      <TriggerGame />
    </>
  );
};

export default IslandScene;