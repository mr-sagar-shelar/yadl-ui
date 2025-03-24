import React, { FC } from "react";
  import Electron from "../Electron";
  
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
        <Electron width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  