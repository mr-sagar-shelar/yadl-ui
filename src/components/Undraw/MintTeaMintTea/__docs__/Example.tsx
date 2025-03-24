import React, { FC } from "react";
  import MintTeaMintTea from "../MintTeaMintTea";
  
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
        <MintTeaMintTea width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  