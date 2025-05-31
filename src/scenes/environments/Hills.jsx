import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

const hillRefs = []

export const getHillRefs = () => hillRefs

// Example positions, customize as needed
const hillConfigs = [
  { position: [-60, -50, 540], rotation: [0, 0, 0], scale: [0.3, 0.3, 0.3] },
  { position: [-185, -50, 500], rotation: [0, 1, 0], scale: [0.2, 0.2, 0.2] },
  { position: [60, -50, 500], rotation: [0, 2, 0], scale: [0.2, 0.2, 0.2] },
  { position: [160, -50, 430], rotation: [0, 0.7, 0], scale: [0.3, 0.3, 0.3] },
  { position: [240, -50, 320], rotation: [0, 1, 0], scale: [0.3, 0.3, 0.3] },

  // Add more hill configurations here
]

const Hills = () => {
  const { nodes, materials } = useGLTF('/models/environment_models/hills.glb')

  const addRef = (ref) => {
    if (ref && !hillRefs.includes(ref)) {
      hillRefs.push(ref)
    }
  }

  useEffect(() => {
    hillRefs.length = 0 // Clear refs on reload
  }, [])

  return (
    <>
      {hillConfigs.map(({ position, rotation, scale }, idx) => (
        <group
          key={idx}
          ref={addRef}
          position={position}
          rotation={rotation}
          scale={scale}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Node.geometry}
            material={materials.Landscape}
          />
        </group>
      ))}
    </>
  )
}

useGLTF.preload('/models/environment_models/hills.glb')
export default Hills