import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useCamera } from "../context/CameraContext";
import HoverToolTip from "../utils/HoverToolTip";


export default function Britian(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Britain2.glb')
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { activeCamera } = useCamera();

  const handlePointerOver = (e) => {
    if (activeCamera == "default") return;
    e.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = (e) => {
    if (activeCamera == "default") return;
    e.stopPropagation();
    setHovered(false);
  };
  return (
    <group
      {...props}
      dispose={null}
      ref={groupRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.lambert29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Chair1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.blue_chair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.FLOOR_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.lambert22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.black_tree_part}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.Brit_sitting}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8.geometry}
          material={materials.lambert28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_9.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_10.geometry}
          material={materials.windows_rod}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11.geometry}
          material={materials.stripe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_12.geometry}
          material={materials.aiStandardSurface7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_13.geometry}
          material={materials.marveel_brit}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_14.geometry}
          material={materials.marble}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_15.geometry}
          material={materials.roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_16.geometry}
          material={materials.lambert15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_17.geometry}
          material={materials.lambert14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_18.geometry}
          material={materials.lambert16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_19.geometry}
          material={materials.windows_wood_plus}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_20.geometry}
          material={materials.main_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_21.geometry}
          material={materials.windows_handle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_22.geometry}
          material={materials.windows_glass_plus}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_23.geometry}
          material={materials.aiStandardSurface1}
        />
      </group>
      {hovered && <HoverToolTip text="BRIT BLOCK" position={[0, 15, -2]} />}
     
    </group>
  )
}

useGLTF.preload('/models/college_models/Britain2.glb')
