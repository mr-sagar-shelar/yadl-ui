import React, { FC } from "react";
  import AzureFirewallManager from "../AzureFirewallManager";
  
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
        <AzureFirewallManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  