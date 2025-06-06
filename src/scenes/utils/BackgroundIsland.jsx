import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function BackgroundIsland(props) {
  const { nodes, materials } = useGLTF('/models/environment_models/background_island.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/environment_models/background_island.glb')
