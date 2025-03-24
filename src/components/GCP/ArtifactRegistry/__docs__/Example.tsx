import React, { FC } from "react";
  import ArtifactRegistry from "../ArtifactRegistry";
  
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
        <ArtifactRegistry width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  