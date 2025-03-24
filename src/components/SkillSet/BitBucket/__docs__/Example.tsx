import React, { FC } from "react";
  import BitBucket from "../BitBucket";
  
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
        <BitBucket width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  