import React, { FC } from "react";
  import ThinkboxXMesh from "../ThinkboxXMesh";
  
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
        <ThinkboxXMesh width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  