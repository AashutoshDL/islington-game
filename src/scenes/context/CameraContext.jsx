import React, { createContext, useContext, useState } from "react";

const CameraContext = createContext();

export const useCamera = () => useContext(CameraContext);

export const CameraProvider = ({ children }) => {
  const [activeCamera, setActiveCamera] = useState("default");
  const [floatingOffset, setFloatingOffset] = useState(0);
  const [floatingAmplitude, setFloatingAmplitude] = useState(15); // default amplitude

  const switchCamera = (camName) => {
    setActiveCamera(camName);
    setFloatingOffset(null);      // Reset offset on camera switch
    setFloatingAmplitude(null);   // Also reset amplitude to null to stop floating
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
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};
