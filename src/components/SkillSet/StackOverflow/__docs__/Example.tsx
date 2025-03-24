import React, { FC } from "react";
  import StackOverflow from "../StackOverflow";
  
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
        <StackOverflow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  