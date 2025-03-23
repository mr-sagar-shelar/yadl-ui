import React, { FC } from "react";
import VoiceInterface from "../VoiceInterface";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <VoiceInterface width="500px" height="500px" />
    </div>
  );
};

export default Example;
