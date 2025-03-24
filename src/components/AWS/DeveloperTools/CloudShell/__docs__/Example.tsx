import React, { FC } from "react";
  import CloudShell from "../CloudShell";
  
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
        <CloudShell width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  