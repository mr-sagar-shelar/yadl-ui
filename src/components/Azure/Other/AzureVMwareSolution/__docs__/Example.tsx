import React, { FC } from "react";
  import AzureVMwareSolution from "../AzureVMwareSolution";
  
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
        <AzureVMwareSolution width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  