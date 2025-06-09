import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function CoffeeStation(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/college_models/coffee station.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="pCube118" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="Mesh001"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials.counter_wood}
          />
          <mesh
            name="Mesh001_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials.trapezqius}
          />
          <mesh
            name="Mesh001_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_2.geometry}
            material={materials.wood_pillars_lean}
          />
          <mesh
            name="Mesh001_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_3.geometry}
            material={materials.side_way_railing}
          />
          <mesh
            name="Mesh001_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_4.geometry}
            material={materials.ring_wod}
          />
          <mesh
            name="Mesh001_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_5.geometry}
            material={materials.roof_tin}
          />
          <mesh
            name="Mesh001_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_6.geometry}
            material={materials.Chair_rod}
          />
          <mesh
            name="Mesh001_7"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_7.geometry}
            material={materials.Chair_wood}
          />
          <mesh
            name="Mesh001_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_8.geometry}
            material={materials['wood.001']}
          />
          <mesh
            name="Mesh001_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_9.geometry}
            material={materials['lambert36.001']}
          />
          <mesh
            name="Mesh001_10"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_10.geometry}
            material={materials.floor}
          />
          <mesh
            name="Mesh001_11"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_11.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Mesh001_12"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_12.geometry}
            material={materials.upper_rod}
          />
          <mesh
            name="Mesh001_13"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_13.geometry}
            material={materials.counter_white}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/coffee station.glb')
