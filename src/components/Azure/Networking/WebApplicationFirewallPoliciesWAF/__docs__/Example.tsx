import React, { FC } from "react";
  import WebApplicationFirewallPoliciesWAF from "../WebApplicationFirewallPoliciesWAF";
  
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
        <WebApplicationFirewallPoliciesWAF width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  