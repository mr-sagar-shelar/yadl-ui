import React, { FC } from "react";
  import CloudHealthcareMarketplace from "../CloudHealthcareMarketplace";
  
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
        <CloudHealthcareMarketplace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  