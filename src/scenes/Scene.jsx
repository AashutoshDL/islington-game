import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import {Text, OrbitControls } from "@react-three/drei";
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
import NewTrees from "./environments/Trees"
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

const Scene = () => {
  const { activeCamera, setActiveCamera } = useCamera();

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#87CEEB" }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true, // Better quality for distant objects
          powerPreference: "high-performance" // Use dedicated GPU if available
        }}
        camera={{ 
          position: [120, 120, 120], 
          fov: 60,
          near: 0.1, // Keep near plane close for detail
          far: 1000000 // Significantly increased render distance
        }}
        shadows
        flat //to make the plane the same color as the canvas
      >
        <CameraController
          id="skill_annotation"
          activeCamera={activeCamera}
          position={[-10, 10, 20]} // <- your desired annotation view
          onMoveComplete={() =>
            console.log("Camera move complete. Free to move now!")
          }
        />

        {/* <Text
          position={[-170, 0, -60]}
          rotation={[0,1.3,0]}
          fontSize={15}
          color="white"
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="/fonts/Bebas_Neue/BebasNeue-Regular.ttf"
        > */}
          SKILL{'\n'}BLOCK
        {/* </Text> */}

        <OrbitControls 
          enablePan={true} 
          maxDistance={2000} // Allow camera to zoom out further
          minDistance={1} // Allow camera to get closer
        />
        {/* <ambientLight intensity={0.5}/> */}

        <LightWithHelper />

        {/* Enhanced fog for better depth perception at long distances */}
        <fog attach="fog" args={['#87CEEB', 100, 5000]} />

        {/* uncomment these for environment */}

        <NewTrees count={6} />
        {/* <CustomClouds /> */}
        {/* <BirdFlock /> */}
        {/* <Hills /> */}
        <Pavement count = {1} />
        <Island 
          position={[-193, -306.3, 638.2]}
          rotation={[0, -0.318, 0]}
          scale={[238,208,228]}/>
        

        <Cars />
        <Skill_road
          position={[11, -34.3, 20.2]}
          rotation={[0, -0.318, 0]}
          scale={[380, 100, 480]}
        />
        <Kumari_road
          position={[64, -104.38, -446]}
          rotation={[0, 2.79, 0]}
          scale={[30, 20, 25]}
        />
        <Large_road
          position={[70, -35.34, -72]}
          scale={[32, 20, 35]}
          rotation={[0, -0.33, 0]}
        />
        {/* displaying colleges for the main scene */}
        <Kumari 
        position={[-0, -36.9, -154]} 
        rotation={[0, 4.4, 0]} 
        scale={[2,2,2]}
        />

        <Skill
          position={[-119.7, -36.5, -3]}
          rotation={[0, -0.3, 0]}
          scale={[2,2,2]}
          setActiveCamera={setActiveCamera}
        />
        <SkillSSD
          position={[-115.3, -38.5, -55]}
          rotation={[0, -0.3, 0]}
          scale={[2,2,2]}
          />
        <Alumni
          position={[-55, -36, -20]}
          rotation={[0, -0.3, 0]}
          scale={[2,2,2]}
        />
        
        <Britian
          position={[19, -36.6, -62]}
          rotation={[0, 1.27, 0]}
          scale={[2,2,2]}
        />
        <BaseBrit 
          position={[10, -37, -58]}
          rotation={[0, 1.26, 0]}
          scale={[25,2,20]}
        />

        {/* <Chautari
          position={[-15, -50.7, 104]}
          rotation={[0, -1.85, 0]}
          scale={[0.7, 0.7, 0.7]}
        /> */}
        <Impact
          position={[85, -35.9, -12]}
          rotation={[0, -1.88, 0]}
          scale={[2,2,2]}
        />
         
        <ING_Tech
          position={[-70, -38, 80]}
          rotation={[0, -0.25, 0]}
          scale={[2,2,2]}
        />
        <Canteen
          position={[-92, -40.35, 146]}
          rotation={[0, -0.3, 0]}
          scale={[2,2,2]}
        />
        <Londonblock
          position={[-35, -36, 225]}
          rotation={[0, 2.89, 0]}
          scale={[2,2,2]}
        />
        
        <StartingPoint
          position={[-128, -37.35, 203]}
          rotation={[0, -0.32, 0]}
          scale={[2, 2, 2]}
        />
        <BaskeballCourt
          position={[-121, -37.35, 177]}
          rotation={[0, -0.32, 0]}
          scale={[2,2,2]}
        />
        <CoffeeStation 
          position={[-93, -37.35, 195]}
          rotation={[0, -0.32, 0]}
          scale={[2,2,2]}/>

        <CharacterController />
        
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