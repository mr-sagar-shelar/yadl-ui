import React, { FC } from "react";
  import RemoteRendering from "../RemoteRendering";
  
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
        <RemoteRendering width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  