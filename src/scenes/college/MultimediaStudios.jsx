/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MulimediaStudios(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Mulimedia Studios.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.308, -0.025, 7.915]} rotation={[Math.PI / 2, 0, 0]} scale={23.545}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.MM_Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.lambert61}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.CCCamera}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.lambert71}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.lambert63}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.green_screen}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/Mulimedia Studios.glb')
