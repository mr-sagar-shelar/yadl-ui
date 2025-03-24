import React, { FC } from "react";
  import AzureOrbital from "../AzureOrbital";
  
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
        <AzureOrbital width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  