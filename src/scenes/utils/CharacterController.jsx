import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Character from "../environments/Character";

export default function CharacterController({ roadRefs = [] }) {
  const characterRef = useRef();
  const raycaster = useRef(new THREE.Raycaster());
  const speed = 0.2;
  const turnSpeed = 0.5;

  const keys = useRef({ w: false, a: false, s: false, d: false });
  const [isMoving, setIsMoving] = useState(false);

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

  // Function to check if a position is on ANY of the roads
  const isOnAnyRoad = (position) => {
    if (!roadRefs || roadRefs.length === 0) return false;

    // Cast ray downward from the position
    const rayOrigin = new THREE.Vector3(position.x, position.y + 15, position.z);
    const rayDirection = new THREE.Vector3(0, -1, 0);
    
    raycaster.current.set(rayOrigin, rayDirection);
    
    // Collect all road meshes from all road references
    const allRoadMeshes = [];
    
    roadRefs.forEach(roadRef => {
      if (roadRef?.current) {
        roadRef.current.traverse((child) => {
          if (child.isMesh) {
            allRoadMeshes.push(child);
          }
        });
      }
    });

    // Check for intersections with all road meshes
    const intersects = raycaster.current.intersectObjects(allRoadMeshes, true);
    
    // Return true if ray hits any road within reasonable distance
    return intersects.length > 0 && intersects[0].distance < 25;
  };

  // Enhanced raycasting with multiple test points around character
  const isOnRoadAdvanced = (position) => {
    // Test multiple points around the character for better collision detection
    const testPositions = [
      position, // Center
      new THREE.Vector3(position.x + 1, position.y, position.z), // Right
      new THREE.Vector3(position.x - 1, position.y, position.z), // Left
      new THREE.Vector3(position.x, position.y, position.z + 1), // Forward
      new THREE.Vector3(position.x, position.y, position.z - 1), // Backward
    ];

    // Check if at least one test position is on any road
    return testPositions.some(testPos => isOnAnyRoad(testPos));
  };

  useFrame(() => {
    const char = characterRef.current;
    if (!char) return;

    const character = char.object; // 3D Object
    const moveDir = new THREE.Vector3();

    if (keys.current.w) moveDir.z += 1;
    if (keys.current.s) moveDir.z -= 1;
    if (keys.current.a) moveDir.x += 1;
    if (keys.current.d) moveDir.x -= 1;

    const moving = moveDir.length() > 0;

    if (moving) {
      if (!isMoving) {
        setIsMoving(true);
        char.playAnimation("CharacterArmature|Run");
      }

      moveDir.normalize().multiplyScalar(speed);
      
      // Calculate new position
      const newPosition = character.position.clone().add(moveDir);
      
      // Only move if the new position is on any road
      if (isOnRoadAdvanced(newPosition)) {
        character.position.copy(newPosition);
        
        // Smooth rotation toward movement direction
        const targetAngle = Math.atan2(moveDir.x, moveDir.z);
        const currentAngle = character.rotation.y;
        const newY = THREE.MathUtils.lerp(currentAngle, targetAngle, turnSpeed);
        character.rotation.y = newY;
      }
      // If not on road, character stays in place but still rotates
      else {
        const targetAngle = Math.atan2(moveDir.x, moveDir.z);
        const currentAngle = character.rotation.y;
        const newY = THREE.MathUtils.lerp(currentAngle, targetAngle, turnSpeed);
        character.rotation.y = newY;
      }
    } else {
      if (isMoving) {
        setIsMoving(false);
        char.playAnimation("CharacterArmature|Idle");
      }
    }
  });

  return (
    <Character
      ref={characterRef}
      position={[11, -34, 20]} // Start on the first road
      rotation={[0, 0, 0]}
      scale={[3, 3, 3]}
    />
  );
}