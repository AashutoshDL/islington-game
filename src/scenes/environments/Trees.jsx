import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

const newTreeRefs = []

export const getNewTreeRefs = () => newTreeRefs

const newTreeConfigs = [
  { position: [110, -35.5, 29.2], rotation: [0, 2.9, 0], scale: [1, 1, 1] },
  { position: [105, -35.5, 39.2], rotation: [0, 2.9, 0], scale: [1, 1, 1] },
  { position: [133, -35.5, 35.6], rotation: [0, 2.9, 0], scale: [1, 1, 1] },
  { position: [128, -35.5, 45.6], rotation: [0, 2.9, 0], scale: [1, 1, 1] },
  { position: [158, -35.5, 42.9], rotation: [0, 2.9, 0], scale: [1, 1, 1] },
  { position: [151, -35.5, 52.6], rotation: [0, 2.9, 0], scale: [1, 1, 1] },
]

const NewTrees = () => {
  const { nodes, materials } = useGLTF('/models/environment_models/Trees.glb')

  const addRef = (ref) => {
    if (ref && !newTreeRefs.includes(ref)) {
      newTreeRefs.push(ref)
    }
  }

  useEffect(() => {
    newTreeRefs.length = 0 // Clear on reload
  }, [])

  const renderTreeSet = () => (
    <>
      <group position={[200.468, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.NormalTree_1_1.geometry} material={materials.NormalTree_Bark} castShadow receiveShadow />
        <mesh geometry={nodes.NormalTree_1_2.geometry} material={materials.NormalTree_Leaves} castShadow receiveShadow />
      </group>
      <group position={[205.39, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.NormalTree_2_1.geometry} material={materials.NormalTree_Bark} castShadow receiveShadow />
        <mesh geometry={nodes.NormalTree_2_2.geometry} material={materials.NormalTree_Leaves} castShadow receiveShadow />
      </group>
      <group position={[210.091, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.NormalTree_3_1.geometry} material={materials.NormalTree_Bark} castShadow receiveShadow />
        <mesh geometry={nodes.NormalTree_3_2.geometry} material={materials.NormalTree_Leaves} castShadow receiveShadow />
      </group>
      <group position={[216.945, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.NormalTree_4_1.geometry} material={materials.NormalTree_Bark} castShadow receiveShadow />
        <mesh geometry={nodes.NormalTree_4_2.geometry} material={materials.NormalTree_Leaves} castShadow receiveShadow />
      </group>
      <group position={[221.728, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.NormalTree_5_1.geometry} material={materials.NormalTree_Bark} castShadow receiveShadow />
        <mesh geometry={nodes.NormalTree_5_2.geometry} material={materials.NormalTree_Leaves} castShadow receiveShadow />
      </group>
    </>
  )

  return (
    <>
      {newTreeConfigs.map(({ position, rotation, scale }, idx) => (
        <group key={idx} ref={addRef} position={position} rotation={rotation} scale={scale}>
          {renderTreeSet()}
        </group>
      ))}
    </>
  )
}

export default NewTrees

useGLTF.preload('/models/environment_models/Trees.glb')
