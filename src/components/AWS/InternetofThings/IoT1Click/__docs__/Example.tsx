import React, { FC } from "react";
  import IoT1Click from "../IoT1Click";
  
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
        <IoT1Click width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  