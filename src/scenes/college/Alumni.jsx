import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Alumni(props) {
  const { scene } = useGLTF("/models/college_models/Alumni.glb");

  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.side = 2;
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props}/>;
}