import React, { FC } from "react";
  import RiskManager from "../RiskManager";
  
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
        <RiskManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  