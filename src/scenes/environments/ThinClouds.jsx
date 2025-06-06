import { useGLTF } from "@react-three/drei";
import React, { useEffect, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

// Define cloud models with config: path, position, scale, rotation
const cloudConfigs = [
  {
    path: "/models/environment_models/thin_cloud_1.glb",
    position: [400, 300, 400],
    scale: [300, 300, 300],
    rotation: [0, 0, 0],
  },
  {
    path: "/models/environment_models/thin_cloud_1.glb",
    position: [400, 300, 10],
    scale: [300, 300, 300],
    rotation: [0, Math.PI / 4, 0],
  },

];

export default function ThinClouds(props) {
  const loadedModels = useMemo(() => {
    const modelMap = {};

    return cloudConfigs.map(({ path }, i) => {
      // Only load each unique model once
      if (!modelMap[path]) {
        modelMap[path] = useGLTF(path);
      }

      // Clone the scene so we can apply different transforms
      return {
        ...cloudConfigs[i],
        scene: clone(modelMap[path].scene),
      };
    });
  }, []);

  useEffect(() => {
    loadedModels.forEach(({ scene }) => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.side = 2;
        }
      });
    });
  }, [loadedModels]);

  return (
    <>
      {loadedModels.map(({ scene, position, scale, rotation }, i) => (
        <primitive
          key={i}
          object={scene}
          position={position}
          scale={scale}
          rotation={rotation}
          {...props}
        />
      ))}
    </>
  );
}
