import React, { FC } from "react";
  import DotNet from "../DotNet";
  
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
        <DotNet width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  