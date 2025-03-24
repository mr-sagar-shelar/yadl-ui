import React, { FC } from "react";
  import ElementalMediaLive from "../ElementalMediaLive";
  
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
        <ElementalMediaLive width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  