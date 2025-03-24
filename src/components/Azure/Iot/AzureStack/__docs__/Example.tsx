import React, { FC } from "react";
  import AzureStack from "../AzureStack";
  
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
        <AzureStack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  