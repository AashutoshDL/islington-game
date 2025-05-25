import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useCamera } from "../context/CameraContext";

export default function Skill(props) {
  const { switchCamera } = useCamera();
  const { nodes, materials } = useGLTF("/models/college_models/Skill.glb");

  return (
    <group {...props} dispose={null}>
      {/* Clickable Wrapper */}
      <group>
        <group
          position={[-6.88, -0.718, 2.915]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.267}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={
              materials[
                "Britain_Block_wth_small_island:Skill__Block:Main_Building"
              ]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={
              materials["Britain_Block_wth_small_island:Skill__Block:lambert3"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials.lambert1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={
              materials[
                "Britain_Block_wth_small_island:Skill__Block:window_glass"
              ]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_4.geometry}
            material={
              materials["Britain_Block_wth_small_island:Skill__Block:lambert5"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_5.geometry}
            material={
              materials[
                "Britain_Block_wth_small_island:Skill__Block:aiStandardSurface1"
              ]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_6.geometry}
            material={
              materials["Britain_Block_wth_small_island:Skill__Block:lambert6"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_7.geometry}
            material={
              materials[
                "Britain_Block_wth_small_island:Skill__Block:skill_roof"
              ]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_8.geometry}
            material={
              materials["Britain_Block_wth_small_island:Skill__Block:Banner"]
            }
          />
        </group>

        {/* Optional: Add Annotation */}
        <Html position={[-10, 5, 5]} center>
          <div
            style={{
              background: "#222", // dark background
              color: "white", // white text
              width: "30px",
              height: "30px",
              borderRadius: "50%", // makes it a circle
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              cursor: "pointer",
              boxShadow: "0 0 6px rgba(0,0,0,0.4)",
              userSelect: "none",
              border: "none",
            }}
            onClick={(e) => {
              e.stopPropagation();
              switchCamera("skill_annotation");
            }}
          >
            1
          </div>
        </Html>
      </group>

      {/* Island Block */}
      <group
        position={[6.616, 0.72, -2.811]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.626, 0.695, 0.626]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={
            materials["Britain_Block_wth_small_island:Impact_Block:island_rock"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={
            materials[
              "Britain_Block_wth_small_island:Impact_Block:blcok_white_island"
            ]
          }
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/college_models/Skill.glb");
