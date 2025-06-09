import { useGLTF } from '@react-three/drei'

export default function SkillSSD(props) {
  const { nodes, materials } = useGLTF('/models/college_models/SkillStudentService.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[1.906, 2.687, 3.185]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.025, 0.018]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials['typeBlinn.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials['Main_Building.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials['lambert3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_3.geometry}
          material={materials['lambert1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_4.geometry}
          material={materials['window_glass.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_5.geometry}
          material={materials['lambert5.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/SkillStudentService.glb')
