import React, { FC } from "react";
  import MomentToRemember from "../MomentToRemember";
  
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
        <MomentToRemember width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  