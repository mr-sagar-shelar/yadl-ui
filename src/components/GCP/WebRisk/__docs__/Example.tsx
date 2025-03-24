import React, { FC } from "react";
  import WebRisk from "../WebRisk";
  
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
        <WebRisk width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  