import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";

//environment imports
import Tree from "./environments/Tree";
import CustomClouds from "./environments/Clouds";
import Skill_road from "./environments/Skill_road";
import Kumari_road from "./environments/Kumari_road";
import Large_road from "./environments/Large_road";
import Cars from "./environments/Cars";

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
import IT from "./college/IT";
import MultimediaStudios from "./college/MultimediaStudios";
import StartingPoint from "./college/StartingPoint";
import BaskeballCourt from "./college/BasketballCourt";
import LightWithHelper from "./utils/LightwithHelper";
import StartingBase from "./environments/StartingBase";

const Scene = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "#93aa53" }}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [120, 120, 120], fov: 60 }}
      shadows
      // flat //to make the palne the same color as the canvas
    >
      <OrbitControls enablePan={true} />
      {/* <ambientLight intensity={0.5} /> */}

      <LightWithHelper />

      {/* <directionalLight position={[10, 20, 10]} intensity={5} /> */}

      {/* uncomment these for environment */}

      <Tree count={15} />
      <CustomClouds />
      <Cars />
      {/* <BirdFlock /> */}

      <Skill_road
        position={[3, -34.3, 50.2]}
        rotation={[0, -0.318, 0]}
        scale={[470, 100, 480]}
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
      <Kumari position={[-20, -41.9, -150]} rotation={[0, 2.8, 0]} />
      <Skill
        position={[-64.3, -43, -35]}
        rotation={[0, -0.3, 0]}
        scale={[10, 10, 12]}
      />
      <Alumni
        position={[-10, -41, 10]}
        rotation={[0, -0.3, 0]}
        scale={[4, 4, 4]}
      />
      <Britian
        position={[35, -27.3, -40]}
        rotation={[0, -0.3, 0]}
        scale={[2, 2, 2]}
      />
      <Chautari
        position={[-15, -50.7, 84]}
        rotation={[0, -1.85, 0]}
        scale={[0.7, 0.7, 0.7]}
      />
      <Impact
        position={[89, -31, 13]}
        rotation={[0, -0.33, 0]}
        scale={[4, 5.5, 5.4]}
      />
      <ING_Tech
        position={[-120, -30, 230]}
        rotation={[0, -0.25, 0]}
        scale={[0.5, 0.48, 0.5]}
      />
      <Canteen
        position={[-40, -40.35, 85]}
        rotation={[0, -0.3, 0]}
        scale={[12, 7, 8]}
      />
      <UK
        position={[-53, -40, 114]}
        rotation={[0, -0.34, 0]}
        scale={[22, 19, 15]}
      />
      <IT
        position={[-128, -33.3, 212]}
        rotation={[0, -0.32, 0]}
        scale={[9.3, 8.4, 7.5]}
      />
      <MultimediaStudios
        position={[-195, -32, 357]}
        rotation={[0, -0.31, 0]}
        scale={[0.3, 0.2, 0.2]}
      />
      <StartingPoint
        position={[50, -42, -180]}
        rotation={[0, -0.28, 0]}
        scale={[2,2,2]}
      />
      <BaskeballCourt
        position={[-33, -31.99, 78.8]}
        rotation={[0, -0.31, 0]}
        scale={[73, 70, 58]}
      />

      <StartingBase
        position={[-133, -43.99, 250.8]}
        rotation={[0, -0.31, 0]}
        scale={[18, 18, 20]}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 2.8]}
        position={[-70, -50, 60]}
        receiveShadow
        castShadow
      >
        <planeGeometry args={[500, 800]} />
        <meshBasicMaterial  color="#93aa53" />
      </mesh>
    </Canvas>
  );
};

export default Scene;
