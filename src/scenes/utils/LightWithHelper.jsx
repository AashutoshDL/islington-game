import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";

const LightWithHelper = () => {
  const directionalLightRef = useRef();
  const fillLightRef = useRef(); // New ref for the second light
  const { scene } = useThree();

  useEffect(() => {
    // Main directional light helper
    if (directionalLightRef.current) {
      const dirHelper = new DirectionalLightHelper(
        directionalLightRef.current,
        5,
        0xff0000
      ); // red for visibility
      scene.add(dirHelper);
    }

    // Fill directional light helper
    if (fillLightRef.current) {
      const fillHelper = new DirectionalLightHelper(
        fillLightRef.current,
        5,
        0x00ff00
      ); // green for visibility
      scene.add(fillHelper);
    }
  }, [scene]);

  return (
    <>
      {/* Ambient Light */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* Main Directional Light (key light) */}
      <directionalLight
        ref={directionalLightRef}
        position={[100, 500, -400]}
        intensity={2.5}
        castShadow
        receiveShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.001}
      />

      {/* Fill Directional Light (opposite side) */}
      <directionalLight
        ref={fillLightRef}
        position={[-100, 500, 300]} // opposite direction to the key light
        intensity={1.2}
        castShadow
        receiveShadow
      />
    </>
  );
};

export default LightWithHelper;
