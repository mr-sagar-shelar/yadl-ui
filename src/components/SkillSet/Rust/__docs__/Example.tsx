import React, { FC } from "react";
  import Rust from "../Rust";
  
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
        <Rust width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  