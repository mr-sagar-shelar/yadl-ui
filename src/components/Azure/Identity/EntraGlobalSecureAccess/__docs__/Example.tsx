import React, { FC } from "react";
  import EntraGlobalSecureAccess from "../EntraGlobalSecureAccess";
  
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
        <EntraGlobalSecureAccess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  