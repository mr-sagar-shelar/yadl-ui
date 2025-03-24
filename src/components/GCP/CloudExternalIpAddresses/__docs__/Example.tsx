import React, { FC } from "react";
  import CloudExternalIpAddresses from "../CloudExternalIpAddresses";
  
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
        <CloudExternalIpAddresses width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  