import React, { FC } from "react";
  import SharedImageGalleries from "../SharedImageGalleries";
  
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
        <SharedImageGalleries width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  