import React, { FC } from "react";
  import ManagedDatabase from "../ManagedDatabase";
  
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
        <ManagedDatabase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  