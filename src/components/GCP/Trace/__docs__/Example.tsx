import React, { FC } from "react";
  import Trace from "../Trace";
  
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
        <Trace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  