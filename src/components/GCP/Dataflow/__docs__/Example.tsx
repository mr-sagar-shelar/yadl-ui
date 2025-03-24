import React, { FC } from "react";
  import Dataflow from "../Dataflow";
  
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
        <Dataflow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  