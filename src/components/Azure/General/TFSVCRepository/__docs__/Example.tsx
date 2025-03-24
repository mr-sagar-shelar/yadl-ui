import React, { FC } from "react";
  import TFSVCRepository from "../TFSVCRepository";
  
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
        <TFSVCRepository width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  