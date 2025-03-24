import React, { FC } from "react";
  import Marketplace_Dark from "../Marketplace_Dark";
  
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
        <Marketplace_Dark width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  