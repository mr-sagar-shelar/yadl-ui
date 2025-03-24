import React, { FC } from "react";
  import Sketchup from "../Sketchup";
  
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
        <Sketchup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  