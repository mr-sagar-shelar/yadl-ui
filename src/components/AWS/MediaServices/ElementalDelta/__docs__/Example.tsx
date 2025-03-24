import React, { FC } from "react";
  import ElementalDelta from "../ElementalDelta";
  
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
        <ElementalDelta width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  