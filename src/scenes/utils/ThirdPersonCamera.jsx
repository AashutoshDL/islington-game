import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import Character from "../environments/Character";

const ThirdPersonCamera = () => {
  const characterRef = useRef();
  const camRef = useRef();

  const speed = 0.3;
  const turnSpeed = 0.5;

  const keys = useRef({ w: false, a: false, s: false, d: false });
  const [isMoving, setIsMoving] = useState(false);

  // Camera offsets (same as your original)
  const cameraOffset = new THREE.Vector3(4, 7, -10);
  const lookAtOffset = new THREE.Vector3(-80, 150, 300);
  const lerpFactor = 0.05;

  // Handle key press/release events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["w", "a", "s", "d"].includes(e.key)) keys.current[e.key] = true;
    };
    const handleKeyUp = (e) => {
      if (["w", "a", "s", "d"].includes(e.key)) keys.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const char = characterRef.current;
    const camera = camRef.current;
    if (!char || !camera) return;

    const character = char.object; // 3D object from Character component

    // Calculate movement direction
    const moveDir = new THREE.Vector3();
    if (keys.current.w) moveDir.z += 1;
    if (keys.current.s) moveDir.z -= 1;
    if (keys.current.a) moveDir.x += 1;
    if (keys.current.d) moveDir.x -= 1;

    const moving = moveDir.length() > 0;

    // Handle animation state and movement
    if (moving) {
      if (!isMoving) {
        setIsMoving(true);
        char.playAnimation("CharacterArmature|Run");
      }

      moveDir.normalize().multiplyScalar(speed);
      character.position.add(moveDir);

      // Smoothly rotate character to movement direction
      const targetAngle = Math.atan2(moveDir.x, moveDir.z);
      const currentAngle = character.rotation.y;
      character.rotation.y = THREE.MathUtils.lerp(currentAngle, targetAngle, turnSpeed);
    } else {
      if (isMoving) {
        setIsMoving(false);
        char.playAnimation("CharacterArmature|Idle");
      }
    }

    // Update camera position smoothly based on character position + offset
    const desiredCamPos = new THREE.Vector3().copy(character.position).add(cameraOffset);
    camera.position.lerp(desiredCamPos, lerpFactor);

    // Calculate look-at target with offset
    const lookAtTarget = new THREE.Vector3().copy(character.position).add(lookAtOffset);
    camera.lookAt(lookAtTarget);
  });

  return (
    <>
      <Character
        ref={characterRef}
        position={[119, -34.45, -145]} // your initial character position
        rotation={[0, 0, 0]}
        scale={[3, 3, 3]}
      />
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[100, 0.4, -200]}
        fov={60}
        near={0.1}
        far={1000}
      />
    </>
  );
};

export default ThirdPersonCamera;
