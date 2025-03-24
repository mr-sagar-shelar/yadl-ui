import React, { FC } from "react";
  import Rekognition from "../Rekognition";
  
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
        <Rekognition width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  