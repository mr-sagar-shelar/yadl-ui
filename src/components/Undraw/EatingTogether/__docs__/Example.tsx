import React, { FC } from "react";
  import EatingTogether from "../EatingTogether";
  
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
        <EatingTogether width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  