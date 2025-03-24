import React, { FC } from "react";
  import Marketplace_ from "../Marketplace_";
  
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
        <Marketplace_ width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  