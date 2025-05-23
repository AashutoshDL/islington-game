import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF, PositionalAudio } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

const cloudRefs = [];

export const getCloudRefs = () => cloudRefs;

const CustomClouds = () => {
  const { scene } = useGLTF("/models/environment_models/cloud1.glb");
  const { camera } = useThree();

  useEffect(() => {
    camera.layers.enable(1);
  }, [camera]);

  const addRef = (ref) => {
    if (ref && !cloudRefs.includes(ref)) {
      cloudRefs.push(ref);
    }
  };

  useEffect(() => {
    scene.traverse((child) => {
      child.layers.set(1); // Assign all children to layer 1
    });
  }, [scene]);

  // Animate drifting clouds
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    cloudRefs.forEach((cloud, i) => {
      cloud.position.z += 0.01; // drifting rightward
      cloud.position.y += Math.sin(t + i) * 0.005; // gentle bobbing

      if (cloud.position.x > 200) {
        cloud.position.x = -200;
      }
    });
  });

  const cloudConfigs = useMemo(() => [
    { position: [-100, 40, -90], scale: [13, 13, 13], rotation:[0, 1.2, 0] },
    { position: [-50, 30, -250], scale: [8, 8, 8], rotation:[0, 1.2, 0] },
    { position: [120, 40, -300], scale: [16, 16, 16], rotation:[0, 1.2, 0] },
    { position: [150, 30, -50], scale: [8.5, 8.5, 8.5], rotation:[0, 1.2, 0] },
    { position: [40, 20, 80], scale: [5, 5, 5], rotation:[0, 1.2, 0] }
  ], []);

  return (
    <>
      {cloudConfigs.map(({ position, scale, rotation }, idx) => (
        <group
          key={idx}
          ref={addRef}
          position={position}
          scale={scale}
          rotation={rotation}
        >
          <primitive object={scene.clone()} />
          {idx === 0 && (
            <PositionalAudio
              url="/audio/wind_audio.mp3"
              distance={80}
              loop
              autoplay
              volume={0.6}
            />
          )}
        </group>
      ))}
    </>
  );
};

export default CustomClouds;