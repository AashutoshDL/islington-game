import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function SkillCharacter(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/environment_models/Skill_character.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="polySurface35"
            geometry={nodes.polySurface35.geometry}
            material={materials.hair}
            skeleton={nodes.polySurface35.skeleton}
          />
          <skinnedMesh
            name="polySurface50"
            geometry={nodes.polySurface50.geometry}
            material={materials.hair}
            skeleton={nodes.polySurface50.skeleton}
          />
          <group name="polySurface66">
            <skinnedMesh
              name="Mesh002"
              geometry={nodes.Mesh002.geometry}
              material={materials.lambert2}
              skeleton={nodes.Mesh002.skeleton}
            />
            <skinnedMesh
              name="Mesh002_1"
              geometry={nodes.Mesh002_1.geometry}
              material={materials.lambert8}
              skeleton={nodes.Mesh002_1.skeleton}
            />
            <skinnedMesh
              name="Mesh002_2"
              geometry={nodes.Mesh002_2.geometry}
              material={materials.lambert3}
              skeleton={nodes.Mesh002_2.skeleton}
            />
            <skinnedMesh
              name="Mesh002_3"
              geometry={nodes.Mesh002_3.geometry}
              material={materials.lambert7}
              skeleton={nodes.Mesh002_3.skeleton}
            />
            <skinnedMesh
              name="Mesh002_4"
              geometry={nodes.Mesh002_4.geometry}
              material={materials.body}
              skeleton={nodes.Mesh002_4.skeleton}
            />
            <skinnedMesh
              name="Mesh002_5"
              geometry={nodes.Mesh002_5.geometry}
              material={materials.lambert5}
              skeleton={nodes.Mesh002_5.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/environment_models/Skill_character.glb')
