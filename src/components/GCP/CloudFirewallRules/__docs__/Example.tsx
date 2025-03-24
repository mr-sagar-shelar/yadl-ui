import React, { FC } from "react";
  import CloudFirewallRules from "../CloudFirewallRules";
  
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
        <CloudFirewallRules width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  