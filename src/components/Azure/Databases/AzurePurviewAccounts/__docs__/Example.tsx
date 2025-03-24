import React, { FC } from "react";
  import AzurePurviewAccounts from "../AzurePurviewAccounts";
  
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
        <AzurePurviewAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  