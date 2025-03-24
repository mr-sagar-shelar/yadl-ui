import React, { FC } from "react";
  import AzureNetAppFiles from "../AzureNetAppFiles";
  
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
        <AzureNetAppFiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  