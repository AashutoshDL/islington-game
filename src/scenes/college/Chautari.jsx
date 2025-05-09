import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Chautari(props) {
  const { nodes, materials } = useGLTF('/public/models/college_models/Chautari.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[6.154, -5.345, 0.308]} rotation={[Math.PI / 2, 0, 0]} scale={12.099}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface200.geometry}
          material={materials['floor.003']}
          scale={[1.074, 1, 1]}
        />
      </group>
      <group
        position={[9.525, 18.047, 31.5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[64.628, 58.419, 106.725]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015.geometry}
          material={materials['lambert10.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015_1.geometry}
          material={materials['pink.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015_2.geometry}
          material={materials['lambert11.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh015_3.geometry}
          material={materials['lambert12.001']}
        />
      </group>
      <group position={[-46.489, -19.548, -33.347]} rotation={[Math.PI / 2, 0, 0]} scale={19.651}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016.geometry}
          material={materials['Chautari_roof.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_1.geometry}
          material={materials['Building_body.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_2.geometry}
          material={materials['lambert7.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table.geometry}
        material={materials['Britain_Block:Chair1.003']}
        position={[6.154, -5.345, 0.308]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={12.099}
      />
      <group position={[6.154, -5.345, 0.308]} rotation={[Math.PI / 2, 0, 0]} scale={12.099}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018.geometry}
          material={materials['lambert5.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_1.geometry}
          material={materials['Kumari_pillars.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={materials['Chautari_roof.003']}
        position={[6.154, -5.345, 0.308]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[12.722, 12.099, 12.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.red_chautari.geometry}
        material={materials['Kumari_red.003']}
        position={[6.154, -5.345, 0.308]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[12.722, 12.099, 12.099]}
      />
    </group>
  )
}

useGLTF.preload('/public/models/college_models/Chautari.glb')