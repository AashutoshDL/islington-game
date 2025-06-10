import { useGLTF } from '@react-three/drei'

export default function BaskeballCourt(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Basketball court.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Baskteball_rng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.basketball_long}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.basketball_pole_down}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.Basketball_court}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pPlane1.geometry}
        material={materials.ring}
        position={[10.588, 3.525, 3.125]}
        scale={[0.017, 0.005, 0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pPlane2.geometry}
        material={materials.ring}
        position={[-11.708, 3.525, 3.128]}
        scale={[0.017, 0.005, 0.017]}
      />
    </group>
  )
}

useGLTF.preload('/models/college_models/Basketball court.glb')
