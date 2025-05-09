import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Britian(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Britain.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-4.045, -4.072, -6.411]} rotation={[Math.PI / 2, 0, -0.072]} scale={1.56}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface141.geometry}
          material={materials['stripe.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface142.geometry}
          material={materials['aiStandardSurface1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface41.geometry}
          material={materials['windows_rod.001']}
          position={[-3.056, -3.377, 6.488]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.436, 0.738, 2.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface51.geometry}
          material={materials['stripe.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface181.geometry}
        material={materials['Chair1.002']}
        position={[-3.86, -4.068, 6.553]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.112}
      />
      <group position={[2.918, -3.815, 0.262]} rotation={[Math.PI / 2, 0, 0]} scale={1.866}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012.geometry}
          material={materials['roof.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_1.geometry}
          material={materials['Chair1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_2.geometry}
          material={materials['lambert15.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_3.geometry}
          material={materials['lambert14.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_4.geometry}
          material={materials['lambert16.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_5.geometry}
          material={materials['lambert1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_6.geometry}
          material={materials['windows_wood_plus.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_7.geometry}
          material={materials['main_body.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_8.geometry}
          material={materials['stripe.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_9.geometry}
          material={materials['windows_rod.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_10.geometry}
          material={materials['windows_handle.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_11.geometry}
          material={materials['windows_glass_plus.001']}
        />
      </group>
      <group position={[2.918, -4.176, 0.262]} rotation={[Math.PI / 2, 0, 0]} scale={1.866}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh013.geometry}
          material={materials['Base.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh013_1.geometry}
          material={materials['lambert19.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/Britain.glb')
