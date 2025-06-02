import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HimalParking(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Himal parking.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.overall_parking}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.lambert9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.tin_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.wheels}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.handle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.triangle}
        />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_6.geometry} material={materials.hut} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_7.geometry} material={materials.door} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/Himal parking.glb')
