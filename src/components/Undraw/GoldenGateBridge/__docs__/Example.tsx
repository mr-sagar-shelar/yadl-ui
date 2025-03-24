import React, { FC } from "react";
  import GoldenGateBridge from "../GoldenGateBridge";
  
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
        <GoldenGateBridge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  