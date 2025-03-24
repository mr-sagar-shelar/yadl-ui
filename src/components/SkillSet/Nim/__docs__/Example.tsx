import React, { FC } from "react";
  import Nim from "../Nim";
  
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
        <Nim width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  