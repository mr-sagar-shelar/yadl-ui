import React, { FC } from "react";
  import ReactiveX from "../ReactiveX";
  
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
        <ReactiveX width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  