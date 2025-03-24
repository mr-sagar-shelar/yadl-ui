import React, { FC } from "react";
  import Module from "../Module";
  
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
        <Module width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  