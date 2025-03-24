import React, { FC } from "react";
  import Prometheus from "../Prometheus";
  
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
        <Prometheus width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  