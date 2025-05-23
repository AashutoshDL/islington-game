/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ING_Tech(props) {
  const { nodes, materials } = useGLTF('/models/college_models/ING Tech Block.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.009, -7.255, 83.732]} rotation={[Math.PI / 2, 0, 0]} scale={5.834}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.roof_ot_hubu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.door_hub_liht}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Hub_railing}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.lambert23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.hub_door_upper}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.Hubu_Building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials['Impact_Block:island_rock']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8.geometry}
          material={materials['Impact_Block:blcok_white_island']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_9.geometry}
          material={materials.lambert26}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/ING Tech Block.glb')
