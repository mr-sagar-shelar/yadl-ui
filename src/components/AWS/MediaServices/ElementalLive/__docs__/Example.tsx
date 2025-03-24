import React, { FC } from "react";
  import ElementalLive from "../ElementalLive";
  
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
        <ElementalLive width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  