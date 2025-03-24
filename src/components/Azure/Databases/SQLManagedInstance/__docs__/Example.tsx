import React, { FC } from "react";
  import SQLManagedInstance from "../SQLManagedInstance";
  
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
        <SQLManagedInstance width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  