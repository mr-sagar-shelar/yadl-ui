import React, { FC } from "react";
  import CostAlerts from "../CostAlerts";
  
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
        <CostAlerts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  