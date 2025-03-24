import React, { FC } from "react";
  import OpenSupplyChainPlatform from "../OpenSupplyChainPlatform";
  
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
        <OpenSupplyChainPlatform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  