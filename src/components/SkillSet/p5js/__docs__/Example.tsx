import React, { FC } from "react";
  import p5js from "../p5js";
  
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
        <p5js width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  