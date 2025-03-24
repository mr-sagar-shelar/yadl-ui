import React, { FC } from "react";
  import ManagedGrafana from "../ManagedGrafana";
  
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
        <ManagedGrafana width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  