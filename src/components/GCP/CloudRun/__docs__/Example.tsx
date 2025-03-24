import React, { FC } from "react";
  import CloudRun from "../CloudRun";
  
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
        <CloudRun width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  