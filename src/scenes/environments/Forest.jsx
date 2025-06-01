import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const forestRefs = [];

export const getForestRefs = () => forestRefs;

const forestConfigs = [
  { position: [170, -40, -100], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [250, -40, -100], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [300, -35, -40], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [240, -40, -40], rotation: [0, 1, 0], scale: [5, 5, 5] },
  { position: [230, -40, 20], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [200, -40, -40], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [180, -40, 10], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [180, -40, -70], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [180.00, -49.67, 92.28], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [108.05, -43.04, 62.08], rotation: [0, 0, 0], scale: [5, 5, 5] },
  { position: [175.94, -41.63, 58.23], rotation: [0, 0, 0], scale: [5, 5, 5] },
];

const Forest = () => {
  const { nodes, materials } = useGLTF("/models/environment_models/forest.glb");

  const addRef = (ref) => {
    if (ref && !forestRefs.includes(ref)) {
      forestRefs.push(ref);
    }
  };

  useEffect(() => {
    forestRefs.length = 0;
  }, []);

  const renderForest = () => (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.Green_Elka}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Green_Elka}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.Green_Elka}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Green_Elka}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.Green_Elka}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["Green_sosna.001"]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials["Green_sosna.001"]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Kust_1}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Kust_2}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Paporotnik}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials["Wood_tree.001"]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials["Wood_tree.002"]}
        castShadow
        receiveShadow
      />
    </group>
  );

  return (
    <>
      {forestConfigs.map(({ position, rotation, scale }, idx) => (
        <group
          key={idx}
          ref={addRef}
          position={position}
          rotation={rotation}
          scale={scale}
        >
          {renderForest()}
        </group>
      ))}
    </>
  );
};

export default Forest;

useGLTF.preload("/models/environment_models/forest.glb");
