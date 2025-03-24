import React, { FC } from "react";
  import CloudFront from "../CloudFront";
  
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
        <CloudFront width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  