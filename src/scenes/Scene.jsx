import { Canvas, useThree } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import { Text, OrbitControls, Html } from "@react-three/drei";
import CameraController from "./utils/CameraController";
import { useCamera, CameraProvider } from "./context/CameraContext";

//environment imports
import Tree from "./environments/Tree";
import CustomClouds from "./environments/Clouds";
import Skill_road from "./environments/Skill_road";
import Kumari_road from "./environments/Kumari_road";
import Large_road from "./environments/Large_road";
import Cars from "./environments/Cars";
import Realcharacter from "./environments/Realchar";
import NewTrees from "./environments/Trees";
// import BirdFlock from "./environments/BirdFlock";

//college imports
import Kumari from "./college/Kumari";
import Skill from "./college/Skill";
import Alumni from "./college/Alumni";
import Chautari from "./college/Chautari";
import Britian from "./college/Britian";
import Impact from "./college/Impact";
import ING_Tech from "./college/ING_Tech";
import Canteen from "./college/Canteen";
import UK from "./college/UK";
import StartingPoint from "./college/StartingPoint";
import BaskeballCourt from "./college/BasketballCourt";
import LightWithHelper from "./utils/LightwithHelper";
import StartingBase from "./environments/StartingBase";
import Character from "./environments/Character";
import CharacterController from "./utils/CharacterController";

import Londonblock from "./college/UK";
import SkillSSD from "./college/SkillBlockStudentService";
import BaseBrit from "./environments/base";
import Pavement from "./environments/pavement";
import Island from "./environments/FloatingIsland";
import CoffeeStation from "./college/CoffeeStation";

function CameraLookAt({ target = [0, 0, 0] }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(...target);
  }, [camera, target]);

  return null;
}

const Scene = () => {
  const { activeCamera, setActiveCamera } = useCamera();
  const skillRoadRef = useRef();
  const kumariRoadRef = useRef();
  const largeRoadRef = useRef();
  const [logoError, setLogoError] = useState(false);

  const [isMuted, setIsMuted] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const toggleInfo = () => setShowInfo(!showInfo);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    // Optionally control global audio here
    // e.g., document.querySelectorAll('audio, video').forEach(el => el.muted = !isMuted);
  };

  const moveCamera = () => {
    console.log("Camera is moving to island!");
    setActiveCamera('island');
  };

  // Combine all road refs into an array
  const allRoadRefs = [skillRoadRef, kumariRoadRef, largeRoadRef];

  return (
    <>
      {/* Logo positioned outside Canvas as an overlay */}
      <div
        style={{
          position: "absolute",
          top: "54px",
          left: "118px",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "250px",
            borderRadius: "8px",
            display: logoError ? "none" : "block",
          }}
          onError={() => {
            console.error("Logo failed to load from /logo.png");
            setLogoError(true);
          }}
          onLoad={() => console.log("Logo loaded successfully")}
        />
        {logoError && (
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              padding: "10px",
              borderRadius: "8px",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Logo not found at /logo.png
          </div>
        )}
      </div>

      {/* Title "Cyber Quest" at top center */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: "bold",
            fontFamily: "Trebuchet MS",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            margin: 0,
          }}
        >
          CYBERSECURITY GAMIFIED
        </h1>
      </div>
      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          backgroundColor: "white",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          zIndex: 1000,
        }}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
      <button
        onClick={toggleInfo}
        style={{
          position: "absolute",
          top: "120px",
          right: "40px",
          backgroundColor: "white",
          color: "#000",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        i
      </button>

      {/* Info Panel */}
      {showInfo && (
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            maxWidth: "300px",
            fontSize: "16px",
            color: "#333",
            zIndex: 1000,
          }}
        >
          <strong>Controls:</strong>
          <br />
          Use <b>W A S D</b> keys to move your character.
          <br />
          Press <b>i</b> again to hide this message.
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "30px",
          color: "#ffffff",
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          padding: "8px 12px",
          color: "black",
          borderRadius: "6px",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        © ING Skill Academy — SMARC
      </div>
      <button
        onClick={moveCamera}
        style={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          backgroundColor: "#28a745", // Green color
          color: "#fff",
          fontSize: "24px",
          fontFamily: "Arial, sans-serif",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ▶ Play
      </button>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#72badb" }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true, // Better quality for distant objects
          powerPreference: "high-performance", // Use dedicated GPU if available
        }}
        camera={{
          position: [-400, 750, -1200],
          fov: 60,
          near: 0.1, // Keep near plane close for detail
          far: 10000, // Significantly increased render distance
        }}
        shadows
        flat //to make the plane the same color as the canvas
      >
        <CameraLookAt target={[0, 0, 0]} />

        {/* Multiple Camera Controllers for different views */}
        <CameraController
          id="island"
          activeCamera={activeCamera}
          position={[-10, 10, 20]} // Island view position
          onMoveComplete={() =>
            console.log("Camera moved to island view. Free to move now!")
          }
        />
        
        <CameraController
          id="overview"
          activeCamera={activeCamera}
          position={[-400, 750, -1200]} // Original overview position
          onMoveComplete={() =>
            console.log("Camera moved to overview. Free to move now!")
          }
        />

        <CameraController
          id="skill"
          activeCamera={activeCamera}
          position={[-150, 50, 50]} // Close view of Skill building
          onMoveComplete={() =>
            console.log("Camera moved to skill view. Free to move now!")
          }
        />

        <OrbitControls
          enablePan={true}
          maxDistance={2000} // Allow camera to zoom out further
          minDistance={1} // Allow camera to get closer
        />
        {/* <ambientLight intensity={0.5}/> */}
        <LightWithHelper />
        {/* Enhanced fog for better depth perception at long distances */}
        <fog attach="fog" args={["#87CEEB", 300, 7000]} />
        {/* uncomment these for environment */}
        <NewTrees count={6} />
        {/* <CustomClouds /> */}
        {/* <BirdFlock /> */}
        {/* <Hills /> */}
        <Pavement count={1} />
        <Island
          position={[-193, -306.3, 638.2]}
          rotation={[0, -0.318, 0]}
          scale={[238, 208, 228]}
          setActiveCamera={setActiveCamera}
        />
        <Cars />
        <Skill_road
          position={[11, -34.3, 20.2]}
          rotation={[0, -0.318, 0]}
          scale={[380, 100, 480]}
          ref={skillRoadRef}
        />
        <Kumari_road
          position={[64, -104.38, -446]}
          rotation={[0, 2.79, 0]}
          scale={[30, 20, 25]}
          ref={kumariRoadRef}
        />
        <Large_road
          position={[70, -35.34, -72]}
          scale={[32, 20, 35]}
          rotation={[0, -0.33, 0]}
          ref={largeRoadRef}
        />
        {/* displaying colleges for the main scene */}
        <Kumari
          position={[-0, -36.9, -154]}
          rotation={[0, 4.4, 0]}
          scale={[2, 2, 2]}
        />
        <Skill
          position={[-119.7, -36.5, -3]}
          rotation={[0, -0.3, 0]}
          scale={[2, 2, 2]}
          setActiveCamera={setActiveCamera}
        />
        <SkillSSD
          position={[-115.3, -38.5, -55]}
          rotation={[0, -0.3, 0]}
          scale={[2, 2, 2]}
        />
        <Alumni
          position={[-55, -36, -20]}
          rotation={[0, -0.3, 0]}
          scale={[2, 2, 2]}
        />
        <Britian
          position={[19, -36, -62]}
          rotation={[0, 1.27, 0]}
          scale={[2, 2, 2]}
        />
        <BaseBrit
          position={[10, -37, -58]}
          rotation={[0, 1.26, 0]}
          scale={[25, 2, 20]}
        />
        {/* <Chautari
          position={[-15, -50.7, 104]}
          rotation={[0, -1.85, 0]}
          scale={[0.7, 0.7, 0.7]}
        /> */}
        <Impact
          position={[85, -35.9, -12]}
          rotation={[0, -1.88, 0]}
          scale={[2, 2, 2]}
        />
        <ING_Tech
          position={[-70, -38, 80]}
          rotation={[0, -0.25, 0]}
          scale={[2, 2, 2]}
        />
        <Canteen
          position={[-92, -40.35, 146]}
          rotation={[0, -0.3, 0]}
          scale={[2, 2, 2]}
        />
        <Londonblock
          position={[-35, -36, 225]}
          rotation={[0, 2.89, 0]}
          scale={[2, 2, 2]}
        />
        <StartingPoint
          position={[-128, -37.35, 203]}
          rotation={[0, -0.32, 0]}
          scale={[2, 2, 2]}
        />
        <BaskeballCourt
          position={[-121, -37.35, 177]}
          rotation={[0, -0.32, 0]}
          scale={[2, 2, 2]}
        />
        <CoffeeStation
          position={[-93, -37.35, 195]}
          rotation={[0, -0.32, 0]}
          scale={[2, 2, 2]}
        />
        <CharacterController roadRefs={allRoadRefs} />
        {/* Extended ground plane for better long-distance rendering */}
        <mesh
          rotation={[-Math.PI / 2, 0, 2.8]}
          position={[-70, -50, 60]}
          receiveShadow
          castShadow
        >
          {/* <planeGeometry args={[5000, 5000]} /> 
          <meshBasicMaterial color="#93aa53" /> */}
        </mesh>
      </Canvas>
    </>
  );
};

export default Scene;