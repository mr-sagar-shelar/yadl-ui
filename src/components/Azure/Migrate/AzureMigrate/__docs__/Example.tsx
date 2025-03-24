import React, { FC } from "react";
  import AzureMigrate from "../AzureMigrate";
  
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
        <AzureMigrate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  