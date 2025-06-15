// utils/handleModelClick.js
export const createModelClickHandler = ({ modelName, onClick, cameraId, switchCamera }) => {
  return () => {
    alert(`ABOUT ${modelName.toUpperCase()} BLOCK`);
    if (switchCamera && cameraId) {
      switchCamera(cameraId);
    }
    if (onClick) onClick(modelName);
  };
};
