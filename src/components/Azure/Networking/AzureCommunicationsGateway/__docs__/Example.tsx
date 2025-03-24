import React, { FC } from "react";
  import AzureCommunicationsGateway from "../AzureCommunicationsGateway";
  
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
        <AzureCommunicationsGateway width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  