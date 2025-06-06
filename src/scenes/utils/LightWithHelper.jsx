import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";

const LightWithHelper = () => {
  const directionalLightRef = useRef();
  const fillLightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (directionalLightRef.current) {
      const dirHelper = new DirectionalLightHelper(
        directionalLightRef.current,
        5,
        0xff0000
      );
      scene.add(dirHelper);
    }

    if (fillLightRef.current) {
      const fillHelper = new DirectionalLightHelper(
        fillLightRef.current,
        5,
        0x00ff00
      );
      scene.add(fillHelper);
    }
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        ref={fillLightRef}
        position={[-300, 500, -400]}
        intensity={0.5}
        castShadow
      />

      <directionalLight
        castShadow
        ref={directionalLightRef}
        position={[500, 500, -400]}
        intensity={1.2}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-bias={-0.005}
        shadow-camera-near={1}
        shadow-camera-far={3000}
        shadow-camera-left={-300}
        shadow-camera-right={300}
        shadow-camera-top={300}
        shadow-camera-bottom={-300}
      />
    </>
  );
};

export default LightWithHelper;
