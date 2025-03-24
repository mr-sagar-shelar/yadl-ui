import React, { FC } from "react";
  import OSImagesClassic from "../OSImagesClassic";
  
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
        <OSImagesClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  