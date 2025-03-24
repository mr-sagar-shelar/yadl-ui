import React, { FC } from "react";
  import WalkingTogether from "../WalkingTogether";
  
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
        <WalkingTogether width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  