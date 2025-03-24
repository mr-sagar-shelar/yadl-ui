import React, { FC } from "react";
  import AzureVirtualDesktop from "../AzureVirtualDesktop";
  
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
        <AzureVirtualDesktop width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  