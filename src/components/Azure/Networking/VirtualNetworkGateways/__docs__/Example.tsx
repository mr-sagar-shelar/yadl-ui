import React, { FC } from "react";
  import VirtualNetworkGateways from "../VirtualNetworkGateways";
  
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
        <VirtualNetworkGateways width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  