import React, { FC } from "react";
  import Ktor from "../Ktor";
  
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
        <Ktor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  