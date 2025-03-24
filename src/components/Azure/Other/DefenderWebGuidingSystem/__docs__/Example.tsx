import React, { FC } from "react";
  import DefenderWebGuidingSystem from "../DefenderWebGuidingSystem";
  
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
        <DefenderWebGuidingSystem width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  