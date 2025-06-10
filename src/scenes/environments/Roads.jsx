import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function AllRoads(props) {
  const { nodes, materials } = useGLTF('/models/college_models/All road.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube7.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/college_models/All road.glb')
