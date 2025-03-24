import React, { FC } from "react";
  import WalkingOutside from "../WalkingOutside";
  
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
        <WalkingOutside width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  