import React, { FC } from "react";
  import AttachedFile from "../AttachedFile";
  
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
        <AttachedFile width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  