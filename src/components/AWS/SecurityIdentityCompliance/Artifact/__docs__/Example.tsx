import React, { FC } from "react";
  import Artifact from "../Artifact";
  
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
        <Artifact width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  