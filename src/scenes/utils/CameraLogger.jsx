import React, { useEffect } from "react";
import { useCamera } from "../context/CameraContext";

const CameraLogger = () => {
  const { activeCamera } = useCamera();

  useEffect(() => {
    console.log("Current active camera is", activeCamera);
  }, [activeCamera]);
  return null;
};

export default CameraLogger;
