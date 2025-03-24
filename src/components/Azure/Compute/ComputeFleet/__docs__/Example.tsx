import React, { FC } from "react";
  import ComputeFleet from "../ComputeFleet";
  
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
        <ComputeFleet width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  