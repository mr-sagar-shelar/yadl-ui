import React, { FC } from "react";
  import Mint from "../Mint";
  
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
        <Mint width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  