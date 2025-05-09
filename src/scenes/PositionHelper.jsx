import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AxesHelper } from 'three'

const PositionHelper = ({ children, axesSize = 2 }) => {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      const { x, y, z } = groupRef.current.position
      console.log(`Position: x=${x.toFixed(2)}, y=${y.toFixed(2)}, z=${z.toFixed(2)}`)
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={new AxesHelper(axesSize)} />
      {children}
    </group>
  )
}

export default PositionHelper