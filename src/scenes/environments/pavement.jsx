import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

const pavementRefs = []

export const getPavementRefs = () => pavementRefs

// Example pavement positions (customize as needed)
const pavementConfigs = [
  {  position:[18, -36, 6], rotation:[0, -0.3, 0], scale:[8,2,17]} ,
  /* { position: [0, 0, 100], rotation: [0, 0, 0], scale: [100, 100, 100] }, */
  // Add more configurations here if needed
]

const Pavement = () => {
  const { nodes, materials } = useGLTF('/models/environment_models/Path Straight.glb')

  const addRef = (ref) => {
    if (ref && !pavementRefs.includes(ref)) {
      pavementRefs.push(ref)
    }
  }

  useEffect(() => {
    pavementRefs.length = 0 // Clear on reload
  }, [])

  return (
    <>
      {pavementConfigs.map(({ position, rotation, scale }, idx) => (
        <group
          key={idx}
          ref={addRef}
          position={position}
          rotation={rotation}
          scale={scale}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Path_Straight_1.geometry}
              material={materials.Stone_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Path_Straight_2.geometry}
              material={materials.Stone_Dark}
            />
          </group>
        </group>
      ))}
    </>
  )
}

export default Pavement

useGLTF.preload('/models/environment_models/Path Straight.glb')
