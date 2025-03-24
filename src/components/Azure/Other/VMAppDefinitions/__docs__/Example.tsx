import React, { FC } from "react";
  import VMAppDefinitions from "../VMAppDefinitions";
  
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
        <VMAppDefinitions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  