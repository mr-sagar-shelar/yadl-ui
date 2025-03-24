import React, { FC } from "react";
  import ChimeVoiceConnector from "../ChimeVoiceConnector";
  
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
        <ChimeVoiceConnector width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  