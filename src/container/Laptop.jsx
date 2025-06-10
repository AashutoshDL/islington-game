import { Html, useGLTF } from '@react-three/drei'

export default function Laptop({ showTerminal }) {
  const { nodes, materials } = useGLTF('/models/game_models/laptop.glb')

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_ComputerFrame_0.geometry}
        material={materials.ComputerFrame}
        position={[0, 0.976, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen_ComputerScreen_0.geometry}
        material={materials.ComputerScreen}
        position={[0, 0.65, -10.3]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={[100, 100, 88.235]}
      />
      {!showTerminal && (
        <Html position={[0, 2.5, 0]} center>
          <div className="bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-medium text-black shadow-md">
            Press <span className="font-bold">E</span> to open terminal
          </div>
        </Html>
      )}
    </group>
  )
}
