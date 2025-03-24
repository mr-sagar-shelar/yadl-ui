import React, { FC } from "react";
  import AnthosServiceMesh from "../AnthosServiceMesh";
  
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
        <AnthosServiceMesh width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  