import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const bushRefs = [];

export const getBushRefs = () => bushRefs;

const bushConfigs = [
  { position: [-110, -35.5, -13], rotation: [0, 0, 0], scale: [4, 4, 4] },
  { position: [-100, -35.5, -10], rotation: [0, 0, 0], scale: [4, 4, 4] },
  { position: [-90, -35.5, -7], rotation: [0, 0, 0], scale: [4, 4, 4] },
  { position: [-80, -35.5, -4], rotation: [0, 0, 0], scale: [4, 4, 4] },
  { position: [-70, -35.5, -1], rotation: [0, 0, 0], scale: [4, 4, 4] },
  { position: [-60, -35.5, 2], rotation: [0, 0, 0], scale: [4, 4, 4] },
  { position: [-50, -35.5, 5], rotation: [0, 0, 0], scale: [4, 4, 4] },
];

const Bushes = () => {
  const { nodes, materials } = useGLTF(
    "/models/environment_models/Bush with Flowers.glb"
  );

  const addRef = (ref) => {
    if (ref && !bushRefs.includes(ref)) {
      bushRefs.push(ref);
    }
  };

  useEffect(() => {
    bushRefs.length = 0;
  }, []);

  const renderBush = () => (
    <>
      <mesh
        geometry={nodes.Bush_Common_Flowers_1.geometry}
        material={materials.Leaves_NormalTree}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Bush_Common_Flowers_2.geometry}
        material={materials.Flowers}
        castShadow
        receiveShadow
      />
    </>
  );

  return (
    <>
      {bushConfigs.map(({ position, rotation, scale }, idx) => (
        <group
          key={idx}
          ref={addRef}
          position={position}
          rotation={rotation}
          scale={scale}
        >
          {renderBush()}
        </group>
      ))}
    </>
  );
};

export default Bushes;

useGLTF.preload("/models/environment_models/Bush with Flowers.glb");
