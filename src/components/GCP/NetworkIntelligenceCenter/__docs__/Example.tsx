import React, { FC } from "react";
  import NetworkIntelligenceCenter from "../NetworkIntelligenceCenter";
  
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
        <NetworkIntelligenceCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  