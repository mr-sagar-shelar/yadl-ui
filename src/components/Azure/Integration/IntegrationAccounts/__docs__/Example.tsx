import React, { FC } from "react";
  import IntegrationAccounts from "../IntegrationAccounts";
  
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
        <IntegrationAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  