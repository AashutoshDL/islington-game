import { DirectionalLightHelper } from "three";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";

const LightWithHelper = () => {
  const lightRef = useRef();
  

  const { scene } = useThree();

  useEffect(() => {
    if (lightRef.current) {
      const helper = new DirectionalLightHelper(lightRef.current, 5);
      scene.add(helper);
    }
  }, [scene]);

  return (
    <directionalLight
      ref={lightRef}
      position={[100, 200, 100]}
      intensity={5}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      
    />
  );
};

export default LightWithHelper;
