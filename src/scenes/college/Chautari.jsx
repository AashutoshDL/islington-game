import { useGLTF } from '@react-three/drei'

export default function Chautari(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Chiya_Chautari.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.cloth_chiar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Chair_rod}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials.wood_main_wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_3.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_4.geometry}
          material={materials.side_wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_5.geometry}
          material={materials.roof_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_6.geometry}
          material={materials.Chautari_roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_7.geometry}
          material={materials.Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_8.geometry}
          material={materials.Pillar_cylindrical}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_9.geometry}
          material={materials.brick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_10.geometry}
          material={materials.Back_wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_11.geometry}
          material={materials.wall_rods}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/Chiya_Chautari.glb')
