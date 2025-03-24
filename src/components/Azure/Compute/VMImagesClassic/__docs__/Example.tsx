import React, { FC } from "react";
  import VMImagesClassic from "../VMImagesClassic";
  
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
        <VMImagesClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  