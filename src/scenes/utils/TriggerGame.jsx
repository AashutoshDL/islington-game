import React, { useState, useEffect } from "react";
import { useCamera } from "../context/CameraContext"; // adjust path if needed
import GameUI from "../GameUI/GameUI"; // the popup or trigger component
import * as THREE from "three";

const targetPosition = new THREE.Vector3(85, -35.9, -12);
const TRIGGER_RADIUS = 30;

export default function TriggerGame() {
  const { characterPosition } = useCamera();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!characterPosition) return;

    const { x, y, z } = characterPosition;
    const currentPosition = new THREE.Vector3(x, y, z);
    const distance = currentPosition.distanceTo(targetPosition);

    if (distance <= TRIGGER_RADIUS && !triggered) {
      setTriggered(true); // Trigger only once (optional)
    }

  }, [characterPosition]);

  return (
    <>
      {triggered && <GameUI />}
    </>
  );
}