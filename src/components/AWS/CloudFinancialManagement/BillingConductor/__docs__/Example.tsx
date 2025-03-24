import React, { FC } from "react";
  import BillingConductor from "../BillingConductor";
  
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
        <BillingConductor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  