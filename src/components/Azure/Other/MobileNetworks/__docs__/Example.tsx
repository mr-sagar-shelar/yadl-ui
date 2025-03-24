import React, { FC } from "react";
  import MobileNetworks from "../MobileNetworks";
  
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
        <MobileNetworks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  