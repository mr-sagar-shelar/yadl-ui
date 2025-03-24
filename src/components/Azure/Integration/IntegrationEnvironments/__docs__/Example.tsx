import React, { FC } from "react";
  import IntegrationEnvironments from "../IntegrationEnvironments";
  
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
        <IntegrationEnvironments width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  