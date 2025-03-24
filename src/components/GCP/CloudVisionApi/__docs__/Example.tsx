import React, { FC } from "react";
  import CloudVisionApi from "../CloudVisionApi";
  
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
        <CloudVisionApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  