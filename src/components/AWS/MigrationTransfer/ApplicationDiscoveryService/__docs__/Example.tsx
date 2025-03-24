import React, { FC } from "react";
  import ApplicationDiscoveryService from "../ApplicationDiscoveryService";
  
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
        <ApplicationDiscoveryService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  