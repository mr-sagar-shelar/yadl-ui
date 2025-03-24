import React, { FC } from "react";
  import PhotoSharing from "../PhotoSharing";
  
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
        <PhotoSharing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  