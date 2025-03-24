import React, { FC } from "react";
  import AzureQuotas from "../AzureQuotas";
  
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
        <AzureQuotas width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  