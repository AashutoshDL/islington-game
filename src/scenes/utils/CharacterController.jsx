import React, { useRef } from "react";
import SkillCharacter from "../environments/SkillCharacter";
import { useCamera } from "../context/CameraContext"; // adjust the path if needed

export default function CharacterController() {
  const characterRef = useRef();
  const { activeCamera } = useCamera();

  if (activeCamera === "thirdPerson") return null; // Hide if thirdPerson camera is active

  return (
    <SkillCharacter
      ref={characterRef}
      position={[119, -34.45, -145]}
      rotation={[0, -0.5, 0]}
      scale={[16, 16, 16]}
    />
  );
}
