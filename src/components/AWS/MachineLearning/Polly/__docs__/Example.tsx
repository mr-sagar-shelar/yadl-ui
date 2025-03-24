import React, { FC } from "react";
  import Polly from "../Polly";
  
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
        <Polly width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  