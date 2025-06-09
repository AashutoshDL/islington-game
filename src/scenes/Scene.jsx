import { useRef } from "react";
import { useCamera } from "./context/CameraContext";

//environment imports
import KumariRoad from "./college/KumariRoad";
import LargeRoad from "./college/LargeRoad";
import Kumari from "./college/Kumari";
import Skill from "./college/Skill";
import Alumni from "./college/Alumni";
import Britian from "./college/Britian";
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
// import SkillRoad from "./college/SkillRoad";

//environment imports
import Cars from "./environments/Cars";
import BirdFlock from "./environments/BirdFlock";

//utils imports
import LightWithHelper from "./utils/LightWithHelper";
import ThirdPersonCamera from "./utils/ThirdPersonCamera";
import CameraController from "./utils/CameraController";
import CameraLogger from "./utils/CameraLogger";

const Scene = () => {
  const { activeCamera, setActiveCamera } = useCamera();
  const { switchCamera } = useCamera();

  const roadRef = useRef();

  return (
    <>
      <fog attach="fog" args={["#87CEEB", 300, 7000]} />

      <BirdFlock />

      <Cars />

      <LightWithHelper />

      {/* displaying colleges for the main scene */}
      {/* <SkillRoad
        position={[45, -34.3, 22.2]}
        rotation={[0, -0.318, 0]}
        scale={[300, 100, 480]}
      /> */}
      <KumariRoad
        position={[64, -104.38, -446]}
        rotation={[0, 2.79, 0]}
        scale={[30, 20, 25]}
      />
      <LargeRoad
        position={[70, -36.5, -72]}
        scale={[32, 20, 35]}
        rotation={[0, -0.33, 0]}
        ref={roadRef}
      />
      <Kumari
        position={[-0, -36.9, -154]}
        rotation={[0, 4.4, 0]}
        scale={[2, 2, 2]}
      />
      <Skill
        position={[-213, -36.5, -15]}
        rotation={[0, -0.3, 0]}
        scale={[3, 3, 3]}
        setActiveCamera={setActiveCamera}
      />
      <SkillSSD
        position={[-200.3, -38.5, -90]}
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

      <HimalParking
        position={[55, -40, -45]}
        rotation={[0, 1.26, 0]}
        scale={[3, 3, 3]}
      />
      <Chautari
        position={[-15, -38.3, 104]}
        rotation={[0, -1.85, 0]}
        scale={[1.3, 1.3, 1.3]}
      />
      <Impact
        position={[85, -37.5, -12]}
        rotation={[0, -1.88, 0]}
        scale={[2, 2, 2]}
      />
      <IngTech
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
        position={[-35, -38.2, 225]}
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
      <CharacterController />

      {/* uncomment this to make the camera so to default when pressed exit button */}
      {/* <CameraController
        id="default"
        activeCamera={activeCamera}
        position={[-400, 750, -1200]}
        lookAt={[0, 100, 0]}
        fov={60}
        near={0.1}
        far={10000}
        startPosition={[-250, 250, -450]}
      /> */}

      <CameraController
        id="island"
        activeCamera={activeCamera}
        position={[250, 200, -220]}
        lookAt={[0, 100, 0]}
        fov={60}
        near={0.1}
        far={10000}
        onMoveComplete={() => {
          switchCamera("thirdPerson");
        }}
      />

      {activeCamera === "thirdPerson" && (
        <ThirdPersonCamera roadRef={roadRef} />
      )}

      <CameraLogger />
    </>
  );
};

export default Scene;
