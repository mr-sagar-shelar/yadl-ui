import React, { FC } from "react";
  import ArcMachines from "../ArcMachines";
  
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
        <ArcMachines width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  