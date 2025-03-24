import React, { FC } from "react";
  import CostManagementandBilling from "../CostManagementandBilling";
  
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
        <CostManagementandBilling width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  