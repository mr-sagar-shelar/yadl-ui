import React, { FC } from "react";
  import InputOutput from "../InputOutput";
  
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
        <InputOutput width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  