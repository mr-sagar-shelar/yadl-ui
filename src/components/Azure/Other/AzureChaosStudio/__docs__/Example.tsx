import React, { FC } from "react";
  import AzureChaosStudio from "../AzureChaosStudio";
  
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
        <AzureChaosStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  