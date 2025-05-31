import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Character from "../environments/Character";

export default function CharacterController() {
  const characterRef = useRef();
  const speed = 0.2;
  const turnSpeed = 0.5;

  const keys = useRef({ w: false, a: false, s: false, d: false });
  const [isMoving, setIsMoving] = useState(false);

  // Road boundaries - you may need to adjust these based on your road positions and scales
  const roadBounds = {
    skillRoad: {
      center: { x: 11, z: 20.2 }, // From your Skill_road position
      width: 380 * 0.115, // scale * original width (approximate)
      length: 480 * 0.115, // scale * original length (approximate)
      rotation: -0.318 // From your Skill_road rotation
    },
    largeRoad: {
      center: { x: 70, z: -72 }, // From your Large_road position
      width: 32 * 0.269, // scale * original width
      length: 35 * 0.141, // scale * original length
      rotation: -0.33 // From your Large_road rotation
    }
  };

  // Function to check if a point is within a rotated rectangle
  const isPointInRotatedRect = (point, rect) => {
    const cos = Math.cos(-rect.rotation);
    const sin = Math.sin(-rect.rotation);
    
    // Translate point to rectangle's local coordinate system
    const localX = cos * (point.x - rect.center.x) - sin * (point.z - rect.center.z);
    const localZ = sin * (point.x - rect.center.x) + cos * (point.z - rect.center.z);
    
    // Check if point is within rectangle bounds
    return Math.abs(localX) <= rect.width / 2 && Math.abs(localZ) <= rect.length / 2;
  };

  // Function to check if character position is on any road
  const isOnRoad = (position) => {
    return isPointInRotatedRect(position, roadBounds.skillRoad) ||
           isPointInRotatedRect(position, roadBounds.largeRoad);
  };

  // Function to find the closest point on road from current position
  const getClosestRoadPoint = (position) => {
    let closestPoint = position.clone();
    let minDistance = Infinity;

    // Check both roads and find the closest valid point
    Object.values(roadBounds).forEach(road => {
      // Get the center of the road as a potential closest point
      const roadCenter = new THREE.Vector3(road.center.x, position.y, road.center.z);
      const distance = position.distanceTo(roadCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = roadCenter;
      }
    });

    return closestPoint;
  };

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
    const currentPosition = character.position.clone();
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
      const newPosition = currentPosition.clone().add(moveDir);
      
      // Check if new position is on road
      if (isOnRoad(newPosition)) {
        // Allow movement
        character.position.copy(newPosition);
        
        // Smooth rotation toward movement direction
        const targetAngle = Math.atan2(moveDir.x, moveDir.z);
        const currentAngle = character.rotation.y;
        const newY = THREE.MathUtils.lerp(currentAngle, targetAngle, turnSpeed);
        character.rotation.y = newY;
      } else {
        // Don't allow movement outside roads
        // Optionally, you could move the character to the closest road point
        // character.position.copy(getClosestRoadPoint(newPosition));
        
        // Or simply prevent the movement by not updating position
        // The character will stay in place but still show running animation
      }
    } else {
      if (isMoving) {
        setIsMoving(false);
        char.playAnimation("CharacterArmature|Idle");
      }
    }

    // Safety check: if character somehow gets off road, move them back
    if (!isOnRoad(character.position)) {
      const closestRoadPoint = getClosestRoadPoint(character.position);
      character.position.copy(closestRoadPoint);
    }
  });

  return (
    <Character
      ref={characterRef}
      position={[-80, -38.2, -223]}
      rotation={[0, 0, 0]}
      scale={[3, 3, 3]}
    />
  );
}