import React, { FC } from "react";
  import AzureFirewallPolicy from "../AzureFirewallPolicy";
  
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
        <AzureFirewallPolicy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  