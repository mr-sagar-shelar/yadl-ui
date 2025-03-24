import React, { FC } from "react";
  import PhotoSession from "../PhotoSession";
  
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
        <PhotoSession width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  