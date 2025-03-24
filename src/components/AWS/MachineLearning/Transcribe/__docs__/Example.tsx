import React, { FC } from "react";
  import Transcribe from "../Transcribe";
  
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
        <Transcribe width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  