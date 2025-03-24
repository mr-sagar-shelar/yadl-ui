import React, { FC } from "react";
  import CodeArtifact from "../CodeArtifact";
  
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
        <CodeArtifact width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  