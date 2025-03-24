import React, { FC } from "react";
  import AzureSQLVM from "../AzureSQLVM";
  
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
        <AzureSQLVM width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  