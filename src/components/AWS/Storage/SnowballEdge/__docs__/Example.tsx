import React, { FC } from "react";
  import SnowballEdge from "../SnowballEdge";
  
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
        <SnowballEdge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  