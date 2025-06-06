import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Chautari(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Chiya_Chautari.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials['Britain_Block:Chair1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials.floor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_2.geometry}
          material={materials.Chautari_roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_3.geometry}
          material={materials.Building_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_4.geometry}
          material={materials.lambert7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_5.geometry}
          material={materials['lambert1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_6.geometry}
          material={materials.Kumari_red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_7.geometry}
          material={materials.lambert5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_8.geometry}
          material={materials.Kumari_pillars}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/Chiya_Chautari.glb')
