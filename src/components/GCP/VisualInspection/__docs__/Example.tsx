import React, { FC } from "react";
  import VisualInspection from "../VisualInspection";
  
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
        <VisualInspection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  