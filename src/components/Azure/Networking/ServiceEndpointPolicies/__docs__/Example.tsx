import React, { FC } from "react";
  import ServiceEndpointPolicies from "../ServiceEndpointPolicies";
  
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
        <ServiceEndpointPolicies width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  