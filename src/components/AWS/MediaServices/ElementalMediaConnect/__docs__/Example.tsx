import React, { FC } from "react";
  import ElementalMediaConnect from "../ElementalMediaConnect";
  
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
        <ElementalMediaConnect width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  