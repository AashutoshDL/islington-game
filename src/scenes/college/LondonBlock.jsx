import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCamera } from "../context/CameraContext";
import HoverToolTip from '../utils/HoverToolTip';

export default function LondonBlock(props) {
  const { nodes, materials } = useGLTF(
    "/models/college_models/londonblock.glb"
  );
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { activeCamera } = useCamera();

  const handlePointerOver = (e) => {
    if (activeCamera == "default") return;
    e.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = (e) => {
    if (activeCamera == "default") return;
    e.stopPropagation();
    setHovered(false);
  };
  return (
    <group
      {...props}
      dispose={null}
      ref={groupRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Mesh001.geometry}
          material={materials.Uk_Block_main}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_1.geometry}
          material={materials.wood_windows}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_2.geometry}
          material={materials.windows}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_3.geometry}
          material={materials["lambert1.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_4.geometry}
          material={materials.Uk_door}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_5.geometry}
          material={materials.blue_windows_wood}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_6.geometry}
          material={materials.lambert2}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_7.geometry}
          material={materials.lambert7}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_8.geometry}
          material={materials["window_glass.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_9.geometry}
          material={materials.lower_windows}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_10.geometry}
          material={materials["banner.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_11.geometry}
          material={materials.London_block_main}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_12.geometry}
          material={materials.lambert12}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_13.geometry}
          material={materials.London_blue}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_14.geometry}
          material={materials.Door}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_15.geometry}
          material={materials.STAIS}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Mesh001_16.geometry}
          material={materials["WALL TOP"]}
          castShadow
          receiveShadow
        />
      </group>
      {hovered && <HoverToolTip text="UK Block" position={[0, 25, 0]} />}
      
    </group>
  );
}

useGLTF.preload("/models/college_models/londonblock.glb");
