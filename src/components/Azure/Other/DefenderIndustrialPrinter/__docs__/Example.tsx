import React, { FC } from "react";
  import DefenderIndustrialPrinter from "../DefenderIndustrialPrinter";
  
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
        <DefenderIndustrialPrinter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  