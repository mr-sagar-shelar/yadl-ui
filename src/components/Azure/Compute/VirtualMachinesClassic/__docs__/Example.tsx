import React, { FC } from "react";
  import VirtualMachinesClassic from "../VirtualMachinesClassic";
  
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
        <VirtualMachinesClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  