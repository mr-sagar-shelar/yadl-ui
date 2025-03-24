import React, { FC } from "react";
  import DDoSProtectionPlans from "../DDoSProtectionPlans";
  
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
        <DDoSProtectionPlans width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  