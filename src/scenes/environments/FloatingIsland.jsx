import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";

export default function Island(props) {
  const { scene } = useGLTF("/models/environment_models/Floating Island.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.side = 2; // DoubleSide
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}
