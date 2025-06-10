import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import SkillCharacter from "../environments/SkillCharacter";
import { useCamera } from "../context/CameraContext";

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
  const sceneRotationY = THREE.MathUtils.degToRad(0);

  const { setCharacterPosition, isMuted } = useCamera();

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

    // Create movement vector relative to character's local space
    const localMoveDir = new THREE.Vector3();
    if (keys.current.w) localMoveDir.z += 1; // Forward
    if (keys.current.s) localMoveDir.z -= 1; // Backward
    if (keys.current.a) localMoveDir.x += 1; // Left
    if (keys.current.d) localMoveDir.x -= 1; // Right

    const moving = localMoveDir.length() > 0;

    if (moving) {
      if (!isMoving) {
        setIsMoving(true);
        char.playAnimation("Armature.001|mixamo.com|Layer0");
        if (!isMuted && footstepAudio.paused) {
          footstepAudio.play().catch(console.error);
        }
      }

      // Normalize the local movement direction
      localMoveDir.normalize();

      // Transform the local movement direction to world space
      // This takes into account both the character's current rotation AND the scene rotation
      const worldMoveDir = localMoveDir.clone();

      // First apply the character's current rotation
      worldMoveDir.applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        character.rotation.y
      );

      // Then apply the scene rotation
      worldMoveDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), sceneRotationY);

      // Scale by speed and apply to character position
      worldMoveDir.multiplyScalar(speed);
      character.position.add(worldMoveDir);

      // For rotation, we only need to rotate the character if moving left/right
      // Forward/backward movement doesn't change character facing direction
      if (keys.current.a || keys.current.d) {
        let rotationAmount = 0;
        if (keys.current.a) rotationAmount += turnSpeed; // Turn left
        if (keys.current.d) rotationAmount -= turnSpeed; // Turn right

        character.rotation.y += rotationAmount;
      }
    } else {
      if (isMoving) {
        setIsMoving(false);
        char.playAnimation("Armature|mixamo.com|Layer0");
        footstepAudio.pause();
        footstepAudio.currentTime = 0;
      }
    }

    setCharacterPosition({
      x: character.position.x,
      y: character.position.y,
      z: character.position.z,
    });

    const rotatedCameraOffset = cameraOffset
      .clone()
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), character.rotation.y);
    const desiredCamPos = new THREE.Vector3()
      .copy(character.position)
      .add(rotatedCameraOffset);
    camera.position.lerp(desiredCamPos, cameraLerpFactor);

    const rotatedLookAtOffset = lookAtOffset
      .clone()
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), character.rotation.y);
    const desiredLookAt = new THREE.Vector3()
      .copy(character.position)
      .add(rotatedLookAtOffset);
    lookAtTargetVec.current.lerp(desiredLookAt, lookAtLerpFactor);
    camera.lookAt(lookAtTargetVec.current);
  });

  return (
    <>
      <SkillCharacter
        ref={characterRef}
        position={[119, -36.7, -145]}
        rotation={[0, -0.5, 0]}
        scale={[16, 16, 16]}
      />

      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[118, -31.7, -152]}
        fov={60}
        near={0.1}
        far={1000}
      />
    </>
  );
};

export default ThirdPersonCamera;
