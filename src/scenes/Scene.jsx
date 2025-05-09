import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'

//environment imports
import Tree from './environments/Tree'
import CustomClouds from './environments/Clouds'

//college imports
import Kumari from './college/Kumari'
import Skill from './college/Skill'
import Alumni from './college/Alumni'
import Chautari from './college/Chautari'
import Britian from './college/Britian'
import BirdFlock from './environments/BirdFlock'

const Scene = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh', background: '#93aa53' }}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [120, 120, 120], fov: 60 }}
      shadows
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={5} castShadow />

      {/* uncomment these for environment */}
{/* 
      <Tree count={15} />
      <CustomClouds/>
      <BirdFlock /> */}

      {/* displaying colleges for the main scene */}
      <Kumari position={[-20,-40,-150]} rotation={[0.1,2.8,0]}/>
      <Skill position={[-70,-40,-20]} rotation={[0,-0.3,0]} scale={[10,10,10]}/>
      <Alumni position={[-10,-43,10]} rotation={[0,-0.3,0]} scale={[4,4,4]}/>
      <Britian position={[35,-30,-40]} rotation={[0,-0.3,0]} scale={[2,2,2]} />
      <Chautari position={[-5,-63,105]} rotation={[0,-1.85,0]} scale={[0.7,0.7,0.7]} />

    </Canvas>
  )
}

export default Scene