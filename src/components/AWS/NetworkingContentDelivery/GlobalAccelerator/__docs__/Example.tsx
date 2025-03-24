import React, { FC } from "react";
  import GlobalAccelerator from "../GlobalAccelerator";
  
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
        <GlobalAccelerator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  