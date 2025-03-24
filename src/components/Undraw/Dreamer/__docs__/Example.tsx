import React, { FC } from "react";
  import Dreamer from "../Dreamer";
  
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
        <Dreamer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  