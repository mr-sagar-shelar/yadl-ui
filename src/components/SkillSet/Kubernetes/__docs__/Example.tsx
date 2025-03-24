import React, { FC } from "react";
  import Kubernetes from "../Kubernetes";
  
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
        <Kubernetes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  