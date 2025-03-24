import React, { FC } from "react";
  import InvestmentData from "../InvestmentData";
  
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
        <InvestmentData width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  