import React, { FC } from "react";
  import ElementalServer from "../ElementalServer";
  
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
        <ElementalServer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  