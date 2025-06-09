import { useGLTF } from '@react-three/drei'

export default function Resource(props) {
  const { nodes, materials } = useGLTF('/models/college_models/RESOURCE.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[17.236, 0.004, -3.553]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.023, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.bul_2_green_windows}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.wgite_roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.resource_bulidng}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.lambert3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.lambert5}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/RESOURCE.glb')
