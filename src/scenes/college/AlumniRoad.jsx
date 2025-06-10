import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function AlumniRoad(props) {
  const { nodes, materials } = useGLTF('/models/college_models/alumni road.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-6.386, 15.115, -3.867]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
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
          material={materials.Road_texturing}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/alumni road.glb')
