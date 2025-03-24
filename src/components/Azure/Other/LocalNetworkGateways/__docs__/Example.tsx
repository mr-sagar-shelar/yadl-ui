import React, { FC } from "react";
  import LocalNetworkGateways from "../LocalNetworkGateways";
  
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
        <LocalNetworkGateways width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  