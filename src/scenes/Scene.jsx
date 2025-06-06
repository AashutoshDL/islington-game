import React, { useRef } from "react";
import { useCamera } from "./context/CameraContext";

//environment imports
import Kumari_road from "./environments/Kumari_road";
import Large_road from "./environments/Large_road";
import Cars from "./environments/Cars";
import BirdFlock from "./environments/BirdFlock";
import Kumari from "./college/Kumari";
import Skill from "./college/Skill";
import Alumni from "./college/Alumni";
import Britian from "./college/Britian";
import Impact from "./college/Impact";
import ING_Tech from "./college/ING_Tech";
import Canteen from "./college/Canteen";
import StartingPoint from "./college/StartingPoint";
import BaskeballCourt from "./college/BasketballCourt";
// import CharacterController from "./utils/CharacterController";
import Londonblock from "./college/UK";
import SkillSSD from "./college/SkillBlockStudentService";
import BaseBrit from "./environments/base";
import Pavement from "./environments/pavement";
import CoffeeStation from "./college/CoffeeStation";
import Resource from "./college/Resource";

import HimalParking from "./college/HimalParking";
import Chautari from "./college/Chautari";
import LightWithHelper from "./utils/LightWithHelper";
import ThirdPersonCamera from "./utils/ThirdPersonCamera";
import CameraController from "./utils/CameraController";

const Scene = () => {
  const { activeCamera, setActiveCamera } = useCamera();
  const { switchCamera } = useCamera();

  const kumariRoadRef = useRef();
  const largeRoadRef = useRef();

  // Combine all road refs into an array
  // const allRoadRefs = [skillRoadRef, kumariRoadRef, largeRoadRef];

  return (
    <>
      <fog attach="fog" args={["#87CEEB", 300, 7000]} />

      {/* <Shrubs /> */}
      {/* <CustomClouds /> */}
      <BirdFlock />
      {/* <Hills /> */}
      {/* <Forest /> */}

      <Pavement count={1} />
      <Cars />
      <LightWithHelper />
      {/* <Skill_road
        position={[45, -34.3, 22.2]}
        rotation={[0, -0.318, 0]}
        scale={[300, 100, 480]}
        ref={skillRoadRef}
      /> */}
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
        position={[-175.7, -36.5, -15]}
        rotation={[0, -0.3, 0]}
        scale={[3, 3, 3]}
        setActiveCamera={setActiveCamera}
      />
      <SkillSSD
        position={[-160.3, -38.5, -60]}
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
      <HimalParking
        position={[55, -44, -45]}
        rotation={[0, 1.26, 0]}
        scale={[3, 3, 3]}
      />
      <Chautari
        position={[-15, -35.7, 104]}
        rotation={[0, -1.85, 0]}
        scale={[1.3, 1.3, 1.3]}
      />
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
      <Resource
        position={[-35, -37.5, -20]}
        rotation={[0, -0.32, 0]}
        scale={[2, 2, 2]}
      />
      {/* <CharacterController roadRef={largeRoadRef} /> */}
      {/* <CameraController
        id="default"
        activeCamera={activeCamera}
        position={[-400, 750, -1200]}
        lookAt={[0, 100, 0]}
        fov={60}
        near={0.1}
        far={10000}
        startPosition={[0, 100, 100]}
      /> */}

      <CameraController
        id="island"
        activeCamera={activeCamera}
        position={[150, 180, -150]}
        lookAt={[0, 100, 0]}
        fov={60}
        near={0.1}
        far={10000}
        onMoveComplete={() => {
          console.log(
            "Camera moved to island view. Switching to third person mode."
          );
          switchCamera("thirdPerson");
        }}
      />

      {activeCamera === "thirdPerson" && <ThirdPersonCamera />}

        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-40,0]} receiveShadow>
          <planeGeometry args={[300, 300]} />
          <meshStandardMaterial color="gray" />
        </mesh> */}

    </>
  );
};

export default Scene;
