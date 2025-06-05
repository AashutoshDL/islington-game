import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Island(props) {
  const group = useRef()
  const { nodes, materials, scene } = useGLTF('/models/environment_models/Floating Island.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0.124, 0.306, -2.77]}
        scale={2.347}
      />
    </group>
  )
}

useGLTF.preload('/models/environment_models/Floating Island.glb')
