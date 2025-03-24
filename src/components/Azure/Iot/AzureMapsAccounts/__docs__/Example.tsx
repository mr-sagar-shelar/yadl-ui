import React, { FC } from "react";
  import AzureMapsAccounts from "../AzureMapsAccounts";
  
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
        <AzureMapsAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  