import React, { FC } from "react";
  import MobilePhotos from "../MobilePhotos";
  
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
        <MobilePhotos width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  