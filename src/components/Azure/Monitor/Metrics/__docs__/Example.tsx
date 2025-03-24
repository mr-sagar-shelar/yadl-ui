import React, { FC } from "react";
  import Metrics from "../Metrics";
  
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
        <Metrics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  