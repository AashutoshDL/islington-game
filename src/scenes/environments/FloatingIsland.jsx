

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Island(props) {
  const { nodes, materials } = useGLTF('/models/environment_models/Floating Island.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Island.geometry}
        material={materials['Material.001']}
        position={[0.124, -39.589, -2.77]}
        scale={93.825}
      />
    </group>
  )
}

useGLTF.preload('/models/environment_models/Floating Island.glb')
