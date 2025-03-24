import React, { FC } from "react";
  import FirewallManager from "../FirewallManager";
  
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
        <FirewallManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  