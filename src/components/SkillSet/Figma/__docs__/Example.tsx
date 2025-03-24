import React, { FC } from "react";
  import Figma from "../Figma";
  
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
        <Figma width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  