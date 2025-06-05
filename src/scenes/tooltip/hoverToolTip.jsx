
import { Html } from "@react-three/drei";
import React from "react";

const HoverTooltip = ({ text = "", position = [0, 20, 0] }) => {
  return (
    <Html position={position} center>
      <div style={{ fontFamily: "'Lato', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/>
        <div
          style={{
            color: "white",
            fontSize: "16px",
            letterSpacing: "1px",
            textAlign: "center",
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {text}
        </div>
      </div>
    </Html>
  );
};

export default HoverTooltip;
