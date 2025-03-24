import React, { FC } from "react";
  import OpenCV from "../OpenCV";
  
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
        <OpenCV width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  