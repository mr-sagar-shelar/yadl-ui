import React, { FC } from "react";
  import Flutter from "../Flutter";
  
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
        <Flutter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  