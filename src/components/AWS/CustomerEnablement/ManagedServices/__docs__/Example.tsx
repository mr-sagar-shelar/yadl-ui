import React, { FC } from "react";
  import ManagedServices from "../ManagedServices";
  
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
        <ManagedServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  