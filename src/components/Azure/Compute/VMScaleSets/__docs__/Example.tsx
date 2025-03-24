import React, { FC } from "react";
  import VMScaleSets from "../VMScaleSets";
  
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
        <VMScaleSets width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  