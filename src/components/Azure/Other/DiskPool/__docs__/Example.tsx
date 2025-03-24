import React, { FC } from "react";
  import DiskPool from "../DiskPool";
  
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
        <DiskPool width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  