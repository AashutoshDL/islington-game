import { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useCamera } from "../context/CameraContext";
import HoverToolTip from "../utils/HoverToolTip";

export default function Skill(props) {
  const { nodes, materials } = useGLTF('/models/college_models/Skill_parking.glb')
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
      <group
        position={[1.721, -0.9, 4.841]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.017, 0.025, 0.019]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials['Banner.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials['Main_Building.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials['lambert5.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials['lambert6.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials['lambert3.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials['lambert1.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials['window_glass.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials['aiStandardSurface1.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube34.geometry}
        material={materials.lambert1}
        position={[-1.338, 0.642, -5.428]}
        rotation={[-Math.PI, -0.021, 0]}
        scale={[0.002, 0.003, 0.036]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube37.geometry}
        material={materials['aiStandardSurface4.002']}
        position={[-1.301, 0.502, -12.799]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.01, 0.003, 0.015]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube77.geometry}
        material={materials['parking.002']}
        position={[35.797, -0.857, -48.013]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube78.geometry}
        material={materials['parking.002']}
        position={[38.831, -0.857, -48.013]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube79.geometry}
        material={materials['parking.002']}
        position={[41.865, -0.857, -48.013]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube87.geometry}
        material={materials['parking.002']}
        position={[38.831, -0.857, -38.229]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube89.geometry}
        material={materials['parking.002']}
        position={[35.797, -0.857, -38.229]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube91.geometry}
        material={materials['parking.002']}
        position={[41.865, -0.857, -38.229]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube93.geometry}
        material={materials['parking.002']}
        position={[41.865, -0.857, -33.325]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube94.geometry}
        material={materials['parking.002']}
        position={[35.797, -0.857, -33.325]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube100.geometry}
        material={materials['parking.002']}
        position={[38.831, -0.857, -33.325]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube104.geometry}
        material={materials['parking.002']}
        position={[35.304, -0.857, -24.669]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube110.geometry}
        material={materials['parking.002']}
        position={[7.996, -0.857, -24.669]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube117.geometry}
        material={materials['parking.002']}
        position={[37.104, -0.32, -30.513]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0, -0.025, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube122.geometry}
        material={materials['parking.002']}
        position={[8.639, -0.323, -6.512]}
        rotation={[Math.PI, 0, -Math.PI / 2]}
        scale={[0, -0.025, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube123.geometry}
        material={materials['parking.002']}
        position={[37.874, -0.34, -16.936]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0, -0.025, -0.005]}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface138.geometry}
          material={materials['aiStandardSurface3.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface139.geometry}
          material={materials['aiStandardSurface3.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface140.geometry}
          material={materials['aiStandardSurface3.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface141.geometry}
          material={materials['aiStandardSurface4.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface142.geometry}
          material={materials['aiStandardSurface4.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface143.geometry}
          material={materials['aiStandardSurface4.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface144.geometry}
          material={materials['aiStandardSurface3.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface145.geometry}
          material={materials['aiStandardSurface4.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface146.geometry}
          material={materials['aiStandardSurface4.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface154.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface155.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface156.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface157.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface158.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface159.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface160.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface161.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface162.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface163.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface164.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface165.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface166.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface167.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface168.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface169.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface170.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface171.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface172.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface173.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface174.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface175.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface176.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface177.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface178.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface179.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface180.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface181.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface182.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface183.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface184.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface185.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface186.geometry}
          material={materials['floor_skill_pakring.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface187.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface188.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface189.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface190.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface191.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface192.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface193.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface194.geometry}
          material={materials['parking.002']}
          position={[0, 0, 30.213]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface195.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface196.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface197.geometry}
          material={materials['parking.002']}
          position={[0, 0, 33.796]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface151.geometry}
        material={materials['skill_wall.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      {hovered && <HoverToolTip text="Skill Block" position={[-10, 35, -10]} />}

    </group>
  )
}

useGLTF.preload('/models/college_models/Skill_parking.glb')