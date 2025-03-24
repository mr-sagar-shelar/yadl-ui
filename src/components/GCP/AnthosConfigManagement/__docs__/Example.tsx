import React, { FC } from "react";
  import AnthosConfigManagement from "../AnthosConfigManagement";
  
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
        <AnthosConfigManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  