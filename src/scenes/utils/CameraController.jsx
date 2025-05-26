import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const CameraController = ({ id, activeCamera, position, onMoveComplete }) => {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3(...position));
  const moving = useRef(false);
  const completed = useRef(false); // Prevent re-triggering movement

  useEffect(() => {
    if (activeCamera === id) {
      targetPosition.current.set(...position);
      moving.current = true;
      completed.current = false;
    }
  }, [activeCamera, id, position]);

  useFrame(() => {
    if (activeCamera === id && moving.current && !completed.current) {
      camera.position.lerp(targetPosition.current, 0.05);

      if (camera.position.distanceTo(targetPosition.current) < 0.01) {
        camera.position.copy(targetPosition.current);
        moving.current = false;
        completed.current = true;

        // Optional callback when movement is finished
        if (onMoveComplete) onMoveComplete();
      }
    }
  });

  return null;
};

export default CameraController;