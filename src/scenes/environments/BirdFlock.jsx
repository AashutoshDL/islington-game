// BirdFlock.jsx
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import Bird from "./Bird";

const BirdFlock = () => {
  const flockRef = useRef([]);

  const birdsConfig = useMemo(() => {
    const birds = [];
    for (let i = 0; i < 5; i++) {
      birds.push({
        id: i,
        position: [
          Math.random() * 80 - 40,   // x: random spread around clouds
          10 + Math.random() * 10,   // y: fly over clouds
          Math.random() * 200 + 500,  // z: start far away
        ],
      });
    }
    return birds;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    flockRef.current.forEach((ref, i) => {
      if (ref) {
        ref.position.z -= 0.5; // speed forward
        ref.position.x += Math.sin(t + i) * 0.02; // gentle side sway
        ref.position.y += Math.sin(t * 0.5 + i) * 0.01; // slight vertical bob

        // Looping logic
        if (ref.position.z < -100) {
          ref.position.z = 100 + Math.random() * 50;
          ref.position.x = Math.random() * 80 - 40;
        }
      }
    });
  });

  return (
    <>
      {birdsConfig.map((bird, i) => (
        <group
          key={bird.id}
          ref={(ref) => (flockRef.current[i] = ref)}
          position={bird.position}
          scale={[10.4, 10.4, 10.4]}
        >
          <Bird />
        </group>
      ))}
    </>
  );
};

export default BirdFlock;