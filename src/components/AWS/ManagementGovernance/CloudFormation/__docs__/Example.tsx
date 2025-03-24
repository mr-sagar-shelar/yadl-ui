import React, { FC } from "react";
  import CloudFormation from "../CloudFormation";
  
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
        <CloudFormation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  