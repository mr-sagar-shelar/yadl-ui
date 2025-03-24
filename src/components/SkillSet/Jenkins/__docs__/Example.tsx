import React, { FC } from "react";
  import Jenkins from "../Jenkins";
  
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
        <Jenkins width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  