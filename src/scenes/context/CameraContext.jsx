import React, { createContext, useContext, useState } from "react";

export const CameraContext = createContext();

export const useCamera = () => useContext(CameraContext);

export const CameraProvider = ({ children }) => {
  const [activeCamera, setActiveCamera] = useState("default");

  const switchCamera = (camName) => {
    setActiveCamera(camName);
  };

  return (
    <CameraContext.Provider value={{ activeCamera, switchCamera }}>
      {children}
    </CameraContext.Provider>
  );
};
