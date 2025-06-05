import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Bird(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/environment_models/flying_bird.glb')
  const { actions,names } = useAnimations(animations, group)

  useEffect(() => {
    // Play the first animation if available
    if (names[0] && actions[names[0]]) {
      actions[names[0]].reset().play()
    }
  }, [actions, names])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="b41216c5de024b378dcea87d8b695888fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="FlyingBird"
                  position={[-0.003, 0.079, 0.074]}
                  rotation={[2.922, -0.036, 3.134]}
                  scale={0.1}>
                  <group name="Bird" position={[0.064, 0.146, 0.587]} scale={0.104}>
                    <mesh
                      name="Bird_roll_env_07lambert10_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Bird_roll_env_07lambert10_0.geometry}
                      material={materials.roll_env_07lambert10}
                    />
                  </group>
                  <group
                    name="Bird_RW"
                    position={[-0.057, 0.196, 0.349]}
                    rotation={[-0.066, -0.051, 0.025]}
                    scale={0.104}>
                    <mesh
                      name="Bird_RW_roll_env_07fishMaterialSG1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Bird_RW_roll_env_07fishMaterialSG1_0.geometry}
                      material={materials.roll_env_07fishMaterialSG1}
                    />
                  </group>
                  <group
                    name="Bird_LW"
                    position={[-0.057, 0.196, 0.349]}
                    rotation={[-0.09, -0.046, -3.105]}
                    scale={0.104}>
                    <mesh
                      name="Bird_LW_roll_env_07fishMaterialSG1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Bird_LW_roll_env_07fishMaterialSG1_0.geometry}
                      material={materials.roll_env_07fishMaterialSG1}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/environment_models/flying_bird.glb')
