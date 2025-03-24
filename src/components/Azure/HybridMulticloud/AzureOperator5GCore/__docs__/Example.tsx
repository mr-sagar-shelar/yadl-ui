import React, { FC } from "react";
  import AzureOperator5GCore from "../AzureOperator5GCore";
  
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
        <AzureOperator5GCore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  