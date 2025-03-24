import React, { FC } from "react";
  import Workflows from "../Workflows";
  
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
        <Workflows width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  