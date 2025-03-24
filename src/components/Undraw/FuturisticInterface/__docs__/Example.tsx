import React, { FC } from "react";
  import FuturisticInterface from "../FuturisticInterface";
  
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
        <FuturisticInterface width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  