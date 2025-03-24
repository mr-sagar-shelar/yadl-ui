import React, { FC } from "react";
  import Fargate from "../Fargate";
  
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
        <Fargate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  