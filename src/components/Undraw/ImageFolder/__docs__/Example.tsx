import React, { FC } from "react";
  import ImageFolder from "../ImageFolder";
  
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
        <ImageFolder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  