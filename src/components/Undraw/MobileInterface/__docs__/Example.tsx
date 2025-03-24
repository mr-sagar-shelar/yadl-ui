import React, { FC } from "react";
  import MobileInterface from "../MobileInterface";
  
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
        <MobileInterface width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  