import React, { FC } from "react";
  import CloudWatch from "../CloudWatch";
  
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
        <CloudWatch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  