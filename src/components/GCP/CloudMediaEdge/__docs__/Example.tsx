import React, { FC } from "react";
  import CloudMediaEdge from "../CloudMediaEdge";
  
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
        <CloudMediaEdge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  