import React, { useRef } from "react";
import { useCamera } from "./context/CameraContext";

import Kumari from "./college/Kumari";
import Skill from "./college/Skill";
import Alumni from "./college/Alumni";
import Impact from "./college/Impact";
import IngTech from "./college/IngTech";
import Canteen from "./college/Canteen";
import StartingPoint from "./college/StartingPoint";
import BaskeballCourt from "./college/BasketballCourt";
import CharacterController from "./utils/CharacterController";
import Londonblock from "./college/LondonBlock";
import SkillSSD from "./college/SkillSSD";
import CoffeeStation from "./college/CoffeeStation";
import Resource from "./college/Resource";
import HimalParking from "./college/HimalParking";
import Chautari from "./college/Chautari";
import Britian from "./college/Britian";
import Cars from "./environments/Cars";
import BirdFlock from "./environments/BirdFlock";
import LightWithHelper from "./utils/LightWithHelper";
import ThirdPersonCamera from "./utils/ThirdPersonCamera";
import CameraController from "./utils/CameraController";
import CameraLogger from "./utils/CameraLogger";
import AllRoads from "./environments/Roads";

const Scene = () => {
  const { activeCamera, setActiveCamera, switchCamera } = useCamera();

  // Memoized components
  const MemoKumari = React.memo(Kumari);
  const MemoSkill = React.memo(Skill);
  const MemoAlumni = React.memo(Alumni);
  const MemoBritian = React.memo(Britian);
  const MemoImpact = React.memo(Impact);
  const MemoIngTech = React.memo(IngTech);
  const MemoCanteen = React.memo(Canteen);
  const MemoStartingPoint = React.memo(StartingPoint);
  const MemoBaskeballCourt = React.memo(BaskeballCourt);
  const MemoLondonblock = React.memo(Londonblock);
  const MemoSkillSSD = React.memo(SkillSSD);
  const MemoCoffeeStation = React.memo(CoffeeStation);
  const MemoResource = React.memo(Resource);
  const MemoHimalParking = React.memo(HimalParking);
  const MemoChautari = React.memo(Chautari);

  return (
    <>
      <BirdFlock />
      <Cars />
      <LightWithHelper />
      
      <AllRoads
        position={[-50, -171, -6]}
        rotation={[0, 0, 0]}
        scale={[0.8,0.8,0.8]}
      />
      <MemoKumari
        position={[0, -36.9, -154]}
        rotation={[0, 4.4, 0]}
        scale={[2, 2, 2]}
      />
      <MemoSkill
        position={[-213, -36.5, -15]}
        rotation={[0, -0.3, 0]}
        scale={[3, 3, 3]}
        setActiveCamera={setActiveCamera}
      />
      <MemoSkillSSD
        position={[-200.3, -38.5, -90]}
        rotation={[0, -0.3, 0]}
        scale={[2, 2, 2]}
      />
      <MemoAlumni
        position={[-55, -36, -20]}
        rotation={[0, -0.3, 0]}
        scale={[2, 2, 2]}
      />
      <MemoBritian
        position={[-5, -38, -53]}
        rotation={[0, -Math.PI / 10, 0]}
        scale={[2, 2, 2]}
      />
      <MemoHimalParking
        position={[58, -40, -45]}
        rotation={[0, 1.26, 0]}
        scale={[3, 3, 3]}
      />
      <MemoChautari
        position={[-11, -38.3, 132]}
        rotation={[0, -1.85, 0]}
        scale={[1.3, 1.3, 1.3]}
      />
      <MemoImpact
        position={[94, -37.5, -12]}
        rotation={[0, -1.88, 0]}
        scale={[2, 2, 2]}
      />
      <MemoIngTech
        position={[-70, -38, 80]}
        rotation={[0, -0.25, 0]}
        scale={[2, 2, 2]}
      />
      <MemoCanteen
        position={[-92, -40.35, 146]}
        rotation={[0, -0.3, 0]}
        scale={[2, 2, 2]}
      />
      <MemoLondonblock
        position={[-35, -38.2, 225]}
        rotation={[0, 2.89, 0]}
        scale={[2, 2, 2]}
      />
      <MemoStartingPoint
        position={[-128, -37.35, 203]}
        rotation={[0, -0.32, 0]}
        scale={[2, 2, 2]}
      />
      <MemoBaskeballCourt
        position={[-121, -37.35, 177]}
        rotation={[0, -0.32, 0]}
        scale={[2, 2, 2]}
      />
      <MemoCoffeeStation
        position={[-93, -37.35, 195]}
        rotation={[0, -0.32, 0]}
        scale={[2, 2, 2]}
      />
      <MemoResource
        position={[-35, -37.5, -20]}
        rotation={[0, -0.32, 0]}
        scale={[2, 2, 2]}
      />

      <CharacterController />

      <CameraController
        id="default"
        activeCamera={activeCamera}
        position={[-400, 750, -1200]}
        lookAt={[0, 100, 0]}
        fov={60}
        near={0.1}  
        far={10000}
        startPosition={[-250, 250, -450]}
      />

      <CameraController
        id="island"
        activeCamera={activeCamera}
        position={[222.4, 172, -178.9]}
        lookAt={[100, 150, 400]}
        fov={60}
        near={0.1}
        far={10000}
        onMoveComplete={() => {
          switchCamera("thirdPerson");
        }}
      />
      
      {activeCamera === "thirdPerson" && <ThirdPersonCamera />}
      <CameraLogger />
    </>
  );
};

export default Scene;
