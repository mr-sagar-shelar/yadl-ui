import React, { FC } from "react";
  import VmwareEngine from "../VmwareEngine";
  
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
        <VmwareEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  