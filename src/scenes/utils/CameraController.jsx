import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const CameraController = ({
  id,
  activeCamera,
  position,
  lookAt = [0, 0, 0],
  onMoveComplete,
}) => {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3(...position));
  const lookAtPosition = useRef(new THREE.Vector3(...lookAt));
  const moving = useRef(false);
  const completed = useRef(false);

  useEffect(() => {
    if (activeCamera === id) {
      targetPosition.current.set(...position);
      lookAtPosition.current.set(...lookAt);
      moving.current = true;
      completed.current = false;
    }
  }, [activeCamera, id, position, lookAt]);

  useFrame(() => {
    if (activeCamera === id) {
      // Always look at the target
      camera.lookAt(lookAtPosition.current);

      // Move camera position smoothly while moving
      if (moving.current && !completed.current) {
        camera.position.lerp(targetPosition.current, 0.05);

        if (camera.position.distanceTo(targetPosition.current) < 0.01) {
          camera.position.copy(targetPosition.current);
          moving.current = false;
          completed.current = true;

          if (onMoveComplete) onMoveComplete();
        }
      }
    }
  });

  return null;
};

export default CameraController;