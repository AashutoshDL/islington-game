import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function FloatingRock(props) {
  const { nodes, materials } = useGLTF('/models/environment_models/floatingrock.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_Material001_0.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/models/environment_models/floatingrock.glb')
