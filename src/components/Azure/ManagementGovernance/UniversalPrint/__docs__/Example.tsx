import React, { FC } from "react";
  import UniversalPrint from "../UniversalPrint";
  
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
        <UniversalPrint width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  