import React, { FC } from "react";
  import FinancialServicesMarketplace from "../FinancialServicesMarketplace";
  
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
        <FinancialServicesMarketplace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  