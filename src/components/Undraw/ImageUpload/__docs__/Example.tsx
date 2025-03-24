import React, { FC } from "react";
  import ImageUpload from "../ImageUpload";
  
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
        <ImageUpload width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  