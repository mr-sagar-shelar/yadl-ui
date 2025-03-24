import React, { FC } from "react";
  import WalkingAroundWalkingAround from "../WalkingAroundWalkingAround";
  
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
        <WalkingAroundWalkingAround width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  