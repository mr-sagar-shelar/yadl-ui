import React, { FC } from "react";
  import AzureDatabricks from "../AzureDatabricks";
  
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
        <AzureDatabricks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  