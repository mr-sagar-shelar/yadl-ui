import React, { FC } from "react";
  import Segmentation from "../Segmentation";
  
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
        <Segmentation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  