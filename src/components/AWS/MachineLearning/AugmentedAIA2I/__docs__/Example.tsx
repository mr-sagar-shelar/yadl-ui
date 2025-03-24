import React, { FC } from "react";
  import AugmentedAIA2I from "../AugmentedAIA2I";
  
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
        <AugmentedAIA2I width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  