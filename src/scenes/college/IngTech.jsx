import { useGLTF } from '@react-three/drei'

export default function IngTech(props) {
  const { nodes, materials } = useGLTF('/models/college_models/ING_tech2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.65, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
        <group position={[71.318, -118.772, -2.264]} scale={3.089}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials['Canteen_Area:roof_ot_hubu.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials['Canteen_Area:hub_door_upper.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_2.geometry}
            material={materials['Canteen_Area:Hub_railing.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_3.geometry}
            material={materials['Canteen_Area:lambert26.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_4.geometry}
            material={materials['Canteen_Area:lambert23.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_5.geometry}
            material={materials['Canteen_Area:Hubu_Building.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_6.geometry}
            material={materials['long _pillar']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_7.geometry}
            material={materials['Canteen_Area:door_hub_liht.001']}
          />
        </group>
      </group>
      <group
        position={[-0.131, 0.623, 0.012]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.008, 0.01, 0.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials['Canteen_Area:lambert23.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials['Canteen_Area:door_hub_liht.002']}
        />
      </group>
      <group
        position={[-0.131, 2.508, 0.012]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.008, 0.01, 0.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials['Canteen_Area:lambert23.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials['Canteen_Area:door_hub_liht.002']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/ING_tech2.glb')
