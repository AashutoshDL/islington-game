import { useGLTF } from '@react-three/drei'

export default function LargeRoad(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Large road.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface1079.geometry}
        material={materials.lambert1}
        position={[-0.541, 0.132, 3.237]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.115}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface558.geometry}
        material={materials.lambert57}
        position={[0.644, -0.157, -3.855]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.269, 0.115, 0.141]}
      />
    </group>
  )
}

useGLTF.preload('/models/college_models/Large road.glb')
