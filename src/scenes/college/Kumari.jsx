import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Kumari(props) {
  const { nodes, materials } = useGLTF("/models/college_models/Kumari.glb");
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface66.geometry}
        material={materials.lambert3}
        position={[9.937, 6.343, 5.061]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={76.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface65.geometry}
        material={materials.lambert2}
        position={[9.937, 6.343, 5.061]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={76.934}
      />
      <group
        position={[9.937, -8.356, 5.061]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={113.575}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface63.geometry}
          material={materials["Kumari:baricade"]}
          position={[0.176, -0.01, -0.129]}
          scale={[1.007, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface64.geometry}
          material={materials["Kumari:baricade"]}
          position={[0.195, 0.819, -0.129]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1.007, 1, 1]}
        />
      </group>
      <group
        position={[-11.642, 4.525, -3.375]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={3.819}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface14.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface15.geometry}
          material={materials.lambert9}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface16.geometry}
          material={materials.white_building_main}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface17.geometry}
          material={materials.lambert9}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface18.geometry}
          material={materials.lambert9}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface19.geometry}
          material={materials.lambert9}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface2.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface20.geometry}
          material={materials.lambert9}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface21.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface22.geometry}
          material={materials.q}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface23.geometry}
          material={materials.q}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface24.geometry}
          material={materials.q}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface25.geometry}
          material={materials.q}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface26.geometry}
          material={materials.q}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface27.geometry}
          material={materials.q}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface28.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface29.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface3.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface30.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface31.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface32.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface33.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface34.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface35.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface36.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface37.geometry}
          material={materials.white_building_main}
          position={[-0.283, -0.103, 0.522]}
          scale={[0.928, 0.845, 1.141]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface38.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface39.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface4.geometry}
          material={materials.white_building_main}
          position={[-0.283, 0.211, 0.327]}
          scale={[0.928, 0.928, 1.173]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface40.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface41.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface42.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface43.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface44.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface45.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface46.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface47.geometry}
          material={materials.lambert7}
          position={[-0.36, 0.099, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface48.geometry}
          material={materials.tin}
          position={[-0.21, 0.211, -0.047]}
          scale={0.928}
        />
        <group position={[-0.283, 0.211, -0.031]} scale={0.928}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh085.geometry}
            material={materials.lambert4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh085_1.geometry}
            material={materials.white_building_main}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface50.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface51.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KumaripolySurface61.geometry}
          material={materials.kumari_woof}
          position={[-0.283, 0.211, -0.031]}
          scale={0.928}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KumaripolySurface57.geometry}
        material={materials.lambert7}
        position={[-18.017, -8.784, -11.711]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5.946}
      />
    </group>
  );
}

useGLTF.preload("/models/college_models/Kumari.glb");
