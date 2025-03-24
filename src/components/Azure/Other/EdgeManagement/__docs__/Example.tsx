import React, { FC } from "react";
  import EdgeManagement from "../EdgeManagement";
  
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
        <EdgeManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  