import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { useCamera } from "../context/CameraContext";
import HoverTooltip from "../tooltip/hoverToolTip"

export default function Kumari(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Kuamri_car.glb')
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
      <group position={[22.405, -0.283, 11.81]} rotation={[0, -1.334, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottom.geometry}
          material={materials.Miscs}
          position={[-0.002, 0.757, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Exhaust.geometry}
          material={materials.Miscs}
          position={[-0.002, 0.757, 0]}
          scale={6.052}
        />
        <group
          position={[0.862, 0.306, 1.221]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={21.229}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_WHEEL_1.geometry}
            material={materials.Miscs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_WHEEL_2.geometry}
            material={materials.Rims}
          />
        </group>
        <group
          position={[-0.863, 0.306, 1.221]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={21.229}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_WHEEL_1.geometry}
            material={materials.Miscs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_WHEEL_2.geometry}
            material={materials.Rims}
          />
        </group>
        <group position={[-0.002, 0.757, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights_1.geometry}
            material={materials.Body_paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlights_2.geometry}
            material={materials['Emission.001']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logos.geometry}
          material={materials.Miscs}
          position={[0.577, 0.81, -2.048]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={2.243}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials.Body_paint}
          position={[-0.002, 0.757, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <group position={[-0.002, 0.757, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_bumper_1.geometry}
            material={materials.Miscs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_bumper_2.geometry}
            material={materials.Body_paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_bumper_3.geometry}
            material={materials.Black_matte}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_bumper_4.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[0.862, 0.306, -1.228]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={21.229}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_WHEEL_1.geometry}
            material={materials.Miscs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_WHEEL_2.geometry}
            material={materials.Rims}
          />
        </group>
        <group
          position={[-0.863, 0.306, -1.228]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={21.229}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_WHEEL_1.geometry}
            material={materials.Miscs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_WHEEL_2.geometry}
            material={materials.Rims}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Motorcycle.geometry}
        material={materials.Mat}
        position={[7.16, 0, 20.804]}
        rotation={[-Math.PI, 1.334, -Math.PI]}
        scale={0.021}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Motorcycle001.geometry}
        material={materials.Mat}
        position={[12.206, -0.701, 37.801]}
        rotation={[-Math.PI, 1.334, -Math.PI]}
        scale={0.021}
      />
      <group position={[27.31, -0.18, 31.887]} rotation={[0, -1.339, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_Cube005-Mesh'].geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_Cube005-Mesh_1'].geometry}
          material={materials.DarkOrange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_Cube005-Mesh_2'].geometry}
          material={materials.Windows}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_Cube005-Mesh_3'].geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_Cube005-Mesh_4'].geometry}
          material={materials.Headlights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_Cube005-Mesh_5'].geometry}
          material={materials.TailLights}
        />
      </group>
      <group position={[27.31, -0.18, 31.887]} rotation={[0, -1.339, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_BackWheels_Cylinder004-Mesh'].geometry}
          material={materials['Black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_BackWheels_Cylinder004-Mesh_1'].geometry}
          material={materials.Grey}
        />
      </group>
      <group position={[27.31, -0.18, 31.887]} rotation={[0, -1.339, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_FrontLeftWheel_Cylinder013-Mesh'].geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_FrontLeftWheel_Cylinder013-Mesh_1'].geometry}
          material={materials['Black.001']}
        />
      </group>
      <group position={[27.31, -0.18, 31.887]} rotation={[0, -1.339, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_FrontRightWheel_Cylinder014-Mesh'].geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['SportsCar_FrontRightWheel_Cylinder014-Mesh_1'].geometry}
          material={materials['Black.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Motorcycle_mesh.geometry}
        material={materials.blinn1SG}
        position={[10.103, -0.403, 31.527]}
        rotation={[Math.PI, -0.249, Math.PI]}
        scale={0.172}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005.geometry}
          material={materials['lambert1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_1.geometry}
          material={materials['banner.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_2.geometry}
          material={materials.lambert7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_3.geometry}
          material={materials.white_building_main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_4.geometry}
          material={materials.lambert9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_5.geometry}
          material={materials['lambert13.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_6.geometry}
          material={materials['blinn1.002']}
        />
      </group>
      <group position={[-2.266, 0.31, -1.459]} rotation={[Math.PI / 2, 0, 0.078]} scale={0.008}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006.geometry}
          material={materials['Pillars.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_1.geometry}
          material={materials['black_chair.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_2.geometry}
          material={materials['chair.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_3.geometry}
          material={materials['lambert1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_4.geometry}
          material={materials['wood2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_5.geometry}
          material={materials['lambert19.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_6.geometry}
          material={materials['Sitting_rood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_7.geometry}
          material={materials['leanring_zone_down.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_8.geometry}
          material={materials.white_building_main}
        />
      </group>
      <group position={[-1.724, 0.31, 8.515]} rotation={[Math.PI / 2, 0, 0]} scale={0.008}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007.geometry}
          material={materials['Pillars.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_1.geometry}
          material={materials['black_chair.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_2.geometry}
          material={materials['chair.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_3.geometry}
          material={materials['lambert1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_4.geometry}
          material={materials['wood2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_5.geometry}
          material={materials['lambert19.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_6.geometry}
          material={materials['Sitting_rood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_7.geometry}
          material={materials['leanring_zone_down.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_8.geometry}
          material={materials.white_building_main}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.kumari_parking}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Kumami_wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.kumari_pillar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.parking}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.kumari_gate}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.floor}
        />
      </group>
      {hovered && <HoverTooltip text="Kumari Block" position={[20, 25, 0]} />}
      
    </group>
  )
}

useGLTF.preload('/models/college_models/Kuamri_car.glb')
