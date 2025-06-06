import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { useCamera } from "../context/CameraContext";
import HoverToolTip from "../utils/HoverToolTip";


export default function Alumni(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Alumni.glb')
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
          geometry={nodes.Mesh001.geometry}
          material={materials.lambert11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials.lambert12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_3.geometry}
          material={materials.lambert10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_4.geometry}
          material={materials.alumni_support}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_5.geometry}
          material={materials.alumni_base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_6.geometry}
          material={materials.wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_7.geometry}
          material={materials.lambert14}
        />
      </group>
      {hovered && <HoverToolTip text="Alumni Block" position={[15, 25, 5]} />}

    </group>
  )
}

useGLTF.preload('/models/college_models/Alumni.glb')
