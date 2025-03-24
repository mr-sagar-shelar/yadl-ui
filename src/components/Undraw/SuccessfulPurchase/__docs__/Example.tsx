import React, { FC } from "react";
  import SuccessfulPurchase from "../SuccessfulPurchase";
  
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
        <SuccessfulPurchase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  