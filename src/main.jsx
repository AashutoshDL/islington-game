import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CameraProvider } from "./scenes/context/CameraContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CameraProvider>
      <App />
    </CameraProvider>
    </BrowserRouter>
  </StrictMode>
);
