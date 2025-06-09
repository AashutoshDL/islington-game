import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import SkillCharacter from "../environments/SkillCharacter";
import { useCamera } from "../context/CameraContext";

// Footstep sound setup
const footstepAudio = new Audio("/audio/walk sound.wav");
footstepAudio.loop = true;

const ThirdPersonCamera = () => {
  const characterRef = useRef();
  const camRef = useRef();

  const speed = 0.1;
  const turnSpeed = 0.1;
  const keys = useRef({ w: false, a: false, s: false, d: false });
  const [isMoving, setIsMoving] = useState(false);

  const cameraOffset = new THREE.Vector3(-1, 5, -7);
  const lookAtOffset = new THREE.Vector3(100, 150, 400);
  const cameraLerpFactor = 0.035;
  const lookAtLerpFactor = 0.045;
  const lookAtTargetVec = useRef(new THREE.Vector3());
  const sceneRotationY = THREE.MathUtils.degToRad(-20);

  const { setCharacterPosition, isMuted } = useCamera(); // ✅ get isMuted

  // Handle key events
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

  useEffect(() => {
    // Stop audio if muted state changes to true
    if (isMuted && !footstepAudio.paused) {
      footstepAudio.pause();
      footstepAudio.currentTime = 0;
    }
  }, [isMuted]);

  useFrame(() => {
    const char = characterRef.current;
    const camera = camRef.current;
    if (!char || !camera) return;

    const character = char.object;
    const moveDir = new THREE.Vector3();
    if (keys.current.w) moveDir.z += 1;
    if (keys.current.s) moveDir.z -= 1;
    if (keys.current.a) moveDir.x += 1;
    if (keys.current.d) moveDir.x -= 1;

    moveDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), sceneRotationY);
    const moving = moveDir.length() > 0;

    if (moving) {
      if (!isMoving) {
        setIsMoving(true);
        char.playAnimation("Armature.001|mixamo.com|Layer0");
        if (!isMuted && footstepAudio.paused) {
          footstepAudio.play().catch(console.error);
        }
      }

      moveDir.normalize().multiplyScalar(speed);
      character.position.add(moveDir);

      const targetAngle = Math.atan2(moveDir.x, moveDir.z);
      const currentAngle = character.rotation.y;
      character.rotation.y = THREE.MathUtils.lerp(currentAngle, targetAngle, turnSpeed);
    } else {
      if (isMoving) {
        setIsMoving(false);
        char.playAnimation("Armature.001|mixamo.com");
        footstepAudio.pause();
        footstepAudio.currentTime = 0;
      }
    }

    setCharacterPosition({
      x: character.position.x,
      y: character.position.y,
      z: character.position.z,
    });

    const rotatedCameraOffset = cameraOffset.clone().applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      character.rotation.y
    );
    const desiredCamPos = new THREE.Vector3().copy(character.position).add(rotatedCameraOffset);
    camera.position.lerp(desiredCamPos, cameraLerpFactor);

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
      <SkillCharacter
        ref={characterRef}
        position={[119, -34.45, -145]}
        rotation={[0, -0.5, 0]}
        scale={[16, 16, 16]}
      />
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[130, 0.4, -190]}
        fov={60}
        near={0.1}
        far={1000}
      />
    </>
  );
};

export default ThirdPersonCamera;
