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
      {/* <ambientLight intensity={0.5} /> */}

      <directionalLight
        ref={directionalLightRef}
        position={[100, 500, -400]}
        intensity={2.5}
        castShadow
        receiveShadow
      />

      <directionalLight
        ref={fillLightRef}
        position={[-100, 500, 300]}
        intensity={1.2}
        castShadow
        receiveShadow
      />
    </>
  );
};

export default LightWithHelper;
