import React, { FC } from "react";
  import TenantStatus from "../TenantStatus";
  
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
        <TenantStatus width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  