import React, { FC } from "react";
  import IntegrationServiceEnvironments from "../IntegrationServiceEnvironments";
  
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
        <IntegrationServiceEnvironments width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  