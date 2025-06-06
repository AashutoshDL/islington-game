import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import Character from "../environments/Character";

const ThirdPersonCamera = () => {
  const characterRef = useRef();
  const camRef = useRef();

  const speed = 0.3;
  const turnSpeed = 0.1; // smoother character rotation
  const keys = useRef({ w: false, a: false, s: false, d: false });
  const [isMoving, setIsMoving] = useState(false);

  // Camera offsets
  const cameraOffset = new THREE.Vector3(-1, 5, -7);
  const lookAtOffset = new THREE.Vector3(100, 150, 400);

  // Smoother interpolation factors
  const cameraLerpFactor = 0.035; // slower = smoother
  const lookAtLerpFactor = 0.045;

  const lookAtTargetVec = useRef(new THREE.Vector3());

  // Your scene rotation around Y in radians (adjust this to your actual scene rotation)
  const sceneRotationY = THREE.MathUtils.degToRad(-20); // ~12 degrees

  // Key event handlers
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

    const character = char.object;

    // Calculate movement direction from keys pressed
    const moveDir = new THREE.Vector3();
    if (keys.current.w) moveDir.z += 1;
    if (keys.current.s) moveDir.z -= 1;
    if (keys.current.a) moveDir.x += 1;
    if (keys.current.d) moveDir.x -= 1;

    // Rotate moveDir by sceneRotationY to align with rotated scene
    moveDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), sceneRotationY);

    const moving = moveDir.length() > 0;

    if (moving) {
      if (!isMoving) {
        setIsMoving(true);
        char.playAnimation("CharacterArmature|Walk");
      }

      moveDir.normalize().multiplyScalar(speed);
      character.position.add(moveDir);

      // Rotate character to face movement direction
      const targetAngle = Math.atan2(moveDir.x, moveDir.z);
      const currentAngle = character.rotation.y;
      character.rotation.y = THREE.MathUtils.lerp(currentAngle, targetAngle, turnSpeed);
    } else {
      if (isMoving) {
        setIsMoving(false);
        char.playAnimation("CharacterArmature|Idle");
      }
    }

    // Smooth camera position following the character
    const rotatedCameraOffset = cameraOffset.clone().applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      character.rotation.y
    );
    const desiredCamPos = new THREE.Vector3().copy(character.position).add(rotatedCameraOffset);
    camera.position.lerp(desiredCamPos, cameraLerpFactor);

    // Smooth camera lookAt target
    const rotatedLookAtOffset = lookAtOffset.clone().applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      character.rotation.y
    );
    const desiredLookAt = new THREE.Vector3().copy(character.position).add(rotatedLookAtOffset);
    lookAtTargetVec.current.lerp(desiredLookAt, lookAtLerpFactor);
    camera.lookAt(lookAtTargetVec.current);
  });

  return (
    <>
      <Character
        ref={characterRef}
        position={[119, -34.45, -145]}
        rotation={[0, -0.5, 0]}
        scale={[2, 2, 2]}
      />
      {/* <SkillCharacter /> */}
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[60, 0.4, -190]}
        fov={60}
        near={0.1}
        far={1000}
      />
    </>
  );
};

export default ThirdPersonCamera;