import React, { FC } from "react";
  import SpeechServices from "../SpeechServices";
  
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
        <SpeechServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  