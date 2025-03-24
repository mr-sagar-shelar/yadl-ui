import React, { FC } from "react";
  import IndustrialIoT from "../IndustrialIoT";
  
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
        <IndustrialIoT width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  