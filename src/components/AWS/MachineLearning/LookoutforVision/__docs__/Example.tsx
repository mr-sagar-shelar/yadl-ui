import React, { FC } from "react";
  import LookoutforVision from "../LookoutforVision";
  
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
        <LookoutforVision width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  