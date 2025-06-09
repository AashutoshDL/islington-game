import { useGLTF } from '@react-three/drei'

export default function Canteen(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Canteen.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[7.351, 5.547, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.814, 1.57, 1.57]}>
        <group position={[-14.979, 1.11, 1.151]} scale={[3.534, 9.432, 2.49]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh011.geometry}
            material={materials.side_building}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh011_1.geometry}
            material={materials.blue_buildijg_sde}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh011_2.geometry}
            material={materials.lambert11}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube10.geometry}
          material={materials.table_and_chair}
          position={[-15.433, -4.07, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube17.geometry}
          material={materials.table_and_chair}
          position={[-13.879, -6.128, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube18.geometry}
          material={materials.table_and_chair}
          position={[-13.879, -5.099, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube19.geometry}
          material={materials.table_and_chair}
          position={[-13.879, -4.07, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2.geometry}
          material={materials.white}
          position={[-12.693, 3.751, 2.056]}
          scale={[0.607, 2.447, 0.602]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube20.geometry}
          material={materials.table_and_chair}
          position={[-17.789, -1.287, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube21.geometry}
          material={materials.table_and_chair}
          position={[-17.789, -3.136, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube22.geometry}
          material={materials.table_and_chair}
          position={[-17.789, -4.985, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube23.geometry}
          material={materials.table_and_chair}
          position={[-19.483, -3.136, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube24.geometry}
          material={materials.table_and_chair}
          position={[-19.483, -1.287, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube25.geometry}
          material={materials.table_and_chair}
          position={[-19.483, -4.985, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26.geometry}
          material={materials.table_and_chair}
          position={[-29.432, -4.985, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27.geometry}
          material={materials.table_and_chair}
          position={[-29.432, -3.136, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube28.geometry}
          material={materials.table_and_chair}
          position={[-29.432, -1.287, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube29.geometry}
          material={materials.table_and_chair}
          position={[-27.396, -1.287, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube30.geometry}
          material={materials.table_and_chair}
          position={[-27.396, -3.136, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube31.geometry}
          material={materials.table_and_chair}
          position={[-27.396, -4.985, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39.geometry}
          material={materials.railingt}
          position={[4.627, -3.885, 1.866]}
          scale={[0.107, 4.982, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube74.geometry}
          material={materials.table_and_chair}
          position={[-21.153, -1.287, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube75.geometry}
          material={materials.table_and_chair}
          position={[-21.153, -3.136, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube76.geometry}
          material={materials.table_and_chair}
          position={[-21.153, -4.985, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube77.geometry}
          material={materials.table_and_chair}
          position={[-22.761, -1.287, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube78.geometry}
          material={materials.table_and_chair}
          position={[-22.761, -3.136, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube79.geometry}
          material={materials.table_and_chair}
          position={[-22.761, -4.985, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube8.geometry}
          material={materials.table_and_chair}
          position={[-15.433, -6.128, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube80.geometry}
          material={materials.table_and_chair}
          position={[-25.392, -4.985, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube81.geometry}
          material={materials.table_and_chair}
          position={[-25.392, -3.136, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube82.geometry}
          material={materials.table_and_chair}
          position={[-25.392, -1.287, -1.045]}
          rotation={[0, 0, Math.PI]}
          scale={1.361}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube83.geometry}
          material={materials.railingt}
          position={[4.627, -9.852, 1.866]}
          scale={[0.107, 1.203, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube84.geometry}
          material={materials.railingt}
          position={[4.627, -12.414, 1.866]}
          scale={[0.107, 0.336, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube85.geometry}
          material={materials.table_and_chair}
          position={[-13.736, -9.681, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube86.geometry}
          material={materials.table_and_chair}
          position={[-13.736, -8.652, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube87.geometry}
          material={materials.table_and_chair}
          position={[-13.736, -7.623, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube88.geometry}
          material={materials.table_and_chair}
          position={[-15.399, -9.681, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube89.geometry}
          material={materials.table_and_chair}
          position={[-15.399, -8.652, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube9.geometry}
          material={materials.table_and_chair}
          position={[-15.433, -5.099, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube90.geometry}
          material={materials.table_and_chair}
          position={[-15.399, -7.623, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube91.geometry}
          material={materials.lambert29}
          position={[-13.213, 3.751, 1.259]}
          scale={[0.015, 2.447, 0.166]}
        />
        <group position={[-3.575, -0.489, -0.55]} scale={1.183}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh005.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh005_1.geometry}
            material={materials.one_more_bite}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh005_2.geometry}
            material={materials.one_more_bit_stove_gray}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface57.geometry}
          material={materials.wood}
          position={[-21.129, -6.316, -3.171]}
          scale={2.601}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface58.geometry}
          material={materials.wood}
          position={[-18.919, -9.264, -2.556]}
          scale={[1.381, 3.721, 2.308]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface59.geometry}
          material={materials.wood}
          position={[-21.129, -12.642, -3.171]}
          scale={2.601}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface60.geometry}
          material={materials.wood}
          position={[-18.319, -11.545, -2.556]}
          scale={[1.256, 2.308, 2.308]}
        />
        <group position={[-5.731, 3.616, 2.505]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh035.geometry}
            material={materials.windoes_sky_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh035_1.geometry}
            material={materials.Min_building_color}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh035_2.geometry}
            material={materials.Roof_canteen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh035_3.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh035_4.geometry}
            material={materials.lambert5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh035_5.geometry}
            material={materials.dark_green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh035_6.geometry}
            material={materials.lambert8}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane3.geometry}
          material={materials.lambert11}
          position={[-9.936, 0.13, -0.717]}
          scale={[5.417, 9.916, 3.49]}
        />
        <group
          position={[-6.78, -8.887, -1.694]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[6.974, 6.651, 3.49]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010.geometry}
            material={materials.learning_jone_canteen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010_1.geometry}
            material={materials.inside_wall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010_2.geometry}
            material={materials.leaning_zone_back_wall}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane5.geometry}
          material={materials.blue_spot}
          position={[0.796, -8.313, 2.786]}
          scale={[5.004, 5.228, 5.694]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube92.geometry}
        material={materials.lambert1}
        position={[1.457, 3.15, 1.655]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.19, 0.01, 0.01]}
      />
      <group
        position={[7.351, 5.547, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.814, 1.57, 1.57]}>
        <group
          position={[-6.78, -8.887, -1.694]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[6.974, 6.651, 3.49]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface62.geometry}
            material={materials.learning_jone_canteen}
            position={[0, -1.065, 0]}
            scale={[1, 1.14, 1]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/college_models/Canteen.glb')
