import React, { FC } from "react";
  import Datastream from "../Datastream";
  
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
        <Datastream width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  