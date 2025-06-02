import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Character from "../environments/Character";
import { useCamera } from "../context/CameraContext"; // Make sure path is correct

export default function CharacterController() {
  const characterRef = useRef();
  const speed = 0.3;
  const turnSpeed = 0.5;

  const keys = useRef({ w: false, a: false, s: false, d: false });
  const [isMoving, setIsMoving] = useState(false);

  const { setCharacterPosition } = useCamera(); // 🔁 Access setter from context

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
    if (!char) return;

    const character = char.object; // 3D Object
    const moveDir = new THREE.Vector3();

    if (keys.current.w) moveDir.z -= 1;
    if (keys.current.s) moveDir.z += 1;
    if (keys.current.a) moveDir.x -= 1;
    if (keys.current.d) moveDir.x += 1;

    const moving = moveDir.length() > 0;

    if (moving) {
      if (!isMoving) {
        setIsMoving(true);
        char.playAnimation("CharacterArmature|Run");
      }

      moveDir.normalize().multiplyScalar(speed);
      character.position.add(moveDir);

      // Smooth rotation toward movement direction
      const targetAngle = Math.atan2(moveDir.x, moveDir.z);
      const currentAngle = character.rotation.y;
      const newY = THREE.MathUtils.lerp(currentAngle, targetAngle, turnSpeed);
      character.rotation.y = newY;
    } else {
      if (isMoving) {
        setIsMoving(false);
        char.playAnimation("CharacterArmature|Idle");
      }
    }

    const { x, y, z } = character.position;
    setCharacterPosition({ x, y, z });
  });

  return (
    <Character
      ref={characterRef}
      position={[119, -34.45, -145]}
      rotation={[0, 0, 0]}
      scale={[3, 3, 3]}
    />
  );
}
