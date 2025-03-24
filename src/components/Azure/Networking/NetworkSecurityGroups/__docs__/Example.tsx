import React, { FC } from "react";
  import NetworkSecurityGroups from "../NetworkSecurityGroups";
  
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
        <NetworkSecurityGroups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  