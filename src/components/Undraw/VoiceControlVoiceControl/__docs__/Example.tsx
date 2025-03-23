import React, { FC } from "react";
import VoiceControlVoiceControl from "../VoiceControlVoiceControl";

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
      <VoiceControlVoiceControl width="500px" height="500px" />
    </div>
  );
};

export default Example;
