import React, { FC } from "react";
  import VMImageVersion from "../VMImageVersion";
  
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
        <VMImageVersion width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  