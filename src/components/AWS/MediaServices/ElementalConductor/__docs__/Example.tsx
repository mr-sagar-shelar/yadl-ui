import React, { FC } from "react";
  import ElementalConductor from "../ElementalConductor";
  
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
        <ElementalConductor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  