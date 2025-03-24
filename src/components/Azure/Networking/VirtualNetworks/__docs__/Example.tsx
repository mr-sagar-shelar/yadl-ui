import React, { FC } from "react";
  import VirtualNetworks from "../VirtualNetworks";
  
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
        <VirtualNetworks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  