import React, { FC } from "react";
  import AppMesh from "../AppMesh";
  
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
        <AppMesh width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  