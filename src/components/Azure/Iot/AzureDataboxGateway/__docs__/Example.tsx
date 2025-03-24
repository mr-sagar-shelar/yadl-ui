import React, { FC } from "react";
  import AzureDataboxGateway from "../AzureDataboxGateway";
  
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
        <AzureDataboxGateway width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  