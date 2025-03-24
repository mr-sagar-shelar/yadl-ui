import React, { FC } from "react";
  import AzureCommunicationServices from "../AzureCommunicationServices";
  
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
        <AzureCommunicationServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  