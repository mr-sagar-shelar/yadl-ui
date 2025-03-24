import React, { FC } from "react";
  import DefenderPLC from "../DefenderPLC";
  
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
        <DefenderPLC width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  