import React, { FC } from "react";
  import NatureFun from "../NatureFun";
  
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
        <NatureFun width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  