import React, { FC } from "react";
  import VPCLattice from "../VPCLattice";
  
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
        <VPCLattice width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  