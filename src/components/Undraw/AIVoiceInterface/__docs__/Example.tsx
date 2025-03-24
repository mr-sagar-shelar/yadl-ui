import React, { FC } from "react";
  import AIVoiceInterface from "../AIVoiceInterface";
  
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
        <AIVoiceInterface width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  