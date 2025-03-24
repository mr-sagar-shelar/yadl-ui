import React, { FC } from "react";
  import XRay from "../XRay";
  
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
        <XRay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  