import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PositionalAudio } from "@react-three/drei";
import Bird from "./Bird";
import { useCamera } from "../context/CameraContext";

const BirdFlock = () => {
  const flockRef = useRef([]);
  const audioRefs = useRef([]);
  const { isMuted } = useCamera();
  const { camera } = useThree(); // ensures AudioListener is attached

  const birdsConfig = useMemo(() => {
    const birds = [];
    for (let i = 0; i < 5; i++) {
      birds.push({
        id: i,
        position: [
          Math.random() * 80 - 40,
          10 + Math.random() * 10,
          Math.random() * 200 + 500,
        ],
      });
    }
    return birds;
  }, []);

  // Move birds
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    flockRef.current.forEach((ref, i) => {
      if (ref) {
        ref.position.z -= 0.5;
        ref.position.x += Math.sin(t + i) * 0.02;
        ref.position.y += Math.sin(t * 0.5 + i) * 0.01;

        if (ref.position.z < -100) {
          ref.position.z = 100 + Math.random() * 50;
          ref.position.x = Math.random() * 80 - 40;
        }
      }
    });
  });

  useEffect(() => {
    audioRefs.current.forEach((audio) => {
      if (audio) {
        audio.setVolume(0.05);
        if (isMuted) {
          audio.pause();
        } else if (!audio.isPlaying) {
          audio.play();
        }
      }
    });
  }, [isMuted]);

  return (
    <>
      {birdsConfig.map((bird, i) => (
        <group
          key={bird.id}
          ref={(ref) => (flockRef.current[i] = ref)}
          position={bird.position}
          scale={[10.4, 10.4, 10.4]}
        >
          {/* Bird component stays untouched */}
          <Bird />

          {/* Invisible mesh to attach audio */}
          <mesh position={[0, 0, 0]} visible={false}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial transparent opacity={0} />
            <PositionalAudio
              ref={(ref) => (audioRefs.current[i] = ref)}
              url="/audio/bird-sing-long.wav"
              distance={100}
              loop
              autoplay
            />
          </mesh>
        </group>
      ))}
    </>
  );
};

export default BirdFlock;
