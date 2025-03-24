import React, { FC } from "react";
  import Vertexai from "../Vertexai";
  
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
        <Vertexai width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  