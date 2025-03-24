import React, { FC } from "react";
  import AzureManagedGrafana from "../AzureManagedGrafana";
  
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
        <AzureManagedGrafana width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  