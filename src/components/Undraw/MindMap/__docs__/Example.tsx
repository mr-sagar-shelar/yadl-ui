import React, { FC } from "react";
  import MindMap from "../MindMap";
  
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
        <MindMap width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  