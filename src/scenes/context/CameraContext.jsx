import React, { createContext, useContext, useState } from "react";

const CameraContext = createContext();

export const useCamera = () => useContext(CameraContext);

export const CameraProvider = ({ children }) => {
  const [activeCamera, setActiveCamera] = useState("default");
  const [floatingOffset, setFloatingOffset] = useState(0);
  const [floatingAmplitude, setFloatingAmplitude] = useState(0);

  // 🧍 New state for storing character position
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0, z: 0 });

  const switchCamera = (camName) => {
    setActiveCamera(camName);
    setFloatingOffset(null);
    setFloatingAmplitude(null);
  };

  return (
    <CameraContext.Provider
      value={{
        activeCamera,
        switchCamera,
        floatingOffset,
        setFloatingOffset,
        floatingAmplitude,
        setFloatingAmplitude,
        characterPosition,
        setCharacterPosition,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};
