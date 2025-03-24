import React, { FC } from "react";
  import DynamoDB from "../DynamoDB";
  
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
        <DynamoDB width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  