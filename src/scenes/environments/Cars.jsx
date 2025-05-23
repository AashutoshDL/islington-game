import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

const carsRefs = []
export const getcarsRefs = () => carsRefs

// Add as many configs as needed
const carsConfigs = [
  {
    modelPath: '/models/environment_models/beige_car.glb',
    position: [-80, -36.9, -200],
    rotation: [0, -1.5, 0],
    scale: [3, 3, 3],
  },
  {
    modelPath: '/models/environment_models/white_car.glb',
    position: [-100, -50, -110],
    rotation: [0, 1.2, 0],
    scale: [3.2, 3.2, 3.2],
  },
  {
    modelPath: '/models/environment_models/scooter.glb',
    position: [40, -40, 10],
    rotation: [0, 0.3, 0],
    scale: [2.9, 2.9, 2.9],
  },
]

const Cars = () => {
  // Clear refs on mount
  useEffect(() => {
    carsRefs.length = 0
  }, [])

  const addRef = (ref) => {
    if (ref && !carsRefs.includes(ref)) {
      carsRefs.push(ref)
    }
  }

  return (
    <>
      {carsConfigs.map(({ modelPath, position, rotation, scale }, idx) => {
        const { scene } = useGLTF(modelPath)
        return (
          <group
            key={idx}
            ref={addRef}
            position={position}
            rotation={rotation}
            scale={scale}
          >
            <primitive object={scene.clone()} />
          </group>
        )
      })}
    </>
  )
}

export default Cars