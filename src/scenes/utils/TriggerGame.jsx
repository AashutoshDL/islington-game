import React, { useState, useEffect } from "react";
import { useCamera } from "../context/CameraContext"; // adjust path if needed
import GameUI from "../GameUI/GameUI"; // the memory card game
import RansomwareGameUI from "../GameUI/RansomewareUI"; // the Q&A game
import * as THREE from "three";

// Define different trigger positions for different games
const MEMORY_GAME_POSITION = new THREE.Vector3(85, -35.9, -12); // Original memory game position
const RANSOMWARE_GAME_POSITION = new THREE.Vector3(-213, -36.5, -15); // New position for ransomware game
const TRIGGER_RADIUS = 30;

export default function TriggerGames() {
  const { characterPosition } = useCamera();
  const [memoryGameTriggered, setMemoryGameTriggered] = useState(false);
  const [ransomwareGameTriggered, setRansomwareGameTriggered] = useState(false);

  useEffect(() => {
    if (!characterPosition) return;

    const { x, y, z } = characterPosition;
    const currentPosition = new THREE.Vector3(x, y, z);

    // Check memory game trigger
    const memoryDistance = currentPosition.distanceTo(MEMORY_GAME_POSITION);
    if (memoryDistance <= TRIGGER_RADIUS && !memoryGameTriggered) {
      setMemoryGameTriggered(true);
    }

    // Check ransomware game trigger
    const ransomwareDistance = currentPosition.distanceTo(RANSOMWARE_GAME_POSITION);
    if (ransomwareDistance <= TRIGGER_RADIUS && !ransomwareGameTriggered) {
      setRansomwareGameTriggered(true);
    }

    // Optional: Reset triggers when moving away (uncomment if you want repeatable triggers)
    // if (memoryDistance > TRIGGER_RADIUS && memoryGameTriggered) {
    //   setMemoryGameTriggered(false);
    // }
    // if (ransomwareDistance > TRIGGER_RADIUS && ransomwareGameTriggered) {
    //   setRansomwareGameTriggered(false);
    // }

  }, [characterPosition, memoryGameTriggered, ransomwareGameTriggered]);

  return (
    <>
      {memoryGameTriggered && <GameUI />}
      {ransomwareGameTriggered && <RansomwareGameUI />}
    </>
  );
}