import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

const treeRefs = []

export const getTreeRefs = () => treeRefs

// Example positions, customize as needed
const treeConfigs = [
  { position: [-100, -30, 20], rotation: [0, 0.5, 0], scale: [3, 3, 3] },
  { position: [-100, -50, -110], rotation: [0, 1.2, 0], scale: [3.2, 3.2, 3.2] },
  // { position: [40, 0, 10], rotation: [0, 0.3, 0], scale: [2.9, 2.9, 2.9] },
  // { position: [-25, 0, -15], rotation: [0, 2.0, 0], scale: [3.1, 3.1, 3.1] },
  // { position: [0, 0, 30], rotation: [0, 0.8, 0], scale: [3, 3, 3] },
]

const Tree = () => {
  const { scene } = useGLTF('/models/environment_models/tree.glb')

  const addRef = (ref) => {
    if (ref && !treeRefs.includes(ref)) {
      treeRefs.push(ref)
    }
  }

  useEffect(() => {
    treeRefs.length = 0 // Clear refs on reload
  }, [])

  return (
    <>
      {treeConfigs.map(({ position, rotation, scale }, idx) => (
        <group
          key={idx}
          ref={addRef}
          position={position}
          rotation={rotation}
          scale={scale}
        >
          <primitive object={scene.clone()} />
        </group>
      ))}
    </>
  )
}

export default Tree