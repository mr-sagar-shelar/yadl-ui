import React, { FC } from "react";
  import NetworkTopology from "../NetworkTopology";
  
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
        <NetworkTopology width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  