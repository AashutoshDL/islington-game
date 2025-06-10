import { useGLTF } from '@react-three/drei'

export default function SkillRoad(props) {
  const { nodes, materials } = useGLTF('/models/college_models/road-skill.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface560.geometry}
          material={materials['lambert57.004']}
          position={[-0.114, 0, 0]}
          scale={[1, 0.636, 1]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MASH3_ReproMesh1.geometry}
        material={materials['lambert1.004']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/college_models/road-skill.glb')
