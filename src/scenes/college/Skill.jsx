import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Skill(props) {
  const { nodes, materials } = useGLTF("/models/college_models/Skill.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.024, 0.011, 0.178]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.147, 1.322, 1.147]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh148.geometry}
          material={materials.Main_Building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh148_1.geometry}
          material={materials["lambert3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh148_2.geometry}
          material={materials["lambert1.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh148_3.geometry}
          material={materials.window_glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh148_4.geometry}
          material={materials.lambert5}
        />
      </group>
      <group
        position={[-0.003, 0.011, -0.168]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.147}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2.geometry}
          material={materials.Main_Building}
          position={[-1.955, 1.457, -4.39]}
          scale={[0.26, 0.26, 0.386]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube3.geometry}
          material={materials.lambert6}
          position={[-2.212, 2.664, -2.715]}
          scale={[1.979, 0.046, 0.585]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube4.geometry}
          material={materials.lambert6}
          position={[-2.212, 2.661, -1.84]}
          scale={[1.979, 0.046, 0.585]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube5.geometry}
          material={materials.lambert6}
          position={[-2.212, 2.659, -1.068]}
          scale={[1.979, 0.046, 0.585]}
        />
        <group position={[-2.269, 1.501, -2.171]} scale={[2.195, 2.442, 4.219]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161.geometry}
            material={materials.skill_roof}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161_1.geometry}
            material={materials.Main_Building}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2.geometry}
          material={materials.Banner}
          position={[-2.284, 1.515, -2.188]}
          scale={[2.195, 2.104, 3.708]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane17.geometry}
          material={materials.lambert5}
          position={[-1.569, -4.581, -0.476]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.802, 1.288, 1.821]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane18.geometry}
          material={materials.lambert5}
          position={[-1.569, -3.319, -0.476]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.802, 1.288, 1.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane20.geometry}
          material={materials.lambert5}
          position={[-0.412, 2.224, -3.65]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.003, 0.643, 0.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane21.geometry}
          material={materials.lambert5}
          position={[0.324, 2.224, -3.65]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.003, 0.643, 0.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane22.geometry}
          material={materials.lambert5}
          position={[1.06, 2.224, -3.65]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.003, 0.643, 0.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane23.geometry}
          material={materials.lambert5}
          position={[0.324, 2.224, -0.311]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.003, 0.643, 0.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane24.geometry}
          material={materials.lambert5}
          position={[-0.412, 2.224, -0.311]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.003, 0.643, 0.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPlane25.geometry}
          material={materials.lambert5}
          position={[1.06, 2.224, -0.311]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.003, 0.643, 0.849]}
        />
        <group position={[-1.566, 0.887, -1.404]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <group position={[-1.566, 0.887, -0.687]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh159.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh159_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh159_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <group position={[-1.566, 1.998, -0.687]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh166.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh166_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh166_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <group position={[-1.566, 0.887, 0.092]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh152.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh152_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh152_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <group position={[-1.566, 1.998, 0.092]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh157.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh157_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh157_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <group position={[-1.566, 0.887, 0.849]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <group position={[-1.566, 1.998, 0.849]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh164.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh164_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh164_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <group position={[-1.566, 1.998, -1.404]} scale={[0.802, 0.701, 0.709]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh158.geometry}
            material={materials["lambert3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh158_1.geometry}
            material={materials["lambert1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh158_2.geometry}
            material={materials.window_glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.typeMesh1.geometry}
          material={materials.aiStandardSurface1}
          position={[-1.207, 2.321, -3.957]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.018}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/college_models/Skill.glb");
