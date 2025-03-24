import React, { FC } from "react";
  import NetworkFirewall from "../NetworkFirewall";
  
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
        <NetworkFirewall width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  