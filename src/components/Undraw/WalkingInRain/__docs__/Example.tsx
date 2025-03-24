import React, { FC } from "react";
  import WalkingInRain from "../WalkingInRain";
  
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
        <WalkingInRain width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  