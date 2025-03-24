import React, { FC } from "react";
  import ElementalMediaTailor from "../ElementalMediaTailor";
  
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
        <ElementalMediaTailor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  