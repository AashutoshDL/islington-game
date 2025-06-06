import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { useCamera } from "../context/CameraContext";
import HoverTooltip from "../tooltip/hoverToolTip"

export default function Impact(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Impact.glb')
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
      <group position={[-14.872, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.hinalr_green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.nepal_block_iwndow_wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.nepla_wndpw}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.long_window_middle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.nepal_block_window_long}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.nepal_ratio_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.nepal_block_out_tink}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8.geometry}
          material={materials.concrete}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_9.geometry}
          material={materials.impact_wood_window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_10.geometry}
          material={materials.impcat_window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11.geometry}
          material={materials.impac_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_12.geometry}
          material={materials.pillar_impacyt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_13.geometry}
          material={materials.himal_main_bloko_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_14.geometry}
          material={materials.himal_wiindow_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_15.geometry}
          material={materials.himap_window1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_16.geometry}
          material={materials.himal_flat}
        />
      </group>
<<<<<<< HEAD
=======
          {hovered && <HoverTooltip text="IMPACT BLOCK" position={[-5, 29, -5]} />}
>>>>>>> UI/HoverUpdate2
    </group>
  )
}

<<<<<<< HEAD
useGLTF.preload('/models/college_models/Impact.glb')
=======
useGLTF.preload('/models/college_models/Impact.glb')
>>>>>>> UI/HoverUpdate2
