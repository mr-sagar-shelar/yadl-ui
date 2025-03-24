import React, { FC } from "react";
  import AKSIstio from "../AKSIstio";
  
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
        <AKSIstio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  