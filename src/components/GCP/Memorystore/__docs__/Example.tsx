import React, { FC } from "react";
  import Memorystore from "../Memorystore";
  
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
        <Memorystore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  