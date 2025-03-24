import React, { FC } from "react";
  import Emotion from "../Emotion";
  
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
        <Emotion width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  