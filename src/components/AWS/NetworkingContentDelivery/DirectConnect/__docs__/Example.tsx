import React, { FC } from "react";
  import DirectConnect from "../DirectConnect";
  
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
        <DirectConnect width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  