import React, { FC } from "react";
  import ApplicationGateways from "../ApplicationGateways";
  
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
        <ApplicationGateways width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  