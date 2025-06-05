import { useTexture } from '@react-three/drei'
import React, { useRef } from 'react'

const TopViewClouds = () => {
  const cloudTexture = useTexture('/models/environment_models/topviewcloud.png')

  return (
    <mesh position={[0, -2000, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10000, 10000]} />
      <meshStandardMaterial
        map={cloudTexture}
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </mesh>
  )
}

export default TopViewClouds