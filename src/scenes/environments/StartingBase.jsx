import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function StartingBase(props) {
  const { nodes, materials } = useGLTF('/models/environment_models/starting_base.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.399, -0.082, 3.35]} rotation={[Math.PI / 2, 0, 0]} scale={0.248}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials['Impact_Block:island_rock']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials['Canteen_Area:Impact_Block:blcok_white_island']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials['Canteen_Area:Impact_Block:island_rock']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/environment_models/starting_base.glb')
