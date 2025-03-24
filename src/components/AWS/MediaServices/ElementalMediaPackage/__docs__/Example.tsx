import React, { FC } from "react";
  import ElementalMediaPackage from "../ElementalMediaPackage";
  
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
        <ElementalMediaPackage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  