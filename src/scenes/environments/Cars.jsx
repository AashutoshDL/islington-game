import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const carsRefs = []
export const getcarsRefs = () => carsRefs

// Define the path for the white car (adjust these waypoints to match your scene)
const whiteCar_path = [
   // Starting position
  
  
  new THREE.Vector3(-112.7, -36.5, -20),
  new THREE.Vector3(-55, -36.5, -3),
  new THREE.Vector3(15, -36.5, 18),
  
  new THREE.Vector3(58, -36.5, 32),
  new THREE.Vector3(75, -36, -23),
  new THREE.Vector3(116, -36, -150),
  new THREE.Vector3(-80, -38.2, -223),
  
   // Back to start
]

const carsConfigs = [
  {
    modelPath: '/models/environment_models/beige_car.glb',
    position: [-100, -36.2, -110],
    rotation: [0, 2.9, 0],
    scale: [2, 2, 2],
    animate: false,
  },
  {
    modelPath: '/models/environment_models/toyota_hilux_2015.glb',
    position: [-85, -36.2, -106],
    rotation: [0, -1.8, 0],
    scale: [0.5, 0.5, 0.5],
    animate: false,
  },
  {
    modelPath: '/models/environment_models/Bus.glb',
    position: [-92, -36.2, -110],
    rotation: [0, 3, 0],
    scale: [0.5, 0.5, 0.5],
    animate: false,
  },
  {
    modelPath: '/models/environment_models/SUV.glb',
    position: [-76, -36.2, -104],
    rotation: [0, -3.3, 0],
    scale: [2, 2, 2],
    animate: false,
  },
  {
    modelPath: '/models/environment_models/beige_car.glb',
    position: [-62, -36.2, -100],
    rotation: [0, 3, 0],
    scale: [2, 2, 2],
    animate: false,
  },
  {
    modelPath: '/models/environment_models/beige_car.glb',
    position: [-52, -36.2, -100],
    rotation: [0, 3, 0],
    scale: [2, 2, 2],
    animate: false,
  },
  // {
  //   modelPath: '/models/environment_models/white_car.glb',
  //   position: [[-119.7, -36.5, -7]],
  //   rotation: [0, 1.2, 0],
  //   scale: [3.2, 3.2, 3.2],
  //   animate: true, // This car will be animated
  //   path: whiteCar_path,
  //   speed: 0.01, // Adjust speed (0.005 = slow, 0.02 = fast)
  // },
]

const AnimatedCar = ({ config, addRef }) => {
  const { scene } = useGLTF(config.modelPath)
  const groupRef = useRef()
  const progressRef = useRef(0)

  useEffect(() => {
    addRef(groupRef.current)
  }, [addRef])

  useFrame((state, delta) => {
    if (!config.animate || !config.path || !groupRef.current) return

    // Update progress along the path
    progressRef.current += config.speed * delta * 60 // Normalize for 60fps
    
    // Loop the animation
    if (progressRef.current >= config.path.length - 1) {
      progressRef.current = 0
    }

    // Get current and next waypoints
    const currentIndex = Math.floor(progressRef.current)
    const nextIndex = (currentIndex + 1) % config.path.length
    const t = progressRef.current - currentIndex // Interpolation factor

    // Interpolate position between waypoints
    const currentPos = config.path[currentIndex]
    const nextPos = config.path[nextIndex]
    const newPosition = currentPos.clone().lerp(nextPos, t)

    // Update car position
    groupRef.current.position.copy(newPosition)

    // Calculate direction for rotation
    const direction = nextPos.clone().sub(currentPos).normalize()
    if (direction.length() > 0) {
      const angle = Math.atan2(direction.x, direction.z)
      groupRef.current.rotation.y = angle
    }
  })

  return (
    <group
      ref={groupRef}
      position={config.position}
      rotation={config.rotation}
      scale={config.scale}
    >
      <primitive object={scene.clone()} />
    </group>
  )
}

const StaticCar = ({ config, addRef }) => {
  const { scene } = useGLTF(config.modelPath)
  const groupRef = useRef()

  useEffect(() => {
    addRef(groupRef.current)
  }, [addRef])

  return (
    <group
      ref={groupRef}
      position={config.position}
      rotation={config.rotation}
      scale={config.scale}
    >
      <primitive object={scene.clone()} />
    </group>
  )
}

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
      {carsConfigs.map((config, idx) => {
        if (config.animate) {
          return (
            <AnimatedCar
              key={idx}
              config={config}
              addRef={addRef}
            />
          )
        } else {
          return (
            <StaticCar
              key={idx}
              config={config}
              addRef={addRef}
            />
          )
        }
      })}
    </>
  )
}

export default Cars