import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const CameraController = ({
  id,
  activeCamera,
  position,
  lookAt = [0, 0, 0],
  fov,
  near,
  far,
  startPosition = null,
  onMoveComplete,
}) => {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3(...position));
  const lookAtPosition = useRef(new THREE.Vector3(...lookAt));
  const moving = useRef(false);
  const completed = useRef(false);

  // Track if this camera was previously active
  const wasActive = useRef(false);

  useEffect(() => {
    if (activeCamera === id) {
      // Update camera projection settings
      if (fov !== undefined) camera.fov = fov;
      if (near !== undefined) camera.near = near;
      if (far !== undefined) camera.far = far;
      camera.updateProjectionMatrix();

      targetPosition.current.set(...position);
      lookAtPosition.current.set(...lookAt);

      // Only set startPosition if camera just became active (not on every update)
      if (!wasActive.current && startPosition) {
        camera.position.set(...startPosition);
      }

      moving.current = true;
      completed.current = false;

      // Mark as active now
      wasActive.current = true;
    } else {
      // Camera not active now
      wasActive.current = false;
    }
  }, [activeCamera, id, position, lookAt, fov, near, far, startPosition, camera]);

  useFrame(() => {
    if (activeCamera === id) {
      camera.lookAt(lookAtPosition.current);

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