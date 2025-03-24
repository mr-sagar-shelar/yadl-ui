import React, { FC } from "react";
  import SupplyChain from "../SupplyChain";
  
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
        <SupplyChain width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  