import React, { FC } from "react";
  import AzureProgrammableConnectivity from "../AzureProgrammableConnectivity";
  
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
        <AzureProgrammableConnectivity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  